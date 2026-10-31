// Online recommendations use Apple's public movie chart; TMDB is optional.
let R, h, api;
export function configureMovies(react, services) { R=react;h=react.createElement;api=services; }
const CHART='https://itunes.apple.com/us/rss/topmovies/limit=50/json';
const CACHE='couple-online-movies-v1';
const GENRES={Romance:'爱情',Comedy:'喜剧',Drama:'剧情',Thriller:'惊悚',Horror:'恐怖',Action:'动作',Adventure:'冒险','Action & Adventure':'动作 / 冒险',Animation:'动画','Kids & Family':'家庭',Documentary:'纪录片','Sci-Fi & Fantasy':'科幻 / 奇幻','Science Fiction':'科幻',Musicals:'音乐',Mystery:'悬疑'};
export function normalizeChart(feed) {
  return (feed?.entry||[]).map((item,index)=>({
    id:'apple-'+item.id?.attributes?.['im:id'],title:item['im:name']?.label||'',year:(item['im:releaseDate']?.label||'').slice(0,4),
    type:'电影',genre:GENRES[item.category?.attributes?.label]||item.category?.attributes?.label||'电影',
    poster:(item['im:image']?.at(-1)?.label||'').replace(/\d+x\d+bb\.(png|jpg)$/,'300x450bb.$1'),
    synopsis:item.summary?.label||'暂无简介',storeUrl:item.id?.label||'',rank:index+1,source:'Apple TV 美国电影榜',emoji:'🎬'
  })).filter(item=>item.title&&item.id!=='apple-undefined');
}
export function movieIdentity(movie) { return movie.id?String(movie.id):`${movie.title}-${movie.year}`; }
export function rankRecommendations(list,watched=[],preferences=[],offset=0) {
  const seen=new Set(watched.filter(item=>item.status==='watched').map(item=>item.id));
  const knownTitles=new Set(watched.filter(item=>item.status==='watched').map(item=>item.title));
  const favorites=new Set(preferences);
  return list.filter(item=>!seen.has(movieIdentity(item))&&!knownTitles.has(item.title)).map((item,index)=>({item,score:(favorites.has(item.genre)?100:0)+(list.length-index)+((index+offset*7)%Math.max(1,list.length))/2})).sort((a,b)=>b.score-a.score).map(({item})=>item);
}
function read(key,fallback) {try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
export async function loadOnlineMovies({force=false,tmdbKey='',proxy='',fetcher=fetch,now=Date.now()}={}) {
  const source=tmdbKey||proxy?'tmdb':'apple';
  const cache=read(CACHE,null);
  if(!force&&cache?.source===source&&now-cache.fetchedAt<6*3600000&&cache.list?.length)return {...cache,cached:true};
  let result;
  if(source==='tmdb') {
    const base=proxy?proxy.replace(/\/$/,''):'https://api.themoviedb.org/3';
    const url=new URL(base+'/trending/movie/day');url.searchParams.set('language','zh-CN');if(!proxy)url.searchParams.set('api_key',tmdbKey);
    const response=await fetcher(url,{signal:AbortSignal.timeout(8000)});if(!response.ok)throw Error('TMDB 暂时连接不上');
    const data=await response.json();
    result={source,list:(data.results||[]).map((item,index)=>({id:'tmdb-'+item.id,title:item.title,year:(item.release_date||'').slice(0,4),type:'电影',genre:(item.genre_ids||[]).map(id=>({10749:'爱情',35:'喜剧',16:'动画',18:'剧情',27:'恐怖',53:'惊悚',28:'动作',878:'科幻',14:'奇幻',99:'纪录片',9648:'悬疑',10751:'家庭'})[id]).filter(Boolean).join(' / ')||'电影',poster:item.poster_path?'https://image.tmdb.org/t/p/w342'+item.poster_path:'',synopsis:item.overview||'暂无简介',score:item.vote_average,storeUrl:'https://www.themoviedb.org/movie/'+item.id,rank:index+1,source:'TMDB 今日热门',emoji:'🎬'})),updatedAt:new Date(now).toISOString(),fetchedAt:now};
  } else {
    const response=await fetcher(CHART,{signal:AbortSignal.timeout(8000)});if(!response.ok)throw Error('在线电影榜暂时连接不上');
    const data=await response.json();result={source,list:normalizeChart(data.feed),updatedAt:data.feed?.updated?.label||new Date(now).toISOString(),fetchedAt:now};
  }
  if(!result.list.length)throw Error('在线片源暂无结果');
  try{localStorage.setItem(CACHE,JSON.stringify(result));}catch{}
  return result;
}
export function OnlineMovies() {
  const [online,setOnline]=R.useState(()=>read(CACHE,null)),[loading,setLoading]=R.useState(false),[error,setError]=R.useState('');
  const [query,setQuery]=R.useState(''),[genre,setGenre]=R.useState('全部'),[selected,setSelected]=R.useState(null),[offset,setOffset]=R.useState(0);
  const [preferences,setPreferences]=R.useState(()=>read('couple-movie-preferences',[]));
  const {items:watchlist}=api.useSharedWatchlist();
  const alive=R.useRef(true),request=R.useRef(0),dialog=R.useRef(null),config=api.config()||{};
  const refresh=R.useCallback(async(force=false)=>{
    const id=++request.current;setLoading(true);setError('');
    try{const result=await loadOnlineMovies({force,tmdbKey:config.tmdbKey,proxy:config.tmdbProxy});if(alive.current&&id===request.current)setOnline(result);}
    catch(error){if(alive.current&&id===request.current)setError(error.message+'；当前保留上次片单或内置推荐。');}
    finally{if(alive.current&&id===request.current)setLoading(false);}
  },[config.tmdbKey,config.tmdbProxy]);
  R.useEffect(()=>{alive.current=true;refresh();const timer=setInterval(()=>{if(document.visibilityState==='visible')refresh(true);},30*60000);const connected=()=>refresh(true);window.addEventListener('online',connected);return()=>{alive.current=false;request.current++;clearInterval(timer);window.removeEventListener('online',connected);};},[refresh]);
  R.useEffect(()=>{if(!selected)return;const previous=document.activeElement;dialog.current?.querySelector('button')?.focus();const handle=event=>{if(event.key==='Escape')setSelected(null);if(event.key==='Tab'){const all=[...dialog.current.querySelectorAll('button,a')];if(!all.length)return;const first=all[0],last=all.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}};document.addEventListener('keydown',handle);return()=>{document.removeEventListener('keydown',handle);previous?.focus();};},[!!selected]);
  const sourceList=online?.list?.length?online.list:api.fallback;
  const ranked=query?sourceList:rankRecommendations(sourceList,watchlist,preferences,offset);
  const list=ranked.filter(movie=>(genre==='全部'||movie.genre.includes(genre))&&(movie.title+' '+movie.genre+' '+movie.year).toLowerCase().includes(query.trim().toLowerCase()));
  const label=online?.source==='tmdb'?'TMDB 今日热门':online?.source==='apple'?'Apple TV 美国电影榜':'内置精选';
  function likeGenre(movie){const next=preferences.includes(movie.genre)?preferences.filter(g=>g!==movie.genre):[...preferences,movie.genre];setPreferences(next);try{localStorage.setItem('couple-movie-preferences',JSON.stringify(next));}catch{}}
  return h('div',{className:'card ld-online-movies'},h('div',{className:'view-head'},h('h2',{className:'view-title'},'今晚看什么'),h('p',{className:'view-sub'},'在线找片，一起决定今晚的两小时。')),
    h('section',{className:'ld-source-box','aria-label':'推荐来源'},h('div',null,h('strong',null,loading?'正在更新片单…':label),h('p',{role:'status'},error|| (online?'榜单更新：'+new Date(online.updatedAt).toLocaleString('zh-CN')+' · '+online.list.length+' 部':'首次打开会获取在线电影榜'))),h('button',{className:'mini-btn',disabled:loading,onClick:()=>refresh(true)},loading?'获取中…':'刷新推荐')),
    h('p',{className:'ld-movie-explain'},'优先推荐你喜欢的类型，并隐藏已经看过的影片。海外榜单保留原片名；可在设置中启用 TMDB 中文热门推荐。'),
    h(api.Watchlist),h('div',{className:'ld-movie-filters'},h('input',{className:'field',type:'search','aria-label':'搜索电影',value:query,placeholder:'筛选片名、年份或类型',onChange:e=>setQuery(e.target.value)}),h('button',{className:'mini-btn',disabled:!list.length,onClick:()=>setSelected(list[Math.floor(Math.random()*list.length)])},'🎲 帮我们挑一部')),
    h('div',{className:'cats','aria-label':'电影类型'},['全部','爱情','喜剧','动画','剧情','悬疑','科幻'].map(value=>h('button',{type:'button',key:value,className:'cat'+(genre===value?' active':''),'aria-pressed':genre===value,onClick:()=>setGenre(value)},value))),
    h('div',{className:'ld-film-grid'},list.map(movie=>h('article',{key:movieIdentity(movie),className:'ld-film-card'},h('button',{className:'ld-film-open',onClick:()=>setSelected(movie),'aria-label':'查看 '+movie.title},movie.poster?h('img',{src:movie.poster,alt:movie.title,loading:'lazy',onError:e=>{e.target.style.visibility='hidden';}},):h('span',{className:'ld-film-placeholder'},movie.emoji||'🎬'),h('span',{className:'ld-film-rank'},movie.rank?'#'+movie.rank:'精选')),h('div',{className:'ld-film-content'},h('h3',null,movie.title),h('p',{className:'ld-meta'},movie.year,' · ',movie.genre,movie.score?' · '+movie.score.toFixed(1)+' 分':''),h('p',{className:'ld-film-synopsis'},movie.synopsis),h(api.MovieActions,{movie}),movie.storeUrl&&h('a',{href:movie.storeUrl,target:'_blank',rel:'noopener noreferrer',className:'ld-film-attribution'},movie.source?.startsWith('Apple')?'在 Apple TV 查看 ↗':'在 TMDB 查看 ↗'))))),
    !list.length&&h('div',{className:'empty'},h('p',null,'没有符合条件的影片，换个类型或关键词试试。')),
    selected&&h('div',{className:'ld-overlay',onClick:e=>{if(e.target===e.currentTarget)setSelected(null);}},h('section',{ref:dialog,className:'ld-dialog',role:'dialog','aria-modal':true,'aria-label':selected.title},h('button',{className:'mini-btn',onClick:()=>setSelected(null)},'关闭'),h('h3',null,selected.title),h('p',{className:'ld-meta'},selected.year,' · ',selected.genre),h('p',null,selected.synopsis),h(api.MovieActions,{movie:selected}),h('button',{className:'mini-btn','aria-pressed':preferences.includes(selected.genre),onClick:()=>likeGenre(selected)},preferences.includes(selected.genre)?'已偏爱这一类型 ✓':'喜欢这一类型'),selected.storeUrl&&h('a',{href:selected.storeUrl,target:'_blank',rel:'noopener noreferrer'},selected.source?.startsWith('Apple')?'在 Apple TV 查看 ↗':'在 TMDB 查看 ↗'))));
}
