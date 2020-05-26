const version = "1.0.0";
const CACHE = version + "::AALabel";
const installFilesEssential = ["/", "/manifest.json"];

const installFilesDesirable = ["/favicon.ico"];

function installStaticFiles() {
    return caches.open(CACHE).then(cache => {
        cache.addAll(installFilesDesirable);
        return cache.addAll(installFilesEssential);
    });
}

function clearOldCaches() {
    return caches.keys().then(keyList => {
        return Promise.all(
            keyList.filter(key => key !== CACHE).map(key => caches.delete(key))
        );
    });
}

self.addEventListener("install", event => {
    event.waitUntil(installStaticFiles().then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
    event.waitUntil(clearOldCaches().then(() => self.clients.claim()));
});
