const PouchDB = require('pouchdb');
const db = new PouchDB('carabistouille2');
console.log(db);
db.put({_id: 'thomas.bottini@gmail.com', name: 'Amleth',  age: 35});