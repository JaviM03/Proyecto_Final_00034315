var mongoose =require('mongoose');
var {mongodb}=require('./keys');

mongoose.connect(mongo.URI, {
    useNewUrlParser:true,
    useCreateIndex:true
}).then(debu=>console.log("conexion!!"))
.catch(err=> console.error(err));