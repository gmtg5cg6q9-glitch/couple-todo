import {parseDate,dayNumber,nextAnnual,mergePending,validateBackup} from '../assets/features.js';
function assert(value,message){if(!value)throw Error(message);}
function rejects(callback,message){let failed=false;try{callback();}catch{failed=true;}assert(failed,message);}
export function runRegression(){
  let checks=0;
  const test=(message,callback)=>{callback();checks++;};
  test('first day',()=>assert(dayNumber('2026-10-31',new Date(2026,9,31))===1,'first day'));
  test('calendar difference',()=>assert(dayNumber('2024-03-09',new Date(2024,2,11))===3,'calendar'));
  test('invalid dates',()=>{assert(!parseDate('2025-02-29'),'leap');assert(!parseDate('2026-13-01'),'month');assert(!parseDate('broken'),'format');});
  test('annual current year',()=>assert(nextAnnual('2023-12-25',new Date(2026,9,31)).getFullYear()===2026,'same year'));
  test('annual next year',()=>assert(nextAnnual('2023-02-14',new Date(2026,9,31)).getFullYear()===2027,'next year'));
  test('annual today',()=>assert(nextAnnual('2023-10-31',new Date(2026,9,31)).getTime()===new Date(2026,9,31).getTime(),'today'));
  test('February 29',()=>{const date=nextAnnual('2024-02-29',new Date(2026,9,31));assert(date.getFullYear()===2028&&date.getMonth()===1&&date.getDate()===29,'leap next');});
  test('empty remote',()=>assert(mergePending([],[]).length===0,'empty'));
  test('pending merge',()=>{const merged=mergePending([{id:'a',text:'old'},{id:'b'}],[{id:'a',value:{id:'a',text:'new'}},{id:'b',deleted:true},{id:'c',value:{id:'c'}}]);assert(merged.length===2&&merged[0].text==='new'&&merged[1].id==='c','merge');});
  const good={app:'our-little-days',version:1,data:{'couple-todo-v2':JSON.stringify([{id:'1',text:'买牛奶',done:false}]),'couple-start':'2023-02-14'},photos:[]};
  test('valid backup',()=>assert(validateBackup(good)===good,'valid'));
  test('wrong backup',()=>rejects(()=>validateBackup({...good,app:'unknown'}),'app'));
  test('credential import',()=>rejects(()=>validateBackup({...good,data:{'couple-cloud':'{}'}}),'keys'));
  test('bad todo',()=>rejects(()=>validateBackup({...good,data:{'couple-todo-v2':'[{"id":"1","text":3,"done":false}]'}}),'todo'));
  test('duplicate IDs',()=>rejects(()=>validateBackup({...good,data:{'couple-todo-v2':JSON.stringify([{id:'x',text:'a',done:false},{id:'x',text:'b',done:false}])}}),'duplicate'));
  test('invalid photo',()=>rejects(()=>validateBackup({...good,photos:[{id:'x',name:'x',data:'data:text/html;base64,AAAA'}]}),'photo'));
  test('shortcut once decoded',()=>{const value='完成 100% / 整理 + 购物';assert(new URL('https://example.com/?add='+encodeURIComponent(value)).searchParams.get('add')===value,'url');});
  return {passed:checks};
}
console.log(runRegression());
