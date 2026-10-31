// Readable additions to the original published application. No build step needed.
let R, h, api;
export function configureFeatures(react, services) { R = react; h = react.createElement; api = services; }
export const KEYS = ['couple-todo-v2','couple-anniv-v1','couple-start','couple-profile-v1','tale.cities','tale.photoMode','couple-watchlist-v1'];
export function readJSON(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
export function localDate(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
export function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
  const [y,m,d] = value.split('-').map(Number), result = new Date(y,m-1,d);
  return localDate(result) === value && y >= 1900 && y <= 2100 ? result : null;
}
export function dayNumber(value, now = new Date()) {
  const start = parseDate(value); if (!start) return 0;
  return Math.max(0, Math.round((Date.UTC(now.getFullYear(),now.getMonth(),now.getDate())-Date.UTC(start.getFullYear(),start.getMonth(),start.getDate()))/86400000)) + 1;
}
export function nextAnnual(value, now = new Date()) {
  const start = parseDate(value); if (!start) return null;
  const today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
  for(let year=Math.max(start.getFullYear(),today.getFullYear()); year <= today.getFullYear()+8; year++) {
    const candidate = new Date(year,start.getMonth(),start.getDate());
    if(candidate.getMonth()===start.getMonth() && candidate.getDate()===start.getDate() && candidate>=today) return candidate;
  }
  return null;
}
export function profile() { return readJSON('couple-profile-v1',{you:'你',partner:'TA'}); }
export function announce(message) { window.dispatchEvent(new CustomEvent('little-days-status',{detail:message})); }
const uid = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
function saveJSON(key,value) { localStorage.setItem(key,JSON.stringify(value)); }
export function mergePending(records, pending) {
  const values = new Map(records.map(item=>[item.id,item]));
  for(const change of pending) change.deleted ? values.delete(change.id) : values.set(change.id,change.value);
  return [...values.values()];
}
export function useCollection(kind,key,seed=[]) {
  const cloud = api.enabled(), config = api.config();
  const scoped = cloud ? `${key}:cloud:${encodeURIComponent(config.url)}:${encodeURIComponent(config.coupleId)}` : key;
  const [items,setItems] = R.useState(()=>readJSON(scoped,cloud?[]:seed));
  const itemsRef = R.useRef(items), pending = R.useRef(readJSON(scoped+':pending',[]));
  const [status,setStatus] = R.useState(cloud?'正在连接云端…':'已保存在本机');
  const active = R.useRef(true), busy = R.useRef(false);
  const set = R.useCallback(value=>{
    itemsRef.current=value;
    try { saveJSON(scoped,value); } catch { announce('设备存储空间不足，改动尚未保存，请先导出备份。'); }
    if(active.current) setItems(value);
  },[scoped]);
  const flush = R.useCallback(async()=>{
    if(!cloud || busy.current) return;
    busy.current=true;
    try {
      if(active.current) setStatus('同步中…');
      while(pending.current.length) {
        const operation=pending.current[0];
        if(operation.deleted) await api.remove(kind,operation.id); else await api.upsert(kind,operation.value);
        pending.current=pending.current.filter(item=>item.token!==operation.token);
        saveJSON(scoped+':pending',pending.current);
      }
      const remote=await api.pull(kind);
      if(active.current) { set(mergePending(remote,pending.current)); setStatus(pending.current.length?'有改动等待同步':'已与云端同步'); }
    } catch(error) { if(active.current) setStatus('同步未完成，已保留本机改动；联网后自动重试'); }
    finally { busy.current=false; }
  },[cloud,kind,scoped,set]);
  R.useEffect(()=>{
    active.current=true;
    const onStorage=event=>{ if(event.key===scoped) set(readJSON(scoped,[])); if(event.key===scoped+':pending') { pending.current=readJSON(scoped+':pending',[]); flush(); } };
    window.addEventListener('storage',onStorage);
    let unsubscribe=()=>{}, timer;
    if(cloud) { flush(); unsubscribe=api.subscribe(kind,flush); timer=setInterval(flush,15000); window.addEventListener('online',flush); }
    return ()=>{ active.current=false; unsubscribe(); clearInterval(timer); window.removeEventListener('online',flush); window.removeEventListener('storage',onStorage); };
  },[cloud,kind,scoped,set,flush]);
  const mutate=R.useCallback((id,value)=>{
    if(cloud) {
      pending.current.push({token:uid(),id,value,deleted:!value});
      try { saveJSON(scoped+':pending',pending.current); } catch { announce('无法保存同步队列，请先导出备份。'); return; }
    }
    set(value ? [value,...itemsRef.current.filter(item=>item.id!==id)] : itemsRef.current.filter(item=>item.id!==id));
    if(cloud) flush();
  },[cloud,scoped,set,flush]);
  return {items,status,mutate,retry:flush};
}
function Field({label,...props}) { return h('label',{className:'ld-field'},h('span',null,label),h('input',{className:'field','aria-label':label,...props,onInput:props.onChange})); }
function Select({label,options,...props}) { return h('label',{className:'ld-field'},h('span',null,label),h('select',{className:'field','aria-label':label,...props},options.map(([value,text])=>h('option',{key:value,value},text)))); }
function Button({children,...props}) { return h('button',{type:'button',className:'mini-btn',...props},children); }
export function TodoPage({pendingAdd}) {
  const {items,status,mutate,retry}=useCollection('todos','couple-todo-v2',api.todoSeed);
  const [text,setText]=R.useState(''),[cat,setCat]=R.useState('shop'),[due,setDue]=R.useState(''),[owner,setOwner]=R.useState('both');
  const [filter,setFilter]=R.useState('all'),[search,setSearch]=R.useState(''),[category,setCategory]=R.useState('all');
  const [editing,setEditing]=R.useState(null),[removed,setRemoved]=R.useState(null),[message,setMessage]=R.useState('');
  const consumed=R.useRef(null), modal=R.useRef(null), p=profile();
  const owners=[['both','一起'],['you',p.you],['partner',p.partner]];
  R.useEffect(()=>{
    if(!pendingAdd || consumed.current===pendingAdd) return;
    consumed.current=pendingAdd;
    const value={id:uid(),text:pendingAdd.trim().slice(0,300),done:false,cat:'alarm',owner:'both',due:'',createdAt:Date.now()};
    mutate(value.id,value); setMessage('已通过快捷方式添加一条待办');
  },[pendingAdd,mutate]);
  R.useEffect(()=>{
    if(!editing) return;
    const previous=document.activeElement;
    modal.current?.querySelector('input')?.focus();
    const key=event=>{
      if(event.key==='Escape') setEditing(null);
      if(event.key==='Tab') {
        const all=[...modal.current.querySelectorAll('button,input,select')].filter(el=>!el.disabled);
        const first=all[0],last=all.at(-1);
        if(event.shiftKey && document.activeElement===first) {event.preventDefault();last.focus();}
        else if(!event.shiftKey && document.activeElement===last) {event.preventDefault();first.focus();}
      }
    };
    document.addEventListener('keydown',key);
    return ()=>{document.removeEventListener('keydown',key);previous?.focus();};
  },[!!editing]);
  const done=items.filter(item=>item.done).length;
  const visible=items.filter(item=>(filter==='all'||(filter==='done'?item.done:!item.done)) && (category==='all'||item.cat===category) && item.text.toLowerCase().includes(search.trim().toLowerCase())).sort((a,b)=>Number(a.done)-Number(b.done)||(a.due||'9999').localeCompare(b.due||'9999')||(b.createdAt||0)-(a.createdAt||0));
  function add(event) {event.preventDefault();if(!text.trim()) return;const value={id:uid(),text:text.trim(),cat,owner,due,done:false,createdAt:Date.now()};mutate(value.id,value);setText('');setDue('');setMessage('已添加待办');}
  return h('div',{className:'card'},h(api.Header,{pct:items.length?Math.round(done/items.length*100):0,done,total:items.length}),
    h('form',{className:'ld-todo-form',onSubmit:add},h('div',{className:'add-row'},h('input',{className:'add-input','aria-label':'添加待办',placeholder:'今天想一起做点什么？',value:text,maxLength:300,required:true,onChange:e=>setText(e.target.value)}),h('button',{className:'primary-btn',type:'submit'},'添加')),
      h('div',{className:'cats'},api.categories.map(c=>h(Button,{key:c.id,className:'cat'+(cat===c.id?' active':''),style:{'--c':c.color},'aria-pressed':cat===c.id,onClick:()=>setCat(c.id)},c.label))),
      h('div',{className:'ld-columns'},h(Field,{label:'截止日期（可选）',type:'date',value:due,onChange:e=>setDue(e.target.value)}),h(Select,{label:'谁来完成',value:owner,options:owners,onChange:e=>setOwner(e.target.value)}))),
    h('div',{className:'ld-toolbar'},h(Field,{label:'搜索待办',type:'search',placeholder:'输入关键词',value:search,onChange:e=>setSearch(e.target.value)}),h(Select,{label:'分类筛选',value:category,options:[['all','所有分类'],...api.categories.map(c=>[c.id,c.label])],onChange:e=>setCategory(e.target.value)})),
    h('div',{className:'seg',role:'tablist','aria-label':'待办状态'},[['all','全部'],['todo','进行中'],['done','已完成']].map(([value,label])=>h('button',{key:value,role:'tab','aria-selected':filter===value,className:filter===value?'active':'',onClick:()=>setFilter(value)},label))),
    h('ul',{className:'list'},visible.map(item=>h('li',{key:item.id,className:'todo-item'+(item.done?' done':'')},
      h('button',{className:'check','aria-label':item.done?'取消完成':'标记完成',onClick:()=>{mutate(item.id,{...item,done:!item.done});if(!item.done&&done+1===items.length)api.celebrate();}},h('span',{className:'tick'})),
      h('div',{className:'ld-todo-body'},h('span',{className:'text'},item.text),h('div',{className:'ld-meta'},h('span',null,api.categories.find(c=>c.id===item.cat)?.label||'其他'),h('span',null,owners.find(([v])=>v===item.owner)?.[1]||'一起'),item.due&&h('span',{className:!item.done&&item.due<localDate()?'ld-overdue':''},(item.due<localDate()&&!item.done?'已逾期 · ':item.due===localDate()?'今天 · ':'')+item.due))),
      h(Button,{'aria-label':'编辑待办',onClick:()=>setEditing({...item})},'编辑'),h(Button,{'aria-label':'删除待办',onClick:()=>{setRemoved(item);mutate(item.id,null);}},'删除')))),
    !visible.length&&h('div',{className:'empty'},h('p',{className:'empty-title'},search||category!=='all'?'没有匹配的待办':'这里空空的～'),h('p',null,'添加一件小事，或换一个筛选条件')),
    removed&&h('div',{className:'ld-notice',role:'status'},'已删除「'+removed.text+'」',h(Button,{onClick:()=>{mutate(removed.id,removed);setRemoved(null);}},'撤销删除'),h(Button,{onClick:()=>setRemoved(null)},'关闭')),
    h('p',{role:'status',className:'ld-meta'},message),h('p',{className:'foot',role:'status'},status,api.enabled()&&h(Button,{onClick:retry},'重新同步')),
    editing&&h('div',{className:'ld-overlay',onClick:e=>{if(e.target===e.currentTarget)setEditing(null);}},h('form',{ref:modal,className:'ld-dialog',role:'dialog','aria-modal':true,'aria-label':'编辑待办',onSubmit:e=>{e.preventDefault();if(editing.text.trim()){mutate(editing.id,{...editing,text:editing.text.trim()});setEditing(null);}}},
      h('h3',null,'编辑这件小事'),h(Field,{label:'待办内容',value:editing.text,required:true,maxLength:300,onChange:e=>setEditing({...editing,text:e.target.value})}),h(Select,{label:'分类',value:editing.cat,options:api.categories.map(c=>[c.id,c.label]),onChange:e=>setEditing({...editing,cat:e.target.value})}),h(Field,{label:'截止日期',type:'date',value:editing.due||'',onChange:e=>setEditing({...editing,due:e.target.value})}),h(Select,{label:'谁来完成',value:editing.owner||'both',options:owners,onChange:e=>setEditing({...editing,owner:e.target.value})}),h('div',{className:'ld-actions'},h(Button,{onClick:()=>setEditing(null)},'取消'),h('button',{className:'primary-btn',type:'submit'},'保存修改')))));
}
export function validateBackup(value) {
  if(!value||value.app!=='our-little-days'||value.version!==1||!value.data||typeof value.data!=='object')throw Error('这不是有效的小日子备份文件');
  for(const [key,raw] of Object.entries(value.data)) {
    if(!KEYS.includes(key)||typeof raw!=='string')throw Error('备份包含不支持的数据');
    if(key==='couple-start'){if(!parseDate(raw))throw Error('备份中的日期无效');continue;}
    const data=JSON.parse(raw);
    if(key==='tale.photoMode') {if(!['dome','wall'].includes(data))throw Error('照片模式无效');continue;}
    if(key==='couple-profile-v1') {if(!data||typeof data.you!=='string'||typeof data.partner!=='string'||data.you.length>20||data.partner.length>20)throw Error('昵称无效');continue;}
    if(!Array.isArray(data)||data.length>10000)throw Error('备份记录格式无效');
    if(data.some(item=>!item||typeof item.id!=='string'||item.id.length>300))throw Error('备份记录缺少标识');
    if(new Set(data.map(item=>item.id)).size!==data.length)throw Error('备份有重复记录');
    if(key==='couple-todo-v2'&&data.some(item=>typeof item.text!=='string'||typeof item.done!=='boolean'||item.text.length>300||item.due&&!parseDate(item.due)))throw Error('待办记录无效');
    if(key==='couple-anniv-v1'&&data.some(item=>typeof item.title!=='string'||(item.type==='lunar'?!(item.lMonth>=1&&item.lMonth<=12&&item.lDay>=1&&item.lDay<=30):!parseDate(item.date))))throw Error('纪念日记录无效');
    if(key==='tale.cities'&&data.some(item=>typeof item.name!=='string'||typeof item.note!=='string'))throw Error('城市记录无效');
    if(key==='couple-watchlist-v1'&&data.some(item=>typeof item.title!=='string'||!['want','watched'].includes(item.status)))throw Error('片单记录无效');
  }
  if(!Array.isArray(value.photos)||value.photos.length>500)throw Error('照片备份格式无效');
  for(const item of value.photos) if(!item||typeof item.id!=='string'||typeof item.name!=='string'||typeof item.data!=='string'||!/^data:image\/(jpeg|png|webp|gif|avif);base64,[A-Za-z0-9+/=]+$/.test(item.data))throw Error('照片数据无效');
  return value;
}
function blobData(blob) { return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob);}); }
function download(name,blob) {const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
export function ProfileSettings() {
  const [info,setInfo]=R.useState(profile),[start,setStart]=R.useState(()=>localStorage.getItem('couple-start')||'2023-02-14');
  const [message,setMessage]=R.useState(''),[busy,setBusy]=R.useState(false),[incoming,setIncoming]=R.useState(null);
  async function backup() {
    setBusy(true);setMessage('正在打包本机数据和照片…');
    try {const data={};for(const key of KEYS){const value=localStorage.getItem(key);if(value!==null)data[key]=key==='tale.photoMode'?JSON.stringify(value):value;}
      const photos=[];for(const item of await api.photos()){if(item.blob)photos.push({...item,blob:undefined,data:await blobData(item.blob)});}
      download(`小日子备份-${localDate()}.json`,new Blob([JSON.stringify({app:'our-little-days',version:1,createdAt:new Date().toISOString(),data,photos},null,2)],{type:'application/json'}));
      setMessage(`备份已生成，包含 ${photos.length} 张本机照片；云端相册和连接密钥不包含在备份中。`);
    } catch {setMessage('备份失败，请检查设备可用空间后重试。');}finally{setBusy(false);}
  }
  async function importFile(event) {
    const file=event.target.files?.[0];event.target.value='';if(!file)return;
    if(file.size>150*1024*1024){setMessage('备份超过 150 MB，请拆分照片后再导入。');return;}
    try {setIncoming(validateBackup(JSON.parse(await file.text())));setMessage('已验证备份，请确认下面的恢复范围。');} catch(error){setMessage(error.message||'文件读取失败');}
  }
  async function restore() {
    setBusy(true);
    try {
      // Store photo writes in one atomic transaction; settings rollback on quota failure.
      const old=Object.fromEntries(KEYS.map(key=>[key,localStorage.getItem(key)]));
      try {
        for(const [key,value] of Object.entries(incoming.data))localStorage.setItem(key,key==='tale.photoMode'?JSON.parse(value):value);
        const photos=incoming.photos.map(item=>{const bytes=Uint8Array.from(atob(item.data.split(',')[1]),c=>c.charCodeAt(0));const type=item.data.slice(5,item.data.indexOf(';'));const {data,...record}=item;return {...record,type,blob:new Blob([bytes],{type})};});
        await api.restorePhotos(photos);
      } catch(error) {for(const [key,value]of Object.entries(old))value===null?localStorage.removeItem(key):localStorage.setItem(key,value);throw error;}
      setIncoming(null);setInfo(profile());setStart(localStorage.getItem('couple-start')||'2023-02-14');setMessage('恢复完成。返回各页面即可查看；云端记录未改动。');
    } catch {setMessage('恢复失败，原设置已保留，请检查设备存储空间。');}finally{setBusy(false);}
  }
  async function migrate() {
    setBusy(true);
    try {for(const [kind,key]of [['todos','couple-todo-v2'],['anniv','couple-anniv-v1']])for(const record of readJSON(key,[]))await api.upsert(kind,record);setMessage('本机待办和纪念日已复制到当前云端空间。');}catch{setMessage('迁移未完成，已保留全部本机数据，可联网后重新执行。');}finally{setBusy(false);}
  }
  return h(R.Fragment,null,h('section',{className:'set-block'},h('h3',{className:'set-name'},'💛 我们的资料'),h('form',{onSubmit:e=>{e.preventDefault();if(!parseDate(start)||start>localDate()){setMessage('请选择今天或更早的有效开始日期');return;}try{saveJSON('couple-profile-v1',info);localStorage.setItem('couple-start',start);setMessage('资料已保存，首页天数从开始当天计为第 1 天。');}catch{setMessage('存储空间不足，保存失败。');}}},h('div',{className:'ld-columns'},h(Field,{label:'你的昵称',value:info.you,maxLength:20,required:true,onChange:e=>setInfo({...info,you:e.target.value})}),h(Field,{label:'TA 的昵称',value:info.partner,maxLength:20,required:true,onChange:e=>setInfo({...info,partner:e.target.value})})),h(Field,{label:'在一起的第一天',type:'date',max:localDate(),value:start,required:true,onChange:e=>setStart(e.target.value)}),h('button',{className:'primary-btn',type:'submit'},'保存我们的资料'))),
    h('section',{className:'set-block'},h('h3',{className:'set-name'},'📦 数据备份与恢复'),h('p',{className:'set-desc'},'导出本机待办、纪念日、城市、片单、昵称和照片。恢复会替换备份内的列表，同标识照片会覆盖，其余照片保留。云端连接信息不导出。'),h('div',{className:'ld-actions'},h(Button,{disabled:busy,onClick:backup},busy?'处理中…':'导出备份'),h('label',{className:'mini-btn'},'选择备份文件',h('input',{'aria-label':'选择备份文件',type:'file',accept:'.json,application/json',disabled:busy,onChange:importFile}))),
      incoming&&h('div',{className:'ld-notice'},h('p',null,`备份包含 ${Object.keys(incoming.data).length} 类数据、${incoming.photos.length} 张照片。确认后替换对应本机列表，建议先导出当前备份。`),h(Button,{disabled:busy,onClick:restore},'确认恢复到本机'),h(Button,{disabled:busy,onClick:()=>setIncoming(null)},'取消恢复')),
      api.enabled()&&h('div',null,h('p',{className:'set-desc'},'启用云端后使用独立空间。需要将原本机待办和纪念日带过去时，可执行一次复制。'),h(Button,{disabled:busy,onClick:migrate},'复制本机记录到当前云端'))),h('p',{role:'status',className:'ld-notice'},message));
}
export function MovieActions({movie}) {
  const [list,setList]=R.useState(()=>readJSON('couple-watchlist-v1',[]));
  const id=movie.id?String(movie.id):`${movie.title}-${movie.year}`,current=list.find(item=>item.id===id);
  const put=status=>{const next=[{id,title:movie.title,year:movie.year,status},...list.filter(item=>item.id!==id)];try{saveJSON('couple-watchlist-v1',next);setList(next);window.dispatchEvent(new Event('little-days-watchlist')); }catch{announce('片单保存失败，请检查设备空间。');}};
  return h('div',{className:'ld-actions'},h(Button,{'aria-pressed':current?.status==='want',onClick:()=>put('want')},current?.status==='want'?'已加入想看':'加入想看'),h(Button,{'aria-pressed':current?.status==='watched',onClick:()=>put('watched')},current?.status==='watched'?'已看过 ✓':'标记看过'));
}
export function Watchlist() {
  const [items,setItems]=R.useState(()=>readJSON('couple-watchlist-v1',[])),[filter,setFilter]=R.useState('want');
  R.useEffect(()=>{const refresh=()=>setItems(readJSON('couple-watchlist-v1',[]));window.addEventListener('little-days-watchlist',refresh);return()=>window.removeEventListener('little-days-watchlist',refresh);},[]);
  const update=(item,status)=>{const next=status?items.map(v=>v.id===item.id?{...v,status}:v):items.filter(v=>v.id!==item.id);try{saveJSON('couple-watchlist-v1',next);setItems(next);}catch{announce('片单保存失败');}};
  return h('details',{className:'set-block ld-watchlist'},h('summary',null,`我们的片单 · ${items.length} 部`),h('div',{className:'ld-actions'},h(Button,{'aria-pressed':filter==='want',onClick:()=>setFilter('want')},'想看'),h(Button,{'aria-pressed':filter==='watched',onClick:()=>setFilter('watched')},'看过')),h('ul',{className:'ld-watch-items'},items.filter(item=>item.status===filter).map(item=>h('li',{key:item.id},h('span',null,item.title,' · ',item.year),h(Button,{onClick:()=>update(item,filter==='want'?'watched':'want')},filter==='want'?'标记看过':'移回想看'),h(Button,{onClick:()=>update(item,null)},'移出片单')))),!items.some(item=>item.status===filter)&&h('p',{className:'view-sub'},'还没有影片，打开影片简介添加吧'));
}
export function StatusNotice() {
  const [message,setMessage]=R.useState('');
  R.useEffect(()=>{const handler=e=>setMessage(e.detail);window.addEventListener('little-days-status',handler);return()=>window.removeEventListener('little-days-status',handler);},[]);
  return message&&h('div',{className:'ld-global-notice',role:'alert'},message,h(Button,{onClick:()=>setMessage('')},'知道了'));
}
