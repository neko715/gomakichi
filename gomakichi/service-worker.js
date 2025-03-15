self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    clients.claim();
});

self.addEventListener("push", event => {
    const data = event.data ? event.data.text() : "ごまきちの居場所が更新されました";
    event.waitUntil(
        self.registration.showNotification("ごまきち通知", {
            body: data,
            icon: "icon.png"
        })
    );
});
