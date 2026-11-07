const ALIASES = {
  title: ['课程名称', '课程名', '课程', '名称'],
  day: ['星期', '上课星期', '星期几', '周几'],
  period: ['节次', '上课节次', '上课节数'],
  first: ['开始节次', '起始节次'],
  last: ['结束节次', '终止节次'],
  weekText: ['周次', '上课周次', '教学周'],
  parity: ['单双周', '周类型'],
  room: ['教室', '上课地点', '教学地点', '地点'],
  teacher: ['教师', '任课教师', '授课教师', '老师'],
  start: ['开始时间', '上课时间'],
  end: ['结束时间', '下课时间'],
};

function readTable(source) {
  const delimiter = source.split(/\r?\n/, 12).some(line => line.includes('\t')) ? '\t' : ',';
  const table = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (char === '"') {
      if (quoted && source[i + 1] === '"') { field += '"'; i++; }
      else if (quoted || !field.length) quoted = !quoted;
      else field += char;
    } else if (!quoted && (char === delimiter || char === '\n')) {
      row.push(field.trim());
      field = '';
      if (char === '\n') { table.push(row); row = []; }
    } else field += char;
  }
  if (quoted) throw Error('表格里有未闭合的引号，请重新复制或导出');
  table.push([...row, field.trim()]);
  return table;
}

function parseDay(value) {
  const day = value.replace(/^(?:星期|礼拜|周)/, '');
  if (/^[1-7]$/.test(day)) return Number(day) - 1;
  return day.length === 1 ? '一二三四五六日'.indexOf(day === '天' ? '日' : day) : -1;
}

function periods(value) {
  const compact = value.replace(/[第节\s]/g, '');
  const match = compact.match(/^(\d{1,2})(?:[-–—~～至](\d{1,2}))?$/);
  if (!match) throw Error('节次应类似 1-2 或第 3 节');
  return [Number(match[1]), Number(match[2] ?? match[1])];
}

function weekFields(weeks, parity) {
  const rule = parity || (weeks.match(/[单双]周?/) || [])[0] || '';
  const types = { '': 'all', '每周': 'all', '全部': 'all', '单': 'odd', '单周': 'odd', '双': 'even', '双周': 'even' };
  if (!Object.hasOwn(types, rule)) throw Error('单双周应为每周、单周或双周');
  const weekText = weeks.replace(/(?:单周?|双周?|每周|全部)/g, '').replace(/[第周()（）\[\]【】\s]/g, '');
  return { weekText, parity: types[rule] };
}

function time(value) {
  const match = value.match(/^(\d{1,2})[:：](\d{2})(?::00)?$/);
  return match ? match[1].padStart(2, '0') + ':' + match[2] : value;
}

export function parseTimetableRows(source, person) {
  source = source.replace(/^\uFEFF/, '');
  if (!source.trim()) throw Error('请先粘贴课程明细或选择 CSV 文件');
  if (source.length > 200000) throw Error('请只导入个人课表，文本须小于 20 万字符');
  const table = readTable(source);
  const columnsFor = row => Object.fromEntries(Object.entries(ALIASES).map(([key, aliases]) =>
    [key, row.findIndex(value => aliases.includes(value.replace(/\s/g, '').replace(/[（(]可选[）)]$/, '')))]));
  const hasRequired = c => c.title >= 0 && c.day >= 0 && c.weekText >= 0 && (c.period >= 0 || c.first >= 0);
  const header = table.findIndex((row, index) => index < 12 && hasRequired(columnsFor(row)));
  if (header < 0) throw Error('未找到课程名称、星期、节次、周次四类列。请复制带表头的课程明细。');
  if (table.length - header - 1 > 300) throw Error('每次最多导入 300 条课程，请分批导入');
  const columns = columnsFor(table[header]);
  const result = [];
  for (let i = header + 1; i < table.length; i++) {
    const row = table[i];
    if (!row.some(Boolean)) continue;
    const get = key => row[columns[key]] || '';
    try {
      const [first, last] = get('period') ? periods(get('period')) : periods(
        get('first') + (get('last') ? '-' + get('last') : ''));
      const week = weekFields(get('weekText'), get('parity'));
      result.push({ row: i + 1, course: {
        type: 'course', person, title: get('title'), day: parseDay(get('day')), first, last, ...week,
        room: get('room'), teacher: get('teacher'), start: time(get('start')), end: time(get('end')),
      } });
    } catch (error) {
      result.push({ row: i + 1, error: error.message });
    }
  }
  if (!result.length) throw Error('表头下没有课程记录');
  return result;
}
