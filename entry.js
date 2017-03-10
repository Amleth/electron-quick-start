const PouchDB = require('pouchdb-browser');
const db = new PouchDB('carabistouille2');

db.changes().on('change', function() {
  console.log('Ch-Ch-Changes');
});

db.put({_id: Date.now().toString(), name: 'Amleth', age: 35}).catch(function(e) {
  console.log(e);
});