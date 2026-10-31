// Chinese movie metadata and the original WebGL movie globe.
let R,h,api;
export function configureMovies(react,services){R=react;h=react.createElement;api=services;}
const CACHE='couple-chinese-movies-v1';
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
export const movieIdentity=movie=>movie.id?String(movie.id):`${movie.title}-${movie.year}`;
const plain=value=>String(value||'').replace(/<br\s*\/?\s*>/gi,'\n').replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').trim();
export function normalizeMaoyan(items){
  return (items||[]).filter(item=>Number.isInteger(Number(item.id))&&Number(item.id)>0&&item.nm).map((item,index)=>({
    id:'maoyan-'+item.id,title:String(item.nm),year:String(item.rt||item.pubDesc||'').slice(0,4),type:'电影',
    genre:plain(item.cat).replace(/[,，]/g,' / ')||'国内热映',region:plain(item.src),cast:plain(item.star),director:plain(item.dir),
    poster:String(item.img||'').replace(/^http:/,'https:').replace('w.h/','360.540/'),
    synopsis:plain(item.dra)||[item.star?'主演：'+item.star:'',item.rt?'上映：'+item.rt:''].filter(Boolean).join('。')||'点开猫眼页面查看影片介绍。',
    score:Number(item.sc)>0?Number(item.sc):null,storeUrl:'https://m.maoyan.com/asgard/movie/'+item.id,rank:index+1,source:'猫眼国内热映',emoji:/动画/.test(item.cat||'')?'🎨':/爱情/.test(item.cat||'')?'💞':'🎬'
  }));
}
export function rankRecommendations(list,watched=[],preferences=[]){
  const ids=new Set(watched.filter(item=>item.status==='watched').map(item=>item.id));
  const titles=new Set(watched.filter(item=>item.status==='watched').map(item=>item.title));
  return list.filter(item=>!ids.has(movieIdentity(item))&&!titles.has(item.title)).map((item,index)=>({item,index,liked:preferences.some(genre=>item.genre.includes(genre))})).sort((a,b)=>Number(b.liked)-Number(a.liked)||a.index-b.index).map(({item})=>item);
}
async function connection(fetcher,config){
  if(config.url&&config.anon)return config;
  const response=await fetcher(new URL('../app-config.json',import.meta.url),{cache:'no-store',signal:AbortSignal.timeout(5000)});
  if(!response.ok)throw Error('电影源连接配置暂不可用');return response.json();
}
export async function loadChineseMovies({force=false,config={},fetcher=fetch,now=Date.now()}={}){
  const cached=read(CACHE,null);
  if(!force&&cached?.source==='maoyan'&&cached.list?.length&&now-cached.fetchedAt<30*60000)return {...cached,cached:true};
  let data;
  try{
    const cloud=await connection(fetcher,config);
    const response=await fetcher(cloud.url+'/rest/v1/rpc/get_couple_movies',{method:'POST',headers:{apikey:cloud.anon,'Content-Type':'application/json'},body:'{}',signal:AbortSignal.timeout(10000)});
    if(!response.ok)throw Error('中文片源暂时连接不上');data=await response.json();
    if(data?.source!=='maoyan'||!data.data?.length)throw Error('中文片源暂无数据');
  }catch(error){
    if(cached?.source==='maoyan'&&cached.list?.length)return {...cached,cached:true,stale:true};
    const response=await fetcher(new URL('../movie-catalog.json',import.meta.url),{signal:AbortSignal.timeout(5000)});
    if(!response.ok)throw error;data={...await response.json(),stale:true};
  }
  const list=normalizeMaoyan(data.data);if(!list.length)throw Error('中文片源暂无结果');
  const result={source:'maoyan',list,updatedAt:data.updatedAt,fetchedAt:now,stale:!!data.stale};
  try{localStorage.setItem(CACHE,JSON.stringify(result));}catch{}
  return result;
}
export function OnlineMovies(){
  const [online,setOnline]=R.useState(()=>read(CACHE,null)),[loading,setLoading]=R.useState(false),[error,setError]=R.useState('');
  const [channel,setChannel]=R.useState('hot'),[query,setQuery]=R.useState(''),[genre,setGenre]=R.useState('全部');
  const [selected,setSelected]=R.useState(null),[active,setActive]=R.useState(0),[preferences,setPreferences]=R.useState(()=>read('couple-movie-preferences',[]));
  const [view,setView]=R.useState(()=>localStorage.getItem('couple-movie-view')||'globe');
  const alive=R.useRef(true),request=R.useRef(0),dialog=R.useRef(null),config=api.config()||{};
  const compact=api.useCompact(),capable=R.useMemo(()=>api.canWebGL(),[]);
  const {items:watchlist}=api.useSharedWatchlist();
  const refresh=R.useCallback(async(force=false)=>{
    const id=++request.current;setLoading(true);setError('');
    try{const result=await loadChineseMovies({force,config});if(alive.current&&id===request.current)setOnline(result);}
    catch(error){if(alive.current&&id===request.current)setError(error.message+'，暂用情侣精选。');}
    finally{if(alive.current&&id===request.current)setLoading(false);}
  },[config.url,config.anon]);
  R.useEffect(()=>{alive.current=true;refresh();const timer=setInterval(()=>{if(document.visibilityState==='visible')refresh(true);},30*60000);const onOnline=()=>refresh(true);window.addEventListener('online',onOnline);return()=>{alive.current=false;request.current++;clearInterval(timer);window.removeEventListener('online',onOnline);};},[refresh]);
  R.useEffect(()=>{if(!selected)return;const previous=document.activeElement;dialog.current?.querySelector('button')?.focus();const handler=event=>{if(event.key==='Escape')setSelected(null);if(event.key==='Tab'){const all=[...dialog.current.querySelectorAll('button,a')];if(!all.length)return;const first=all[0],last=all.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}};document.addEventListener('keydown',handler);return()=>{document.removeEventListener('keydown',handler);previous?.focus();};},[!!selected]);
  const curated=R.useMemo(()=>{const offset=Math.floor(Date.now()/86400000)%api.fallback.length;return [...api.fallback.slice(offset),...api.fallback.slice(0,offset)];},[]);
  const catalog=channel==='curated'?curated:(online?.source==='maoyan'&&online.list?.length?online.list:curated);
  const ranked=query?catalog:rankRecommendations(catalog,watchlist,preferences);
  const list=ranked.filter(movie=>(genre==='全部'||movie.genre.includes(genre))&&(movie.title+' '+movie.genre+' '+movie.year+' '+(movie.cast||'')+' '+(movie.region||'')).toLowerCase().includes(query.trim().toLowerCase()));
  const listKey=JSON.stringify(list.map(movie=>[movieIdentity(movie),movie.poster,movie.title,movie.year,movie.genre]));
  const globeItems=R.useMemo(()=>list.map((movie,index)=>({image:movie.poster||api.tile(movie,index),title:movie.title,description:`${movie.year} · ${movie.genre}`})),[listKey]);
  const current=list[Math.min(active,list.length-1)];
  const genres=['全部',...new Set(catalog.flatMap(movie=>movie.genre.split(/\s*\/\s*/)).filter(value=>value&&value!=='国内热映'))].slice(0,10);
  R.useEffect(()=>{setActive(0);},[channel,query,genre]);
  function mode(value){setView(value);try{localStorage.setItem('couple-movie-view',value);}catch{}}
  function like(movie){const group=movie.genre.split(' / ')[0],next=preferences.includes(group)?preferences.filter(value=>value!==group):[...preferences,group];setPreferences(next);try{localStorage.setItem('couple-movie-preferences',JSON.stringify(next));}catch{}}
  async function open(movie){
    setSelected(movie);
    if(!movie.id?.startsWith('maoyan-')||movie.director)return;
    try{const cloud=await connection(fetch,config);const response=await fetch(cloud.url+'/rest/v1/rpc/get_couple_movie_detail',{method:'POST',headers:{apikey:cloud.anon,'Content-Type':'application/json'},body:JSON.stringify({p_id:Number(movie.id.slice(7))}),signal:AbortSignal.timeout(8000)});if(!response.ok)return;const detail=await response.json();if(!detail)return;const enriched=normalizeMaoyan([detail])[0];if(enriched&&alive.current)setSelected(previous=>previous?.id===movie.id?{...movie,...enriched}:previous);}catch{}
  }
  return h('div',{className:'card ld-chinese-movies'},h('div',{className:'view-head'},h('h2',{className:'view-title'},'今晚看什么'),h('p',{className:'view-sub'},'拖动电影星球找片 · 点一张看简介 · 一起选今晚的故事')),
    h('section',{className:'ld-source-box ld-source-compact','aria-label':'推荐来源'},h('div',null,h('strong',null,channel==='curated'?'情侣精选 · 电影与剧集':'猫眼 · 国内院线热映'),h('p',{role:'status'},error|| (loading?'正在更新中文片单…':channel==='curated'?'原来的中文精选片单，每天换个顺序':online?'片源更新：'+new Date(online.updatedAt).toLocaleString('zh-CN')+' · '+online.list.length+' 部'+(online.stale?' · 使用缓存':''):'正在连接中文片源'))),h('button',{className:'mini-btn',disabled:loading,onClick:()=>refresh(true)},loading?'获取中…':'刷新片单')),
    h('div',{className:'ld-movie-controls'},h('div',{className:'seg ld-movie-channel',role:'tablist','aria-label':'电影片单'},[['hot','国内热映'],['curated','情侣精选']].map(([value,label])=>h('button',{key:value,role:'tab','aria-selected':channel===value,className:channel===value?'active':'',onClick:()=>{setChannel(value);setGenre('全部');}},label))),h('div',{className:'photo-modes','aria-label':'观影特效'},h('button',{className:'photo-mode'+(view==='globe'?' active':''),'aria-pressed':view==='globe',disabled:!capable,onClick:()=>mode('globe')},'✦ 星球'),h('button',{className:'photo-mode'+(view==='list'?' active':''),'aria-pressed':view==='list',onClick:()=>mode('list')},'▦ 列表'))),
    h('div',{className:'ld-movie-filters'},h('input',{className:'add-input',type:'search','aria-label':'搜索电影',placeholder:'搜中文片名、演员、类型或年份',value:query,onChange:event=>setQuery(event.target.value)}),h('button',{className:'mini-btn',disabled:!list.length,onClick:()=>open(list[Math.floor(Math.random()*list.length)])},'🎲 帮我们挑一部')),
    h('div',{className:'cats','aria-label':'电影类型'},genres.map(value=>h('button',{key:value,className:'cat'+(genre===value?' active':''),'aria-pressed':genre===value,onClick:()=>setGenre(value)},value))),
    !list.length?h('div',{className:'empty'},h('p',null,'没有符合条件的影片，换个关键词或类型试试。')):
      view==='globe'&&capable?h('section',{'aria-label':'电影星球'},h('div',{className:'menu-wrap ld-restored-globe'},h(api.Globe,{items:globeItems,count:compact?130:190,tileSize:compact?.62:.72,roundness:.22,zoom:compact?.55:.8,pullBack:.9,stretch:.55,inertia:.62,autoplay:4,grayscale:false,dim:.14,intro:true,showInfo:false,theme:'light',accentColor:'#1c4568',onActiveChange:(_,index)=>setActive(index),onItemClick:(_,index)=>{if(list[index])open(list[index]);}})),h('p',{className:'ld-globe-hint'},'按住拖动环视 · 松手有惯性 · 点击正面的海报看简介'),current&&h('div',{className:'movie-detail ld-active-film'},h('div',{className:'movie-detail-head'},h('span',{className:'movie-emoji'},current.emoji),h('div',null,h('div',{className:'movie-name'},current.title,' ',h('span',{className:'movie-year'},current.year)),h('p',{className:'ld-meta'},current.genre,current.region?' · '+current.region:'',current.score?' · '+current.score.toFixed(1)+' 分':'')),h('button',{className:'mini-btn',onClick:()=>open(current)},'简介')),h(api.MovieActions,{movie:current}))):
      h('div',{className:'ld-film-grid'},list.map(movie=>h('article',{key:movieIdentity(movie),className:'ld-film-card'},h('button',{className:'ld-film-open',onClick:()=>open(movie),'aria-label':'查看 '+movie.title},movie.poster?h('img',{src:movie.poster,alt:movie.title,loading:'lazy'}):h('span',{className:'ld-film-placeholder'},movie.emoji),h('span',{className:'ld-film-rank'},movie.rank?'#'+movie.rank:'精选')),h('div',{className:'ld-film-content'},h('h3',null,movie.title),h('p',{className:'ld-meta'},movie.year,' · ',movie.genre),h('p',{className:'ld-film-synopsis'},movie.synopsis),h(api.MovieActions,{movie}),movie.storeUrl&&h('a',{href:movie.storeUrl,target:'_blank',rel:'noopener noreferrer',className:'ld-film-attribution'},'在猫眼查看 ↗'))))),
    h(api.Watchlist),
    selected&&h('div',{className:'movie-sheet',role:'dialog','aria-modal':true,'aria-label':selected.title,onClick:()=>setSelected(null)},h('div',{ref:dialog,className:'movie-sheet-inner',onClick:event=>event.stopPropagation()},h('button',{className:'ld-sheet-close mini-btn',onClick:()=>setSelected(null),'aria-label':'关闭电影简介'},'关闭'),selected.poster?h('img',{className:'movie-poster big',src:selected.poster,alt:selected.title}):h('span',{className:'movie-emoji big'},selected.emoji),h('h3',{className:'movie-sheet-title'},selected.title,' ',h('span',{className:'movie-year'},selected.year)),h('div',{className:'movie-tags center'},h('span',{className:'tag'},selected.genre),selected.region&&h('span',{className:'tag soft'},selected.region),selected.score&&h('span',{className:'tag soft'},selected.score.toFixed(1)+' 分')),selected.cast&&h('p',{className:'ld-film-credit'},'主演：'+selected.cast),selected.director&&h('p',{className:'ld-film-credit'},'导演：'+selected.director),h('p',{className:'movie-syn'},selected.synopsis),h(api.MovieActions,{movie:selected}),h('button',{className:'mini-btn','aria-pressed':preferences.some(value=>selected.genre.includes(value)),onClick:()=>like(selected)},'喜欢这一类型'),selected.storeUrl&&h('p',null,h('a',{href:selected.storeUrl,target:'_blank',rel:'noopener noreferrer'},'影片资料来自猫眼 · 查看原页面 ↗')))));
}
