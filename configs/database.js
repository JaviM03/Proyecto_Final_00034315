var mongoose =require('mongoose');
var {mongodb}=require('../configs/keys');

mongoose.connect(mongodb.URI, {
    useNewUrlParser:true,
    useCreateIndex:true
}).then(db=>console.log("conexion!!"))
.catch(err=> console.error(err));