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
  if (!inRange(record.day, 0, 6) || !inRange(record.first, 1, MAX_PERIODS) || !inRange(record.last, record.first, MAX_PERIODS)) {
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

export function TimetablePage({ collection }) {
  const [person, setPerson] = R.useState('both');
  const [date, setDate] = R.useState(todayInChina);
  const [edit, setEdit] = R.useState(null);
  const [error, setError] = R.useState('');
  const [conflict, setConflict] = R.useState('');
  const [removed, setRemoved] = R.useState(null);
  const [message, setMessage] = R.useState('');
  const { items, status, mutate, retry } = collection;
  const records = items.filter(usable);
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
  const jumpToDate = event => {
    if (validDate(event.target.value)) setDate(event.target.value);
  };

  function open(draft) {
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
      mutate(value.id, value);
      setMessage(value.type === 'term' ? '学期已保存，可以添加课程了。' : '课程已保存');
      setEdit(null);
      if (value.type === 'term' && !teachingWeek(monday, value)) setDate(value.firstMonday);
    } catch (problem) {
      setError(problem.message);
    }
  }
  function remove() {
    mutate(edit.id, null);
    setRemoved(edit);
    setMessage('');
    setEdit(null);
  }
  function courseButton(course, compact = false) {
    return h('button', {
      type: 'button', key: course.id,
      className: 'tt-course tt-' + course.person + (compact ? ' tt-course-wide' : ''),
      onClick: () => open(course),
      'aria-label': '编辑课程 ' + course.title + ' · ' + PEOPLE[course.person].label,
    }, h('span', { className: 'tt-course-kicker' }, PEOPLE[course.person].short + ' · ' + courseTime(course)),
    h('strong', null, course.title),
    course.room && h('span', null, course.room),
    compact && course.teacher && h('span', null, course.teacher));
  }
  const coursesOn = day => current.filter(course => course.day === day).sort(courseOrder);
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

  return h('section', { className: 'card tt-page', 'aria-labelledby': 'tt-title' },
    h('header', { className: 'tt-header' },
      h('p', { className: 'tt-eyebrow' }, 'OUR LITTLE DAYS / CAMPUS LIFE'),
      h('h2', { className: 'view-title', id: 'tt-title' }, '我们的研究生课表'),
      h('p', { className: 'view-sub' }, '两所校园，同一周的学习日程')),
    h('div', { className: 'tt-schools' }, Object.entries(PEOPLE).map(([key, member]) =>
      h('article', { className: 'tt-school tt-' + key, key },
        h('div', null, h('span', { className: 'tt-school-caption' }, member.label + ' · 研究生'),
          h('h3', null, member.school),
          h('p', null, [terms[key]?.label, termState(key)].filter(Boolean).join(' · '))),
        h(Button, { onClick: () => open(termDraft(key, terms[key])), 'aria-label': member.school + '学期设置' }, '学期设置')))),
    h('div', { className: 'tt-tools' },
      h('div', { className: 'tt-switch', role: 'group', 'aria-label': '课表成员' },
        [['both', '双人'], ...Object.entries(PEOPLE).map(([key, member]) => [key, member.label])].map(([key, label]) =>
          h(Button, { key, className: 'tt-switch-btn', 'aria-pressed': person === key, onClick: () => setPerson(key) }, label))),
      h(Button, { className: 'primary-btn tt-add', onClick: () => add() }, '＋ 添加课程')),
    h('div', { className: 'tt-weekbar', 'aria-label': '课表日期' },
      h(Button, { onClick: () => setDate(shiftDays(date, -7)), 'aria-label': '上一周' }, '‹'),
      h('div', { className: 'tt-week-range' },
        h('strong', null, shortDate(monday) + ' – ' + shortDate(days[6].date)),
        h('small', null, monday.slice(0, 4) + ' 年 · ' + current.length + ' 次课程')),
      h(Button, { onClick: () => setDate(shiftDays(date, 7)), 'aria-label': '下一周' }, '›'),
      h(Button, { onClick: () => setDate(today) }, '回到今天'),
      h('input', {
        className: 'field tt-jump', type: 'date', 'aria-label': '跳转到日期', value: date,
        min: '2000-01-01', max: '2099-12-31', onChange: jumpToDate, onInput: jumpToDate,
      })),
    !people.some(key => terms[key]) && h('div', { className: 'tt-intro' },
      h('strong', null, '从第一教学周开始'),
      h('p', null, '先为两所学校分别设置第一教学周的星期一，再录入课程。两人开学日期不同时，教学周会分别计算。')),
    h('div', { className: 'tt-week-grid', 'aria-label': '每周课表' }, days.map(day =>
      h('section', { key: day.date, className: 'tt-day' + (day.date === today ? ' tt-today' : '') },
        h('header', null, h('strong', null, day.label), h('small', null, shortDate(day.date))),
        coursesOn(day.day).map(course => courseButton(course)),
        !coursesOn(day.day).length && h('span', { className: 'tt-empty-day' }, '—')))),
    h('section', { className: 'tt-mobile', 'aria-label': '按天查看课表' },
      h('div', { className: 'tt-day-picker', role: 'group', 'aria-label': '选择星期' }, days.map(day =>
        h(Button, { key: day.date, className: 'tt-day-button', onClick: () => setDate(day.date), 'aria-pressed': day.date === date },
          h('strong', null, day.label), h('small', null, shortDate(day.date))))),
      h('div', { className: 'tt-day-agenda' },
        coursesOn(activeDay).map(course => courseButton(course, true)),
        !coursesOn(activeDay).length && h('p', null, DAYS[activeDay] + '暂无课程安排'))),
    h('details', { className: 'tt-manager' },
      h('summary', null, '课程管理 · ' + listed.length + ' 条'),
      listed.length ? h('ul', null, [...listed].sort((a, b) => a.day - b.day || courseOrder(a, b)).map(course =>
        h('li', { key: course.id }, h('div', null, h('strong', null, course.title),
          h('p', null, PEOPLE[course.person].label + ' · ' + DAYS[course.day] + ' · ' + courseTime(course)
            + ' · 第 ' + course.weekText + ' 周 · ' + PARITY[course.parity])),
        h(Button, { onClick: () => open(course), 'aria-label': '管理课程 ' + course.title }, '编辑'))))
        : h('p', null, '添加后可以在这里编辑任意周次的课程。')),
    removed && h('div', { className: 'ld-notice', role: 'status' }, '已删除「' + removed.title + '」',
      h(Button, { onClick: () => { mutate(removed.id, removed); setRemoved(null); setMessage('课程已恢复'); } }, '撤销删除')),
    h('p', { className: 'tt-status', role: 'status' }, message ? message + ' · ' + status : status,
      api.enabled() && h(Button, { onClick: retry }, '重新同步')),
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
