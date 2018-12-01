var mongoose=require('mongoose');

var {Schema}=mongoose;

lenteSchema={
    id: String,
    Marca: String,
    campoDeAmplitud: Number,
    distanciaFocal:Number
}

module.exports=mongoose.model('lentes',lenteSchema)

