var form = document.querySelector('form');
var titleInput = document.querySelector('#form-title-input');
var contentInput = document.querySelector('#content-input');

var dbPromise = idb.open('posts-store', 1, function (db) {
  if (!db.objectStoreName.contains('sync-posts')) {
    db.createObjectStore('sync-posts', {keyPath: 'id'});
  }
});

function writeData(st, data) {
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      store.put(data);
      return tx.complete;
    });
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (titleInput.value.trim() === '' || contentInput.value.trim() === '') {
    return;
  } 

  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready
      .then(function(sw) {
        var post = {
          id: new Date().toISOString(),
          title: titleInput.value,
          content: contentInput.value
        };
        writeData('sync-posts', post)
          .then(function() {
            sw.sync.register('sync-new-content');
          });
      });
  }
});