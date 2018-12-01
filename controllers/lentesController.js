var lentes = require('../models/Lentes');
var lentesController ={};

lentesController.index= async function(req,res,next){
    try {
        let lentes=await lentes.find();
    } catch (error) {
        return res.status(500, json({error:error}));
        
    }
}