const mongoose=require("mongoose");

const tittleSchema= new mongoose.Schema({
    tittle:String  ,
    isCompleted:Boolean
});

const tittleModel=mongoose.model("tittleData",tittleSchema)
module.exports=tittleModel;