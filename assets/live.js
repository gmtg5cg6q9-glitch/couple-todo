// One shared Realtime connection drives all mounted views and the status panel.
let R,h,api;
export const APP_VERSION='0.5.0';
const subscribers=new Set(),collections=new Map();
let snapshot={connection:'local',lastSync:null,pending:{},history:[],online:typeof navigator==='undefined'?true:navigator.onLine,presence:0,error:'',newVersion:null};
export function configureRealtime(react,services){R=react;h=react.createElement;api=services;}
function emit(patch){snapshot={...snapshot,...patch};for(const fn of subscribers)fn(snapshot);}
export function reportSync({scope='default',pending=0,phase='saved',error='',kind='todos',changed=false}={}){
  const next={pending:{...snapshot.pending,[scope]:pending}};
  if(phase==='saved')next.lastSync=Date.now();
  if(error)next.error=error;else if(phase==='saved')next.error='';
  if(changed)next.history=[{id:Date.now()+Math.random(),time:Date.now(),text:kindLabel(kind)+'已更新'} ,...snapshot.history].slice(0,12);
  emit(next);
}
const kindLabel=kind=>({todos:'待办',anniv:'纪念日',watchlist:'共同片单',photos:'相册',profile:'资料',cities:'旅行城市'})[kind]||'共享资料';
export function subscribeSpace(kind,callback){if(!collections.has(kind))collections.set(kind,new Set());collections.get(kind).add(callback);return()=>collections.get(kind)?.delete(callback);}
function notify(kind){for(const [name,listeners]of collections)if(!kind||name===kind)for(const listener of listeners)listener();window.dispatchEvent(new CustomEvent('little-days-remote',{detail:{kind}}));}
export function deviceId(){let id=localStorage.getItem('couple-device-v1');if(!id){id=crypto.randomUUID();localStorage.setItem('couple-device-v1',id);}return id;}
export function validPublicKey(value){
  if(value.startsWith('sb_publishable_')&&value.length>24)return true;
  if(value.startsWith('sb_secret_'))return false;
  try{return JSON.parse(atob(value.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).role==='anon';}catch{return false;}
}
export function validateConnection({url,anon,coupleId}){
  let address;try{address=new URL(url);}catch{throw Error('请输入正确的 Supabase Project URL');}
  if(address.protocol!=='https:'||address.username||address.password||address.pathname!=='/'||address.search||address.hash)throw Error('项目地址应是 https://项目编号.supabase.co，不要填写数据库连接串');
  if(!validPublicKey(anon))throw Error('请使用 sb_publishable_ 开头的前端 Key 或 anon Key，不要使用 secret / service_role');
  if(!/^[A-Za-z0-9_-]{16,100}$/.test(coupleId))throw Error('空间码需要 16–100 位字母、数字、短横线或下划线，可直接点击生成');
  return {url:address.origin,anon:anon.trim(),coupleId:coupleId.trim()};
}
function encodeInvite(value){const data=new TextEncoder().encode(JSON.stringify(value));let raw='';for(const byte of data)raw+=String.fromCharCode(byte);return btoa(raw).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');}
export function decodeInvite(hash){try{const text=new URLSearchParams(hash.replace(/^#/, '')).get('pair');if(!text)return null;const bytes=Uint8Array.from(atob(text.replace(/-/g,'+').replace(/_/g,'/')),char=>char.charCodeAt(0));return validateConnection(JSON.parse(new TextDecoder().decode(bytes)));}catch{return null;}}
function useStatus(){const [value,setValue]=R.useState(snapshot);R.useEffect(()=>{subscribers.add(setValue);setValue(snapshot);return()=>subscribers.delete(setValue);},[]);return value;}
export function RealtimeHub({onNavigate}){
  const status=useStatus(),config=api.config(),[open,setOpen]=R.useState(false),[clock,setClock]=R.useState(Date.now()),[updating,setUpdating]=R.useState(false);
  R.useEffect(()=>{const tick=setInterval(()=>setClock(Date.now()),1000);return()=>clearInterval(tick);},[]);
  R.useEffect(()=>{
    const handler=()=>emit({online:navigator.onLine,connection:navigator.onLine?(api.enabled()?'connecting':'local'):'offline'});
    window.addEventListener('online',handler);window.addEventListener('offline',handler);
    return()=>{window.removeEventListener('online',handler);window.removeEventListener('offline',handler);};
  },[]);
  R.useEffect(()=>{
    let alive=true;
    fetch(new URL('../app-config.json',import.meta.url),{cache:'no-store',signal:AbortSignal.timeout(5000)}).then(response=>response.ok?response.json():null).then(data=>{if(alive&&data?.url&&validPublicKey(data.anon||'')&&!api.config()?.url)api.save({...api.config(),url:data.url,anon:data.anon,enabled:false});}).catch(()=>{});
    const check=()=>fetch(new URL('../version.json',import.meta.url),{cache:'no-store',signal:AbortSignal.timeout(5000)}).then(response=>response.ok?response.json():null).then(data=>{if(alive&&data?.version&&data.version!==APP_VERSION)emit({newVersion:data.version});}).catch(()=>{});
    const timer=setInterval(()=>{if(document.visibilityState==='visible')check();},60000);const visible=()=>{if(document.visibilityState==='visible')check();};document.addEventListener('visibilitychange',visible);
    return()=>{alive=false;clearInterval(timer);document.removeEventListener('visibilitychange',visible);};
  },[]);
  R.useEffect(()=>{
    if(!api.enabled()){emit({connection:navigator.onLine?'local':'offline',presence:0,error:''});return;}
    let alive=true,channel,reconnect;
    emit({connection:'connecting',presence:0,pending:{}});
    const connect=async()=>{
      try{
        await api.ready();
        const client=api.client(),room=api.room();
        const topic=config.secure?'couple:'+room:'little-days-'+Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(room)))).map(b=>b.toString(16).padStart(2,'0')).join('');
        if(!alive)return;
        channel=client.channel(topic,{config:{private:!!config.secure,presence:{key:deviceId()}}})
          .on('postgres_changes',{event:'*',schema:'public',table:api.table(),filter:'couple_id=eq.'+room},payload=>{
            if(payload.eventType!=='DELETE'&&payload.new?.couple_id!==room)return;
            const kind=payload.new?.kind||payload.old?.kind;
            if(payload.new?.payload?._actor!==deviceId())emit({history:[{id:Date.now()+Math.random(),time:Date.now(),text:'另一端更新了'+kindLabel(kind)},...snapshot.history].slice(0,12)});
            notify(kind);
          })
          .on('presence',{event:'sync'},()=>{if(alive)emit({presence:Object.keys(channel.presenceState()).length});})
          .subscribe(async state=>{
            if(!alive)return;
            if(state==='SUBSCRIBED'){emit({connection:'live',error:''});await channel.track({device:deviceId(),name:api.profile()?.you||'我们',at:new Date().toISOString()});notify();}
            else if(state==='CHANNEL_ERROR'||state==='TIMED_OUT')emit({connection:'retrying',error:'实时连接中断，保留本机改动并自动重连'});
            else if(state==='CLOSED')emit({connection:'retrying',presence:0});
          });
      }catch{if(alive)emit({connection:'error',error:'实时连接失败，请在设置中测试项目连接'});}
    };
    connect();
    const resume=()=>{notify();};window.addEventListener('online',resume);document.addEventListener('visibilitychange',resume);
    return()=>{alive=false;clearTimeout(reconnect);window.removeEventListener('online',resume);document.removeEventListener('visibilitychange',resume);if(channel)api.client()?.removeChannel(channel);};
  },[config?.url,config?.anon,config?.coupleId,config?.enabled]);
  const pending=Object.values(status.pending).reduce((a,b)=>a+b,0);
  const label=(!status.online?'离线，改动已保留':status.connection==='local'?'本机模式':status.connection==='live'?(pending?'实时连接 · '+pending+' 项待同步':'实时连接已建立'):status.connection==='connecting'?'正在连接共享空间…':status.connection==='retrying'?'连接重试中':'连接需要检查');
  const since=status.lastSync?Math.max(0,Math.floor((clock-status.lastSync)/1000)):null;
  const time=since===null?'尚未同步':since<5?'刚刚同步':since<60?since+' 秒前同步':Math.floor(since/60)+' 分钟前同步';
  async function update(){setUpdating(true);try{if('serviceWorker'in navigator){for(const registration of await navigator.serviceWorker.getRegistrations())if(registration.scope.startsWith(new URL('../',import.meta.url).href))await registration.update();}location.reload();}catch{setUpdating(false);}}
  return h(R.Fragment,null,h('div',{className:'ld-sync-bar'},h('button',{className:'ld-sync-summary',onClick:()=>setOpen(value=>!value),'aria-expanded':open},h('span',{className:'ld-live-dot '+(status.connection==='live'?'live':'')},'●'),h('span',null,label),api.enabled()&&h('small',null,time),status.connection==='live'&&h('small',null,status.presence>1?'TA 也在线':'等待另一端上线')),h('button',{className:'mini-btn',onClick:()=>onNavigate('settings')},'配对 / 设置')),
    status.newVersion&&h('div',{className:'ld-update-notice',role:'status'},'有新版本 '+status.newVersion+'，更新后保留本机资料。',h('button',{className:'mini-btn',disabled:updating,onClick:update},updating?'更新中…':'更新界面')),
    open&&h('section',{className:'ld-sync-panel','aria-label':'实时同步动态'},h('h3',null,'同步动态'),h('p',null,api.enabled()?'待办、纪念日、共同片单会自动刷新，无需重新打开页面。':'在设置中创建空间，将空间码发给另一半。'),h('p',{role:'status'},status.error|| (api.enabled()?time:'本机资料只保存在当前浏览器')),h('ul',null,status.history.map(item=>h('li',{key:item.id},h('time',null,new Date(item.time).toLocaleTimeString('zh-CN')),' ',item.text))),h('button',{className:'mini-btn',onClick:()=>{notify();}},'立即同步')));
}
export function CloudPanel(){
  const initial=decodeInvite(location.hash)||api.config()||{};
  const [url,setUrl]=R.useState(initial.url||''),[key,setKey]=R.useState(initial.anon||''),[room,setRoom]=R.useState(initial.coupleId||''),[busy,setBusy]=R.useState(false),[message,setMessage]=R.useState(''),[inviteLink,setInviteLink]=R.useState('');
  R.useEffect(()=>{if(decodeInvite(location.hash)){setMessage('收到共享空间邀请。确认后连接，即可同步两个人的数据。');history.replaceState({},'',location.pathname+location.search);}},[]);
  async function test(save=false){
    let data;try{data=validateConnection({url:url.trim(),anon:key.trim(),coupleId:room.trim()});}catch(error){setMessage(error.message);return;}
    setBusy(true);setMessage('正在检测项目和数据表…');
    let client;
    try{
      client=api.createClient(data.url,data.anon,{auth:{persistSession:save,autoRefreshToken:save},realtime:{params:{eventsPerSecond:5}}});
      const {data:session,error:sessionError}=await client.auth.getSession();
      if(sessionError)throw sessionError;
      if(!session.session){const {error:authError}=await client.auth.signInAnonymously();if(authError)throw authError;}
      const {error}=await client.from('couple_rows').select('id,deleted').eq('couple_id','__connection_probe__').limit(1).abortSignal(AbortSignal.timeout(8000));
      if(error)throw error;
      if(save){const {data:spaceId,error:joinError}=await client.rpc('join_couple_space',{p_code:data.coupleId});if(joinError)throw joinError;api.save({...api.config(),...data,spaceId,secure:true,enabled:true});setMessage('已连接共享空间。另一端使用同一个空间码即可同步。');}else setMessage('项目和数据表可访问。点击「连接共享空间」启用，并在顶部查看实时连接状态。');
    }catch(error){setMessage(error.code==='PGRST205'||error.code==='42P01'||error.code==='PGRST202'?'项目已找到，但同步表或配对函数尚未初始化。请执行 setup-supabase.sql。':error.code==='42501'?'数据表权限未配置，请检查 Supabase 的表访问策略。':/anonymous/i.test(error.message||'')?'请在 Supabase Authentication → Sign In / Providers 中开启 Anonymous Sign-Ins。':'连接失败：'+(error.message||'请检查项目 URL、前端 Key 和网络'));}
    finally{client?.removeAllChannels();setBusy(false);}
  }
  async function invite(){try{const data=validateConnection({url:url.trim(),anon:key.trim(),coupleId:room.trim()});const link=new URL('../',import.meta.url);link.hash='pair='+encodeInvite(data);setInviteLink(link.href);try{await navigator.clipboard.writeText(link.href);setMessage('邀请链接已复制，发给另一半后，TA 打开设置并确认连接即可。');}catch{setMessage('请手动复制下方邀请链接，发给另一半。');}}catch(error){setMessage(error.message||'请先生成空间码');}}
  function field(label,value,onChange,props={}){return h('label',{className:'ld-field'},h('span',null,label),h('input',{className:'field','aria-label':label,value,onChange:event=>onChange(event.target.value),...props}));}
  return h('section',{className:'set-block ld-cloud-panel'},h('h3',{className:'set-name'},'☁️ 双人实时同步'),h('p',{className:'set-desc'},'两端连接同一个项目、使用相同空间码。保存后，待办、纪念日和共同片单会自动更新。'),
    h('details',{open:!url||!key},h('summary',null,'项目连接信息'),field('Supabase Project URL',url,setUrl,{placeholder:'https://xxxxx.supabase.co',type:'url',autoComplete:'off'}),field('Publishable / anon Key',key,setKey,{placeholder:'sb_publishable_…',type:'password',autoComplete:'off'})),
    field('共享空间码',room,setRoom,{placeholder:'输入 TA 的空间码，或点击生成',autoComplete:'off',spellCheck:false}),
    h('div',{className:'ld-actions'},h('button',{className:'mini-btn',disabled:busy,onClick:()=>{setRoom(crypto.randomUUID().replace(/-/g,''));setMessage('新空间码已生成，点击连接后发给另一半。原空间的数据会保留。');}},'生成新空间码'),h('button',{className:'mini-btn',disabled:busy,onClick:()=>test(false)},'测试连接'),h('button',{className:'primary-btn',disabled:busy,onClick:()=>test(true)},busy?'连接中…':'连接共享空间')),
    h('div',{className:'ld-actions'},h('button',{className:'mini-btn',disabled:busy,onClick:invite},'复制邀请链接'),h('button',{className:'mini-btn',disabled:busy,onClick:()=>{api.save({...api.config(),enabled:false});setMessage('已切换为本机模式，云端和离线队列都已保留。');}},'切换为本机模式')),
    h('p',{role:'status',className:'ld-notice'},message),inviteLink&&h('label',{className:'ld-field'},h('span',null,'邀请链接（只发给另一半）'),h('input',{className:'field',readOnly:true,value:inviteLink,'aria-label':'邀请链接',onFocus:event=>event.target.select()})),h('p',{className:'ld-meta'},'每个空间最多两位成员。设备身份会保存在浏览器；请保留空间码，勿清除已配对设备的浏览器资料。'),h('a',{href:new URL('../setup-supabase.sql',import.meta.url).href,download:'setup-supabase.sql'},'下载项目初始化 SQL'));
}
