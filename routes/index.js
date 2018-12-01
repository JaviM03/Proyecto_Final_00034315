var mongoose = require('mongoose')
var express = require('express');
var router = express.Router();
var controller=require('../controllers/lentesController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



module.exports = router;
