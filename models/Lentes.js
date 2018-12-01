var mongoose=require('mongoose');

var {Schema}=mongoose;

lenteSchema={
    id: String,
    Marca: String,
    campoDeAmplitud: Number,
    distanciaFocal:Number
}
app.post('/', (req,res,next)=>
{

});

module.exports=mongoose.model('lentes',lenteSchema)

