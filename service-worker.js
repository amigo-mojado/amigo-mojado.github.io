// service-worker.js

// Installieren des Service Workers
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('weblog-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css', // Wenn du eine separate CSS-Datei hast
                '/script.js' // Wenn du JavaScript verwendest
                // Füge hier weitere Dateien hinzu, die zwischengespeichert werden sollen
            ]);
        })
    );
});

// Aktivieren des Service Workers
self.addEventListener('activate', function(event) {
    // Hier könntest du alte Caches aufräumen, wenn nötig
});

// Fetch-Event abfangen, um Anfragen abzufangen und gecachte Inhalte zurückzugeben, falls verfügbar
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
