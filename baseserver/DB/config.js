const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/TreasureBaseDB')
  .then(() => console.log('Connected to MongDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

module.exports =db;
