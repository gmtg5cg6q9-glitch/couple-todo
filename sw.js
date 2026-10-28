/* 自毁型 Service Worker
 * 旧版站点注册过 SW，会缓存旧页面导致返回访客看不到新版。
 * 本文件替换旧 sw.js：安装后立即接管、删除所有缓存、注销自身。
 */
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys()
        await Promise.all(keys.map((k) => caches.delete(k)))
      } catch (e) {
        /* ignore */
      }
      try {
        await self.registration.unregister()
      } catch (e) {
        /* ignore */
      }
      try {
        const clientsList = await self.clients.matchAll({ type: 'window' })
        clientsList.forEach((c) => c.navigate(c.url))
      } catch (e) {
        /* ignore */
      }
    })()
  )
})

self.addEventListener('fetch', () => {
  /* 不拦截任何请求，全部走网络 */
})
