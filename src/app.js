const express=require("express");
const app=express();
const bodyParser=require("body-parser");

const tittleModel=require("./models/tittle");

app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/v1/tasks",async(req,res)=>{
    try{
        const data= await tittleModel.find()
        res.status(200).json({
            data
        })
    }catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message

        })
    }
});
app.get("/v1/tasks/:id",async (req,res)=>{

try {
    const data= await tittleModel.findById(req.params.id)
    res.status(200).json({
        data
    })
} catch (err) {
    res.status(404).json({
        status:"failed",
        message:"There is no task at that id"


    })
}   
});
app.post("/v1/tasks" ,async (req,res)=>{
   try {
    const data=await tittleModel.create(req.body)
    res.status(201).json({
        data
    })
   } catch (err) {

    res.json({
        status:"failed",
        message:err.message
    })
      
   }
});
app.post("/v1/tasks" ,async (req,res)=>{
    try {
     const data=await tittleModel.createM(req.body)
     res.status(201).json({
         data
     })
    } catch (err) {
 
     res.json({
         status:"failed",
         message:err.message
     })
       
    }
 });
app.delete("/v1/tasks/:id",async (req,res)=>{
    try {
        const data= await tittleModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"sucess",
            message:"Data deleted sucessfully"
        })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err.message
        })
    }  
});
app.put("/v1/tasks/:id",async (req,res)=>{
    try {
        const data= await tittleModel.updateMany({id:req.params.id},req.body)
        res.status(201).json({
            status:"sucess",
            result:data
        })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message: "There is no task at that id"
        })
    }  
});
app.delete("/v1/tasks",async(req,res)=>{

    try {
        const tasks=await tittleModel.deleteMany()
        console.log(tasks);
        res.status(204).json({
            status:"deleted succesfully",
            message:"all data deleted successfully"
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message: err.message
        })
        
    }
  
})


module.exports = app;