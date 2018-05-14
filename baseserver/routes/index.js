var express = require('express');
var router = express.Router();
var db = require('../DB/config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', function(req, res, next) {
  res.send('server connected');
});

console.log('API Server Started');
module.exports = router;
