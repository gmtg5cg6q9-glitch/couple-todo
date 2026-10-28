// Service Worker：接收网页推送并展示通知
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))

self.addEventListener('push', (event) => {
  let data = { title: '情侣待办', body: '有一个提醒' }
  try {
    if (event.data) data = event.data.json()
  } catch (e) {}
  const options = {
    body: data.body || '',
    icon: '/icon.svg',
    badge: '/icon.svg',
    tag: data.tag || 'couple-todo',
    data: { url: data.url || '/' },
  }
  event.waitUntil(self.registration.showNotification(data.title || '情侣待办', options))
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const target = (event.notification.data && event.notification.data.url) || '/'
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windows) => {
      for (const w of windows) {
        if ('focus' in w) return w.focus()
      }
      if (self.clients.openWindow) return self.clients.openWindow(target)
    }),
  )
})
