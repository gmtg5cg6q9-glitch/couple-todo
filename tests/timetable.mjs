import assert from 'node:assert/strict';
import { validateBackup } from '../assets/features.js';
import { parseTimetableRows } from '../assets/timetable-import.js';
import {
  TIMETABLE_KEY, findConflicts, mondayOf, parseWeeks, teachingWeek, validateTimetableRecord,
} from '../assets/timetable.js';

const girlTerm = {
  id: 'term-girl', person: 'girl', type: 'term',
  firstMonday: '2026-09-07', label: '测试学期', length: 18,
};
const boyTerm = { ...girlTerm, id: 'term-boy', person: 'boy', firstMonday: '2026-09-14' };
const course = {
  id: 'class-a', type: 'course', person: 'girl', title: '测试课程', day: 0,
  first: 1, last: 2, start: '08:00', end: '09:40',
  weekText: '1-8,10,12', parity: 'all', room: '', teacher: '',
};

assert.equal(mondayOf('2026-11-08'), '2026-11-02');
assert.equal(mondayOf('2027-01-01'), '2026-12-28');
assert.equal(teachingWeek('2026-11-02', girlTerm), 9);
assert.equal(teachingWeek('2026-11-02', boyTerm), 8);
assert.equal(teachingWeek('2026-09-07', boyTerm), null);
assert.equal(teachingWeek('2027-01-11', girlTerm), null);
assert.deepEqual(parseWeeks('1–4，4、6-8', 'even'), [2, 4, 6, 8]);
assert.throws(() => parseWeeks('1-22', 'all', 20), /20/);
assert.throws(() => parseWeeks('2,4', 'odd'), /没有符合/);
assert.throws(() => validateTimetableRecord({ ...girlTerm, firstMonday: '2026-09-08' }), /星期一/);
assert.throws(() => validateTimetableRecord({ ...course, end: '07:00' }), /结束时间/);
assert.throws(() => validateTimetableRecord({ ...course, first: 3, last: 2 }), /结束节次/);
const overlaps = [
  { ...course, id: 'match', start: '', end: '', first: 2, last: 3 },
  { ...course, id: 'other-person', person: 'boy' },
  { ...course, id: 'other-week', weekText: '9,11' },
  { ...course, id: 'adjacent', start: '09:40', end: '10:30' },
  { ...course, id: 'different-day', day: 1 },
  course,
];
assert.deepEqual(findConflicts(course, overlaps).map(item => item.id), ['match']);
const backup = {
  app: 'our-little-days', version: 1, photos: [],
  data: { [TIMETABLE_KEY]: JSON.stringify([girlTerm, boyTerm, course]) },
};
assert.equal(validateBackup(backup), backup);
assert.throws(() => validateBackup({
  ...backup, data: { [TIMETABLE_KEY]: JSON.stringify([{ ...course, weekText: '6-2' }]) },
}), /上课周次/);
const pasted = '本学期个人课表\n课程名\t上课星期\t上课节次\t教学周\t任课教师\n学术写作\t星期三\t第3—4节\t第1-16周（双）\t王老师';
const parsed = parseTimetableRows(pasted, 'boy')[0].course;
assert.deepEqual([parsed.person, parsed.day, parsed.first, parsed.last, parsed.weekText, parsed.parity], ['boy', 2, 3, 4, '1-16', 'even']);
assert.equal(parsed.teacher, '王老师');
const csv = '\uFEFF课程名称,星期,节次,周次,教室,开始时间,结束时间\r\n"研讨,实践",周日,1-2,"1-4,6",A101,8:00,9:40';
const csvRow = parseTimetableRows(csv, 'girl')[0].course;
assert.deepEqual([csvRow.title, csvRow.day, csvRow.weekText, csvRow.start, csvRow.end], ['研讨,实践', 6, '1-4,6', '08:00', '09:40']);
assert.match(parseTimetableRows('课程,星期,节次,周次\n写作,周一,早上,1-8', 'girl')[0].error, /节次/);
assert.throws(() => parseTimetableRows('姓名,学号\n示例,123', 'girl'), /未找到/);
assert.throws(() => validateTimetableRecord({ ...course, day: -1 }), /上课星期/);
console.log({ passed: 21, suite: 'timetable dates, conflicts, backup and import' });
