import { parseTimetableRows } from './timetable-import.js';

// Each entry describes one weekly meeting, so a course can have several times.
export const TIMETABLE_KEY = 'couple-timetable-v1';
export const PEOPLE = {
  girl: { label: '女生', school: '海南大学', short: '海大' },
  boy: { label: '男生', school: '桂林电子科技大学', short: '桂电' },
};
const DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const DAY = 86400000;
const MAX_WEEKS = 40;
const MAX_PERIODS = 16;
const calendar = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
});
function todayInChina() {
  const parts = Object.fromEntries(calendar.formatToParts(new Date()).map(({ type, value }) => [type, value]));
  return parts.year + '-' + parts.month + '-' + parts.day;
}
const utcDate = value => new Date(value + 'T00:00:00Z');
const dayString = date => date.toISOString().slice(0, 10);
const shiftDays = (value, days) => dayString(new Date(+utcDate(value) + days * DAY));
const validDate = value => typeof value === 'string' && /^20\d{2}-\d{2}-\d{2}$/.test(value)
  && Number.isFinite(+utcDate(value)) && dayString(utcDate(value)) === value;
const dayIndex = value => (utcDate(value).getUTCDay() + 6) % 7;
export const mondayOf = value => shiftDays(value, -dayIndex(value));

export function teachingWeek(monday, term) {
  if (!term) return null;
  const week = Math.floor((+utcDate(monday) - +utcDate(term.firstMonday)) / (7 * DAY)) + 1;
  return week >= 1 && week <= term.length ? week : null;
}

export function parseWeeks(value, parity = 'all', limit = MAX_WEEKS) {
  if (typeof value !== 'string' || value.length > 160) throw Error('请填写上课周次');
  const weeks = new Set();
  for (const part of value.trim().replace(/[，、]/g, ',').split(',')) {
    const match = part.trim().match(/^(\d{1,2})(?:\s*[-–—~～]\s*(\d{1,2}))?$/);
    if (!match) throw Error('周次格式示例：1-16，或 1-8,10,12');
    const first = Number(match[1]);
    const last = Number(match[2] ?? match[1]);
    if (first < 1 || last > limit || first > last) throw Error('上课周次须在第 1–' + limit + ' 周内');
    for (let week = first; week <= last; week++) {
      if (parity === 'all' || week % 2 === (parity === 'odd' ? 1 : 0)) weeks.add(week);
    }
  }
  if (!weeks.size) throw Error('所选周次没有符合单双周条件的课程');
  return [...weeks].sort((a, b) => a - b);
}

const inRange = (n, first, last) => Number.isInteger(n) && n >= first && n <= last;
const validText = (value, length) => typeof value === 'string' && value.length <= length;
const validTime = value => typeof value === 'string' && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);

export function validateTimetableRecord(record) {
  if (!record || !Object.hasOwn(PEOPLE, record.person) || !validText(record.id, 300) || !record.id) {
    throw Error('课表记录缺少成员或标识');
  }
  if (record.type === 'term') {
    if (record.id !== 'term-' + record.person || !validDate(record.firstMonday) || dayIndex(record.firstMonday) !== 0) {
      throw Error('请选择第一教学周的星期一');
    }
    if (!validText(record.label, 40) || !inRange(record.length, 1, MAX_WEEKS)) {
      throw Error('请输入有效的学期名称和教学周数（1–40）');
    }
    return;
  }
  if (record.type !== 'course' || record.id.startsWith('term-') || !validText(record.title, 80) || !record.title.trim()
    || !validText(record.room, 60) || !validText(record.teacher, 40)) throw Error('请检查课程名称、教室和教师');
  if (!inRange(record.day, 0, 6)) throw Error('上课星期应为周一至周日');
  if (!inRange(record.first, 1, MAX_PERIODS) || !inRange(record.last, record.first, MAX_PERIODS)) {
    throw Error('结束节次须等于或晚于开始节次');
  }
  if (record.start !== '' || record.end !== '') {
    if (!validTime(record.start) || !validTime(record.end) || record.start >= record.end) {
      throw Error('请填写完整的上课时间，结束时间须晚于开始时间');
    }
  }
  if (!['all', 'odd', 'even'].includes(record.parity)) throw Error('请选择有效的单双周');
  parseWeeks(record.weekText, record.parity);
}

function usable(record) {
  try { validateTimetableRecord(record); return true; }
  catch { return false; }
}

export function findConflicts(course, others) {
  const weeks = new Set(parseWeeks(course.weekText, course.parity));
  return others.filter(other => {
    if (other.id === course.id || other.person !== course.person || other.day !== course.day) return false;
    const overlap = course.start && other.start
      ? course.start < other.end && other.start < course.end
      : course.first <= other.last && other.first <= course.last;
    return overlap && parseWeeks(other.weekText, other.parity).some(week => weeks.has(week));
  });
}

const PARITY = { all: '每周', odd: '单周', even: '双周' };

// 两校本学期课表（按学校教务系统导出整理）。首教学周：海大 2026-08-31、桂电 2026-09-14。
// 仅用于首次引导：只补缺、不覆盖；学期已按其他日期设置时跳过，避免周次错位。
const TT_BUILTIN = {
  girl: {
    term: { label: '2026–2027 学年第一学期', firstMonday: '2026-08-31', length: 20 },
    courses: [
      { title: '工程优化方法及应用', day: 0, first: 1, last: 4, start: '08:00', end: '11:30', weekText: '3', parity: 'all', room: '生医B302', teacher: '' },
      { title: '工程伦理', day: 0, first: 3, last: 4, start: '09:50', end: '11:30', weekText: '4', parity: 'all', room: '生医B302', teacher: '' },
      { title: '分子影像概论', day: 0, first: 5, last: 6, start: '14:00', end: '15:40', weekText: '2-3', parity: 'all', room: '生医B302', teacher: '' },
      { title: '生物医学图像处理', day: 0, first: 7, last: 8, start: '15:50', end: '17:30', weekText: '2-5,7-10', parity: 'all', room: '生医B301', teacher: '' },
      { title: '专业前沿研讨', day: 1, first: 3, last: 4, start: '09:50', end: '11:30', weekText: '2-5,7-10', parity: 'all', room: '生医B301', teacher: '' },
      { title: '电子系统综合设计', day: 1, first: 5, last: 6, start: '14:00', end: '15:40', weekText: '2-5,7-10', parity: 'all', room: '生医B302', teacher: '' },
      { title: '建模与仿真', day: 1, first: 7, last: 8, start: '15:50', end: '17:30', weekText: '2-5,7-10', parity: 'all', room: '生医B302', teacher: '' },
      { title: '学术道德规范', day: 1, first: 9, last: 10, start: '18:30', end: '20:10', weekText: '12', parity: 'all', room: '海南大学生物医学工程学院大楼B104', teacher: '' },
      { title: '现代传感器技术', day: 1, first: 9, last: 10, start: '18:30', end: '20:10', weekText: '2-5,7-10', parity: 'all', room: '生医工大楼B103', teacher: '' },
      { title: '生物医学图像处理', day: 2, first: 1, last: 2, start: '08:00', end: '09:40', weekText: '2-5,7-10', parity: 'all', room: '生医B302', teacher: '' },
      { title: '分子影像概论', day: 2, first: 3, last: 4, start: '09:50', end: '11:30', weekText: '2-5,7-8', parity: 'all', room: '生医B302', teacher: '' },
      { title: '学术道德规范', day: 2, first: 5, last: 6, start: '14:00', end: '15:40', weekText: '12-15', parity: 'all', room: '生医B104（阶梯会议室）', teacher: '' },
      { title: '建模与仿真', day: 2, first: 5, last: 6, start: '14:00', end: '15:40', weekText: '2-5,7-10', parity: 'all', room: '生医B301', teacher: '' },
      { title: '现代信号处理', day: 2, first: 7, last: 8, start: '15:50', end: '17:30', weekText: '2-5,7-10', parity: 'all', room: '生医B301', teacher: '' },
      { title: '学术论文写作指导', day: 2, first: 9, last: 10, start: '18:30', end: '20:10', weekText: '2-5,7-10', parity: 'all', room: '生医B301', teacher: '' },
      { title: '电子系统综合设计', day: 3, first: 5, last: 6, start: '14:00', end: '15:40', weekText: '2-4,6-10', parity: 'all', room: '生医B301', teacher: '' },
      { title: '学术道德规范', day: 3, first: 7, last: 8, start: '15:50', end: '17:30', weekText: '12', parity: 'all', room: '海南大学生物医学工程学院大楼B104', teacher: '' },
      { title: '学术道德规范', day: 3, first: 7, last: 8, start: '15:50', end: '17:30', weekText: '14-15', parity: 'all', room: '生医B104（阶梯会议室）', teacher: '' },
      { title: '现代信号处理', day: 3, first: 7, last: 8, start: '15:50', end: '17:30', weekText: '2-4,6-10', parity: 'all', room: '生医B301', teacher: '' },
      { title: '工程伦理', day: 4, first: 1, last: 2, start: '08:00', end: '09:40', weekText: '3,6-8', parity: 'all', room: '生医B301', teacher: '' },
      { title: '工程伦理', day: 4, first: 1, last: 2, start: '08:00', end: '09:40', weekText: '10-12', parity: 'even', room: '生医B301', teacher: '' },
      { title: '现代传感器技术', day: 4, first: 3, last: 4, start: '09:50', end: '11:30', weekText: '2-3,6-10,12', parity: 'all', room: '生医B301', teacher: '' },
      { title: '工程优化方法及应用', day: 4, first: 5, last: 8, start: '14:00', end: '17:30', weekText: '3,6-8', parity: 'all', room: '生医B302', teacher: '' },
      { title: '工程优化方法及应用', day: 4, first: 5, last: 8, start: '14:00', end: '17:30', weekText: '10-12', parity: 'even', room: '生医B302', teacher: '' },
      { title: '分子影像概论', day: 5, first: 5, last: 10, start: '14:00', end: '20:10', weekText: '6-7', parity: 'all', room: '海南大学生物医学工程学院大楼B104', teacher: '' },
      { title: '工程优化方法及应用', day: 5, first: 5, last: 8, start: '14:00', end: '17:30', weekText: '10', parity: 'all', room: '生医B302', teacher: '' },
      { title: '工程伦理', day: 5, first: 9, last: 10, start: '18:30', end: '20:10', weekText: '10', parity: 'all', room: '生医B302', teacher: '' },
      { title: '分子影像概论', day: 6, first: 1, last: 4, start: '08:00', end: '11:30', weekText: '7', parity: 'all', room: '海南大学生物医学工程学院大楼B104', teacher: '' },
    ],
  },
  boy: {
    term: { label: '2026–2027 学年第一学期', firstMonday: '2026-09-14', length: 20 },
    courses: [
      { title: '自然辩证法概论', day: 5, first: 5, last: 8, start: '', end: '', weekText: '1-4', parity: 'all', room: '42教422304', teacher: '陈小玉' },
      { title: '自然辩证法概论', day: 5, first: 5, last: 6, start: '', end: '', weekText: '5', parity: 'all', room: '42教422304', teacher: '陈小玉' },
      { title: '光电探测及系统', day: 4, first: 7, last: 8, start: '', end: '', weekText: '6-17', parity: 'all', room: '学院实验室', teacher: '游道通' },
      { title: 'AI赋能光子学应用', day: 3, first: 9, last: 10, start: '', end: '', weekText: '6-13', parity: 'all', room: '花江慧谷2号楼2-311会议室', teacher: '王东辉' },
      { title: 'AI赋能光子学应用', day: 5, first: 9, last: 10, start: '', end: '', weekText: '5-12', parity: 'all', room: '花江慧谷2号楼2-311会议室', teacher: '王东辉' },
    ],
  },
};

function builtinId(firstMonday, parts) {
  const text = firstMonday + '|' + parts.join('|');
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index++) {
    hash ^= text.codePointAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return 'builtin-' + hash.toString(36) + '-' + text.length;
}

function planBuiltinSeeds(items) {
  const records = items.filter(usable);
  const changes = [];
  // 迁移（v0.7.7）：删除桂电第 11 节网课「研究生的压力应对与健康心理」。
  for (const record of records) {
    if (record.type === 'course' && record.person === 'boy'
      && record.title === '研究生的压力应对与健康心理'
      && record.day === 6 && record.first === 11 && record.last === 11 && record.weekText === '5-11') {
      changes.push({ id: record.id, value: null });
    }
  }
  const existingKeys = new Set(records.filter(record => record.type === 'course').map(record =>
    JSON.stringify([record.person, record.title, record.day, record.first, record.last,
      parseWeeks(record.weekText, record.parity)])));
  for (const [person, pack] of Object.entries(TT_BUILTIN)) {
    const term = records.find(record => record.id === 'term-' + person);
    // 迁移（v0.7.8）：海大第一教学周由 2026-09-07 更正为 2026-08-31。
    const girlTermFix = person === 'girl' && term && term.firstMonday === '2026-09-07';
    if (girlTermFix) {
      changes.push({ id: term.id, value: { ...term, firstMonday: '2026-08-31' } });
    }
    // 学期已按其他日期设置时跳过整校数据，避免周次对不上。
    if (term && term.firstMonday !== pack.term.firstMonday && !girlTermFix) continue;
    const firstMonday = girlTermFix || !term ? pack.term.firstMonday : term.firstMonday;
    if (!term) {
      changes.push({
        id: 'term-' + person,
        value: { id: 'term-' + person, type: 'term', person, ...pack.term },
      });
    }
    for (const course of pack.courses) {
      const key = JSON.stringify([person, course.title, course.day, course.first, course.last,
        parseWeeks(course.weekText, course.parity)]);
      const id = builtinId(firstMonday,
        [person, course.title, course.day, course.first, course.last, course.weekText, course.parity, course.room]);
      const existing = records.find(record => record.id === id);
      // 迁移（v0.7.7）：海大启用创新研学谷作息，同 id 记录只校准钟点，不动用户其他改动。
      if (existing && (existing.start !== course.start || existing.end !== course.end)) {
        changes.push({ id, value: { ...existing, start: course.start, end: course.end } });
      }
      if (existingKeys.has(key) || existing) continue;
      existingKeys.add(key);
      changes.push({ id, value: { ...course, id, type: 'course', person } });
    }
  }
  return changes;
}
const termDraft = (person, term) => term || {
  id: 'term-' + person, type: 'term', person, label: '', firstMonday: '', length: 20,
};
const courseDraft = (person, day, length) => ({
  type: 'course', person, day, title: '', first: 1, last: 2,
  start: '', end: '', weekText: '1-' + length, parity: 'all', room: '', teacher: '',
});
const periodLabel = course => '第 ' + (course.first === course.last ? course.first : course.first + '–' + course.last) + ' 节';
const courseTime = course => course.start ? course.start + '–' + course.end : periodLabel(course);
const shortDate = value => value.slice(5).replace('-', '/');
const courseOrder = (a, b) => (a.start || '99:99').localeCompare(b.start || '99:99') || a.first - b.first;

let R, h, api;
export function configureTimetable(react, services) {
  R = react;
  h = react.createElement;
  api = services;
}

export function TimetableData({ children }) {
  const collection = api.useCollection('timetable', TIMETABLE_KEY);
  const { items, mutateMany } = collection;
  const seeding = R.useRef('');
  R.useEffect(() => {
    const changes = planBuiltinSeeds(items);
    if (!changes.length) return;
    const signature = changes.map(change => change.id).sort().join(',');
    if (seeding.current === signature) return;
    seeding.current = signature;
    mutateMany(changes.map(({ id, value }) => ({ id, value })));
  }, [items, mutateMany]);
  return children(collection);
}

function Button({ children, className = 'mini-btn', ...props }) {
  return h('button', { type: 'button', className, ...props }, children);
}

function Field({ label, value, change, options, ...props }) {
  const update = event => change(event.target.value);
  const control = { className: 'field', value, onChange: update, ...props };
  return h('label', { className: 'ld-field' }, h('span', null, label),
    options
      ? h('select', control, options.map(([value, text]) => h('option', { key: value, value }, text)))
      : h('input', { ...control, onInput: update }));
}

function Editor({ title, close, submit, children }) {
  const dialog = R.useRef(null);
  R.useEffect(() => {
    const previous = document.activeElement;
    const element = dialog.current;
    element.showModal();
    return () => {
      element.close();
      if (previous instanceof HTMLElement && previous.isConnected) previous.focus();
    };
  }, []);
  return h('dialog', {
    ref: dialog, className: 'ld-dialog tt-dialog', 'aria-label': title,
    onCancel: event => { event.preventDefault(); close(); },
  }, h('form', { onSubmit: event => { event.preventDefault(); submit(); } },
    h('div', { className: 'tt-dialog-heading' }, h('h3', null, title),
      h(Button, { onClick: close, 'aria-label': '关闭编辑窗口' }, '关闭')),
    children));
}

function meetingKey(course) {
  return JSON.stringify([
    course.person, course.title.normalize('NFKC').toLowerCase(), course.day, course.first, course.last,
    parseWeeks(course.weekText, course.parity),
  ]);
}

function planImport(text, person, term, existing) {
  if (!term) throw Error('请先保存这位同学的学期设置');
  const seen = new Set(existing.map(meetingKey));
  const rows = parseTimetableRows(text, person);
  const additions = [];
  const errors = [];
  let duplicates = 0;
  for (const row of rows) {
    try {
      if (row.error) throw Error(row.error);
      const course = { ...row.course, id: 'import-preview-' + row.row };
      validateTimetableRecord(course);
      parseWeeks(course.weekText, course.parity, term.length);
      const key = meetingKey(course);
      if (seen.has(key)) { duplicates++; continue; }
      const collisions = findConflicts(course, [...existing, ...additions.map(item => item.course)]);
      additions.push({ course, key, collision: collisions.length > 0 });
      seen.add(key);
    } catch (error) {
      errors.push('第 ' + row.row + ' 行：' + error.message);
    }
  }
  return { additions, errors, duplicates, firstMonday: term.firstMonday };
}

async function importId(firstMonday, key) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(firstMonday + '\n' + key));
  return 'import-' + Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

function ImportEditor({ initialPerson, terms, courses, close, save }) {
  const [person, setPerson] = R.useState(initialPerson);
  const [text, setText] = R.useState('');
  const [preview, setPreview] = R.useState(null);
  const [error, setError] = R.useState('');
  const [busy, setBusy] = R.useState(false);
  const readVersion = R.useRef(0);
  const term = terms[person];
  const updateSource = value => {
    readVersion.current++;
    setText(value);
    setPreview(null);
    setError('');
  };
  async function loadFile(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setPreview(null);
    setError('');
    const version = ++readVersion.current;
    try {
      if (file.size > 600000) throw Error('请选择不超过 600 KB 的个人课表文件');
      const buffer = await file.arrayBuffer();
      let content;
      try { content = new TextDecoder('utf-8', { fatal: true }).decode(buffer); }
      catch { content = new TextDecoder('gb18030', { fatal: true }).decode(buffer); }
      if (version === readVersion.current) updateSource(content);
    } catch (problem) {
      if (version === readVersion.current) setError(problem.message || '文件读取失败');
    }
  }
  function inspect() {
    setError('');
    try { setPreview(planImport(text, person, term, courses)); }
    catch (problem) { setPreview(null); setError(problem.message); }
  }
  async function commit() {
    if (!preview?.additions.length || busy) return;
    setBusy(true);
    setError('');
    try {
      const latest = planImport(text, person, term, courses);
      if (JSON.stringify(latest) !== JSON.stringify(preview)) {
        setPreview(latest);
        setError('课表已更新，请重新核对预览。');
        return;
      }
      const changes = await Promise.all(latest.additions.map(async ({ course, key }) => {
        const id = await importId(term.firstMonday, key);
        return { id, value: { ...course, id } };
      }));
      if (!save(changes)) setError('保存失败。请检查浏览器存储后重试。');
    } catch (problem) { setError(problem.message); }
    finally { setBusy(false); }
  }
  return h(Editor, { title: '批量导入课表', close: busy ? () => {} : close, submit: preview ? commit : inspect },
    h('p', { className: 'tt-form-help' }, '在学校系统打开个人课表，复制带表头的课程明细，或下载 CSV 后选择文件。导入前先核对识别结果。'),
    h(Field, { label: '导入到', value: person, disabled: busy,
      change: value => { setPerson(value); setPreview(null); setError(''); },
      options: Object.entries(PEOPLE).map(([key, member]) => [key, member.label + ' · ' + member.school]) }),
    !term && h('p', { className: 'ld-notice' }, '请先在课表页面为这位同学设置第一教学周。'),
    h('label', { className: 'ld-field' }, '选择 CSV / TSV 文件',
      h('input', { type: 'file', accept: '.csv,.tsv,.txt,text/csv,text/tab-separated-values,text/plain', disabled: busy, onChange: loadFile })),
    h('label', { className: 'ld-field' }, '课程明细',
      h('textarea', {
        className: 'field tt-import-text', value: text, disabled: busy,
        placeholder: '课程名称\t星期\t节次\t周次\t教室\t教师\n示例课程\t周一\t1-2\t1-16单周\t教学楼101\t任课老师',
        onChange: event => updateSource(event.target.value), onInput: event => updateSource(event.target.value),
      })),
    h('p', { className: 'tt-form-help' }, '至少需要课程名称、星期、节次和周次。可附教室、教师、单双周及起止时间。Excel 表格可复制课程明细区域后粘贴。'),
    error && h('p', { className: 'tt-form-error', role: 'alert' }, error),
    preview && h('div', { className: 'tt-import-preview', 'aria-label': '导入预览' },
      h('strong', null, '可导入 ' + preview.additions.length + ' 条 · 重复 ' + preview.duplicates + ' 条 · 待核对 ' + preview.errors.length + ' 条'),
      h('ul', null, preview.additions.map(({ course, collision }) => h('li', { key: course.id },
        h('strong', null, course.title),
        h('span', null, [DAYS[course.day], courseTime(course), '第 ' + course.weekText + ' 周', PARITY[course.parity],
          course.room, collision ? '时间重叠' : ''].filter(Boolean).join(' · '))))),
      preview.errors.length > 0 && h('ul', { className: 'tt-form-error' },
        preview.errors.map(problem => h('li', { key: problem }, problem)))),
    h('div', { className: 'tt-form-actions' },
      h(Button, { onClick: close, disabled: busy }, '取消'),
      h('button', { className: 'primary-btn', type: 'submit',
        disabled: busy || !term || !text.trim() || (preview && !preview.additions.length) },
      busy ? '正在保存…' : preview ? '确认导入 ' + preview.additions.length + ' 条' : '预览导入')));
}

// 桂电每个时段两行：两节课的开始/结束时间（共 10 节）。
const GUET_TIMES = [
  '08:25 09:10 09:15 10:00', '10:25 11:10 11:15 12:00',
  '14:30 15:15 15:20 16:05', '16:30 17:15 17:20 18:05',
  '19:30 20:15 20:25 21:10',
];
// 海大（创新研学谷教学区，12 节）每节课的开始/结束时间。
const HAINAN_TIMES = [
  '08:00 08:45', '08:55 09:40', '09:50 10:35', '10:45 11:30',
  '14:00 14:45', '14:55 15:40', '15:50 16:35', '16:45 17:30',
  '18:30 19:15', '19:25 20:10', '20:20 21:05', '21:15 22:00',
];
function pairTimes(flat) {
  const rows = [];
  for (let index = 0; index < flat.length; index += 2) {
    rows.push(flat[index + 1] ? flat[index] + ' ' + flat[index + 1] : flat[index]);
  }
  return rows;
}
// 单人网格视图每行（两节）展示的钟点。
const GRID_ROWS = { boy: GUET_TIMES, girl: pairTimes(HAINAN_TIMES) };
const PERIOD_TIMES = { boy: [], girl: HAINAN_TIMES };
for (const row of GUET_TIMES) {
  const parts = row.split(' ');
  for (let index = 0; index < parts.length; index += 2) {
    PERIOD_TIMES.boy.push(parts[index] + ' ' + parts[index + 1]);
  }
}
function clockSpan(person, first, last) {
  const table = PERIOD_TIMES[person];
  if (!table) return '';
  const start = table[first - 1], end = table[last - 1];
  return start && end ? start.split(' ')[0] + '–' + end.split(' ')[1] : '';
}
function useNarrowTimetable() {
  const [narrow, setNarrow] = R.useState(
    typeof window < 'u' ? window.matchMedia('(max-width: 760px)').matches : false);
  R.useEffect(() => {
    const query = window.matchMedia('(max-width: 760px)');
    const onChange = event => setNarrow(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);
  return narrow;
}
export function TimetablePage({ collection }) {
  const narrow = useNarrowTimetable();
  const [person, setPerson] = R.useState(() => collection.items.some(item => item.id === 'term-girl')
    && !collection.items.some(item => item.id === 'term-boy') ? 'girl' : 'boy');
  const [date, setDate] = R.useState(todayInChina);
  const [edit, setEdit] = R.useState(null);
  const [error, setError] = R.useState('');
  const [conflict, setConflict] = R.useState('');
  const [removed, setRemoved] = R.useState(null);
  const [message, setMessage] = R.useState('');
  const [importing, setImporting] = R.useState(false);
  const [coursePicker, setCoursePicker] = R.useState(null);
  const menu = R.useRef(null);
  const { items, status, mutate, mutateMany, retry } = collection;
  const records = items.filter(usable);
  const grid = person !== 'both';
  const people = person === 'both' ? Object.keys(PEOPLE) : [person];
  const terms = Object.fromEntries(Object.keys(PEOPLE).map(key =>
    [key, records.find(record => record.id === 'term-' + key)]));
  const courses = records.filter(record => record.type === 'course');
  const monday = mondayOf(date);
  const today = todayInChina();
  const days = DAYS.map((label, day) => ({ label, day, date: shiftDays(monday, day) }));
  const weeks = Object.fromEntries(Object.keys(PEOPLE).map(key => [key, teachingWeek(monday, terms[key])]));
  const listed = courses.filter(course => people.includes(course.person));
  const current = listed.filter(course => parseWeeks(course.weekText, course.parity).includes(weeks[course.person]));
  const activeDay = dayIndex(date);
  const lastPeriod = Math.max(10, ...(grid ? current : listed).map(course => course.last));
  const slotsPerRow = 2;
  const slotGroups = Array.from({ length: Math.ceil(lastPeriod / slotsPerRow) }, (_, index) => {
    const first = index * slotsPerRow + 1;
    const last = Math.min(first + slotsPerRow - 1, lastPeriod);
    const times = [];
    for (let slot = first; slot <= last; slot++) {
      for (const boundary of ['start', 'end']) {
        const field = boundary === 'start' ? 'first' : 'last';
        const values = new Set(listed.filter(course => course[field] === slot && course[boundary]).map(course => course[boundary]));
        if (values.size === 1) times.push(...values);
      }
    }
    const rowTimes = grid && GRID_ROWS[person] && GRID_ROWS[person][index];
    return { first, last, times: rowTimes ? rowTimes.split(' ') : [...new Set(times)].sort() };
  });
  const jumpToDate = event => {
    if (validDate(event.target.value)) setDate(event.target.value);
  };

  function open(draft) {
    setCoursePicker(null);
    setError('');
    setConflict('');
    setEdit(draft);
  }
  function change(key, value) {
    setError('');
    setConflict('');
    setEdit(previous => ({ ...previous, [key]: value }));
  }
  function add(key) {
    const owner = key || people.find(item => terms[item]) || people[0];
    if (!terms[owner]) {
      open(termDraft(owner));
      return;
    }
    open(courseDraft(owner, activeDay, terms[owner].length));
  }
  function save() {
    const value = { ...edit, id: edit.id || crypto.randomUUID() };
    if (value.type === 'term') value.label = value.label.trim();
    else {
      for (const field of ['title', 'room', 'teacher', 'weekText']) value[field] = value[field].trim();
    }
    try {
      validateTimetableRecord(value);
      if (value.type === 'course') {
        if (!terms[value.person]) throw Error('请先设置这位同学的学期');
        parseWeeks(value.weekText, value.parity, terms[value.person].length);
        const overlaps = findConflicts(value, courses);
        if (overlaps.length && !conflict) {
          setConflict('与 ' + overlaps.map(course => '「' + course.title + '」').join('、') + ' 时间重叠。确认后仍可保存。');
          return;
        }
      }
      if (!mutate(value.id, value)) return;
      setMessage(value.type === 'term' ? '学期已保存，可以添加课程了。' : '课程已保存');
      setEdit(null);
      if (value.type === 'term' && !teachingWeek(monday, value)) setDate(value.firstMonday);
    } catch (problem) {
      setError(problem.message);
    }
  }
  function remove() {
    if (!mutate(edit.id, null)) return;
    setRemoved(edit);
    setMessage('');
    setEdit(null);
  }
  function mobileCourseItem(course) {
    const color = [...course.title].reduce((sum, letter) => (sum + letter.codePointAt(0)) % 5, 0);
    const span = course.start && course.end ? course.start + '–' + course.end
      : clockSpan(course.person, course.first, course.last) || periodLabel(course);
    return h('button', {
      type: 'button', key: course.id,
      className: 'tt-m-course tt-color-' + color,
      onClick: () => open(course),
      'aria-label': '编辑课程 ' + course.title + ' · ' + PEOPLE[course.person].label,
    },
      h('div', { className: 'tt-m-time' },
        h('strong', null, periodLabel(course)),
        h('small', null, span)),
      h('div', { className: 'tt-m-body' },
        h('strong', null, course.title),
        h('span', null, [person === 'both' ? PEOPLE[course.person].short : '', course.room, course.teacher]
          .filter(Boolean).join(' · ')),
        h('small', null, '第 ' + course.weekText + ' 周 · ' + PARITY[course.parity])));
  }
  function courseButton(group, day) {    const course = group.courses[0];
    const extra = group.courses.length - 1;
    const color = [...course.title].reduce((sum, letter) => (sum + letter.codePointAt(0)) % 5, 0);
    const singlePeriod = grid && group.first === group.last;
    return h('button', {
      type: 'button', key: course.id + '-' + group.first,
      className: 'tt-course tt-color-' + color + (singlePeriod ? ' tt-course-single' : ''),
      style: { gridColumn: day + 2, gridRow: (group.first + 1) + ' / ' + (group.last + 2) },
      onClick: () => extra ? setCoursePicker(group.courses) : open(course),
      'aria-label': extra ? DAYS[day] + ' ' + group.courses.length + ' 门时间重叠的课程'
        : '编辑课程 ' + course.title + ' · ' + PEOPLE[course.person].label,
    }, h('strong', null, course.title),
    !singlePeriod && course.room && h('span', { className: 'tt-room' }, course.room),
    !grid && course.teacher && h('span', null, course.teacher),
    h('small', null, extra ? '+' + extra + ' 门' : grid ? course.start || periodLabel(course)
      : (person === 'both' ? PEOPLE[course.person].short + ' · ' : '') + courseTime(course)));
  }
  function groupsOn(day) {
    const groups = [];
    const ordered = current.filter(course => course.day === day).sort((a, b) => a.first - b.first || courseOrder(a, b));
    for (const item of ordered) {
      const previous = groups.at(-1);
      if (previous && item.first <= previous.last) {
        previous.last = Math.max(previous.last, item.last);
        previous.items.push(item);
      } else {
        groups.push({ first: item.first, last: item.last, items: [item] });
      }
    }
    return groups.flatMap(group => {
      if (!grid) return [{ ...group, courses: group.items }];
      const blocks = [];
      for (let first = group.first; first <= group.last;) {
        const last = Math.min(group.last, first + first % 2);
        const courses = group.items.filter(course => course.first <= last && course.last >= first);
        blocks.push({ first, last, courses });
        first = last + 1;
      }
      return blocks;
    });
  }
  function fromMenu(action) {
    if (menu.current) {
      menu.current.open = false;
      menu.current.querySelector('summary').focus();
    }
    action();
  }
  const field = (label, key, props = {}) => h(Field, {
    label, value: edit[key], change: value => change(key, props.type === 'number' || props.numeric ? Number(value) : value),
    ...Object.fromEntries(Object.entries(props).filter(([name]) => name !== 'numeric')),
  });
  const termEditor = edit?.type === 'term';
  const termState = key => {
    if (!terms[key]) return '待设置学期';
    if (!weeks[key]) return '本周在学期之外';
    return '第 ' + weeks[key] + ' 教学周';
  };

  const visibleWeeks = [...new Set(people.map(key => weeks[key]).filter(Boolean))];
  const inCurrentWeek = monday === mondayOf(today);
  const weekSubtitle = (inCurrentWeek ? '本周' : shortDate(monday) + ' – ' + shortDate(days[6].date)) + ' · ' + current.length + ' 次课程';
  const memberSwitch = h('div', { className: 'tt-switch', role: 'group', 'aria-label': '课表成员' },
    [['both', '双人'], ...Object.entries(PEOPLE).map(([key, member]) => [key, member.label])].map(([key, label]) =>
      h(Button, { key, className: 'tt-switch-btn', 'aria-pressed': person === key, onClick: () => {
        if (menu.current) menu.current.open = false;
        setPerson(key);
      } }, label)));
  const manager = listed.length ? h('ul', null, [...listed].sort((a, b) => a.day - b.day || courseOrder(a, b)).map(course =>
    h('li', { key: course.id }, h('div', null, h('strong', null, course.title),
      h('p', null, PEOPLE[course.person].label + ' · ' + DAYS[course.day] + ' · ' + courseTime(course)
        + ' · 第 ' + course.weekText + ' 周 · ' + PARITY[course.parity])),
    h(Button, { onClick: () => open(course), 'aria-label': '管理课程 ' + course.title }, '编辑'))))
    : h('p', null, '添加后可以在这里编辑任意周次的课程。');
  const dayCourses = current.filter(course => course.day === activeDay)
    .sort((a, b) => a.first - b.first || courseOrder(a, b));
  const mobileSchedule = h('div', { className: 'tt-mobile' },
    h('div', { className: 'tt-day-chips', role: 'tablist', 'aria-label': '查看哪一天' },
      days.map(day => h('button', {
        key: day.date, type: 'button', role: 'tab', 'aria-selected': day.day === activeDay,
        className: 'tt-day-chip' + (day.day === activeDay ? ' active' : '') + (day.date === today ? ' today' : ''),
        onClick: () => setDate(day.date),
      }, h('small', null, day.label), h('strong', null, day.date.slice(8))))),
    h('div', { className: 'tt-day-timeline' },
      dayCourses.length ? dayCourses.map(mobileCourseItem)
        : h('div', { className: 'tt-m-empty' }, DAYS[activeDay] + '这一天没有课'),
      h('button', { type: 'button', className: 'tt-add-day', onClick: () => add() }, '＋ 添加这一天的课程')));
  const weekGrid = h('div', { className: 'tt-calendar-scroll' }, h('div', { className: 'tt-week-grid', 'aria-label': '每周课表', style: { '--tt-periods': lastPeriod } },
      h('div', { className: 'tt-column-head tt-axis-head' }, h('span', null, '日期'), h('small', null, grid ? '时间' : '节次')),
      days.map(day => h('div', {
        key: day.date, className: 'tt-column-head' + (day.date === today ? ' tt-today' : ''),
        style: { gridColumn: day.day + 2 }, 'aria-current': day.date === today ? 'date' : undefined,
      }, h('strong', null, day.label), h('small', null, grid ? day.date.slice(5).split('-').map(Number).join('/') : shortDate(day.date)))),
      slotGroups.map(({ first, last, times }) => h(R.Fragment, { key: first },
        h('div', { className: 'tt-row-line', 'aria-hidden': true, style: { gridRow: (first + 1) + ' / ' + (last + 2) } }),
        h('div', { className: 'tt-period', style: { gridRow: (first + 1) + ' / ' + (last + 2) } },
          h('strong', null, first === last ? '第' + first + '节' : first + '–' + last),
          times.map(time => h('small', { key: time }, time))))),
      days.flatMap(day => groupsOn(day.day).map(group => courseButton(group, day.day)))));
  return h('section', { className: 'tt-page' + (grid ? ' tt-guet' : ''), 'aria-labelledby': 'tt-title' },
    h('header', { className: 'tt-weekbar' },
      h('div', { className: 'tt-week-range' },
        h('h2', { id: 'tt-title' }, (visibleWeeks.length === 1 ? '第' + visibleWeeks[0] + '周' : '周课表') + ' ' + date.split('-').map(Number).join('/')),
        h('p', null, weekSubtitle)),
      h('div', { className: 'tt-week-controls', 'aria-label': '课表日期' },
        h(Button, { className: 'tt-nav', onClick: () => setDate(shiftDays(date, -7)), 'aria-label': '上一周' }, '‹'),
        h(Button, { className: 'tt-nav', onClick: () => setDate(shiftDays(date, 7)), 'aria-label': '下一周' }, '›'),
        h('details', { className: 'tt-menu', ref: menu, onKeyDown: event => {
          if (event.key === 'Escape' && menu.current?.open) { menu.current.open = false; menu.current.querySelector('summary').focus(); }
        } },
          h('summary', { 'aria-label': '课表菜单' }, '···'),
          h('div', { className: 'tt-menu-panel' },
            h(Button, { onClick: () => fromMenu(() => setDate(today)) }, '回到今天'),
            h(Button, { onClick: () => fromMenu(() => add()) }, '添加课程'),
            h(Button, { onClick: () => fromMenu(() => setImporting(true)) }, '导入课表'),
            Object.entries(PEOPLE).map(([key, member]) => h(Button, {
              key, onClick: () => fromMenu(() => open(termDraft(key, terms[key]))),
              'aria-label': member.school + '学期设置',
            }, member.short + '学期设置')),
            h('label', { className: 'ld-field' }, '跳转到日期',
              h('input', {
                className: 'field', type: 'date', value: date, min: '2000-01-01', max: '2099-12-31',
                onChange: jumpToDate, onInput: jumpToDate,
              })))))),
    h('div', { className: 'tt-tools' }, memberSwitch,
      h('p', { className: 'tt-term-summary' }, people.map(key => PEOPLE[key].short + ' · ' + termState(key)).join(' / '))),
    !people.some(key => terms[key]) && h('div', { className: 'tt-intro' },
      h('strong', null, '从第一教学周开始'),
      h('p', null, '先为两所学校分别设置第一教学周的星期一，再录入课程。两人开学日期不同时，教学周会分别计算。')),
    narrow ? mobileSchedule : weekGrid,
    h('details', { className: 'tt-manager' }, h('summary', null, '课程管理 · ' + listed.length + ' 条'), manager),
    removed && h('div', { className: 'ld-notice', role: 'status' }, '已删除「' + removed.title + '」',
      h(Button, { onClick: () => { if (mutate(removed.id, removed)) { setRemoved(null); setMessage('课程已恢复'); } } }, '撤销删除')),
    h('p', { className: 'tt-status', role: 'status' }, message ? message + ' · ' + status : status,
      api.enabled() && h(Button, { onClick: retry }, '重新同步')),
    coursePicker && h(Editor, { title: '同一时段的课程', close: () => setCoursePicker(null), submit: () => {} },
      coursePicker.map(course => h(Button, { key: course.id, onClick: () => open(course) },
        PEOPLE[course.person].short + ' · ' + course.title + ' · ' + periodLabel(course)))),
    importing && h(ImportEditor, {
      initialPerson: person === 'both' ? people.find(key => terms[key]) || 'girl' : person,
      terms, courses, close: () => setImporting(false),
      save: changes => {
        if (!mutateMany(changes)) return false;
        setImporting(false);
        setMessage(changes.length ? '已导入 ' + changes.length + ' 条课程' : '这些课程已在课表中');
        return true;
      },
    }),
    edit && h(Editor, { title: termEditor ? PEOPLE[edit.person].school + ' · 学期设置' : edit.id ? '编辑课程' : '添加课程',
      close: () => setEdit(null), submit: save },
    termEditor ? h(R.Fragment, null,
      field('学期名称（可选）', 'label', { maxLength: 40, placeholder: '例如：2026–2027 学年第一学期' }),
      h('div', { className: 'tt-form-grid' },
        field('第一教学周的星期一', 'firstMonday', { type: 'date', required: true, min: '2000-01-01', max: '2099-12-31' }),
        field('教学周数', 'length', { type: 'number', min: 1, max: MAX_WEEKS, required: true })),
      h('p', { className: 'tt-form-help' }, '按学校实际教学日历填写。修改起始日期会重新计算这位同学的所有课程日期。'))
      : h(R.Fragment, null,
        field('课程名称', 'title', { maxLength: 80, required: true, autoFocus: true, placeholder: '例如：专业课或组会' }),
        h('div', { className: 'tt-form-grid' },
          field('课程归属', 'person', { options: Object.entries(PEOPLE).map(([key, member]) => [key, member.label + ' · ' + member.school]), disabled: !!edit.id }),
          field('上课星期', 'day', { options: DAYS.map((label, day) => [day, label]), numeric: true }),
          field('开始节次', 'first', { type: 'number', min: 1, max: MAX_PERIODS, required: true }),
          field('结束节次', 'last', { type: 'number', min: 1, max: MAX_PERIODS, required: true }),
          field('上课时间（可选）', 'start', { type: 'time' }),
          field('下课时间（可选）', 'end', { type: 'time' }),
          field('上课周次', 'weekText', { placeholder: '1-8,10,12', maxLength: 160, required: true }),
          field('单双周', 'parity', { options: Object.entries(PARITY) }),
          field('教室（可选）', 'room', { maxLength: 60 }),
          field('教师（可选）', 'teacher', { maxLength: 40 })),
        h('p', { className: 'tt-form-help' }, '同一门课在不同日期上课时，分别添加每个时间段。')),
    error && h('p', { className: 'tt-form-error', role: 'alert' }, error),
    conflict && h('p', { className: 'ld-notice', role: 'alert' }, conflict),
    h('div', { className: 'tt-form-actions' },
      !termEditor && edit.id && h(Button, { onClick: remove, className: 'mini-btn tt-delete' }, '删除课程'),
      h(Button, { onClick: () => setEdit(null) }, '取消'),
      h('button', { type: 'submit', className: 'primary-btn' }, termEditor ? '保存学期' : conflict ? '确认保存课程' : '保存课程'))));
}
