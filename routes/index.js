var mongoose = require('mongoose')
var express = require('express');
var router = express.Router();
var controller=require('../controllers/lentesController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/', function(req,res){
  Lentes.find({},function(err,lentes){
    if(err){
      res.status(500);
      res.json({
        status:500,
        err
      });
    } else {
      res.json(lentes);
    }
  });
})


  router.post('/post', function(req,res){
    let Lentes=new Lentes({
      id: req.body.id,
    Marca: req.body.Marca,
    campoDeAmplitud: req.body.campoDeAmplitud,
    distanciaFocal:req.body.distanciaFocal
    })
    Materia.save(function(err){
      if(err){
        res.status(500)
        res.send({err});
      }
      res.send({message:"saved", success:true});
    });
  });





module.exports = router;
