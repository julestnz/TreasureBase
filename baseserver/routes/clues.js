var express = require('express');
var router = express.Router();
var db = require('../DB/config.js');

const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/TreasureBaseDB')
  .then(() => console.log('Connected to MongDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const clueSchema = new mongoose.Schema({
  question: String,
  answer: String
});

const Clue = mongoose.model('Clue', clueSchema);

router.get('/get', function(req, res, next) {
  Clue.find({},function(err,data){
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
