const mongoose=require("mongoose");

const tittleSchema= new mongoose.Schema({
    tittle:{
        type:String,required:true,
    },
    isCompleted:{
        type:Boolean,default:Boolean
    }
},{timestamps:true});

const tittleModel=mongoose.model("tittleData",tittleSchema)
module.exports=tittleModel;