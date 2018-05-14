var express = require('express');
var router = express.Router();
var db = require('../DB/config.js');

const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/TreasureBaseDB')
  .then(() => console.log('Connected to MongDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const huntSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String
});

const Hunt = mongoose.model('Hunt', huntSchema);

router.get('/get', function(req, res, next) {
  Hunt.find({},function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send(data);
                }
        })
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
