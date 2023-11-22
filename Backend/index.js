const express=require("express")
const dotenv=require("dotenv");
const dbConnect = require("./config/dbCon");
const userRouter = require("./Route/UserRoute");
const apartmentRouter = require("./Route/AparmentRoute");
dotenv.config();
const app=express();
dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
   res.status(200).json({
    success:true,
    message:"Server is runing"
   })
})
app.use("/api",userRouter)
app.use("/api",apartmentRouter)
app.listen(4000,()=>{
    console.log("server is runnig")
})