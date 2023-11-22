const User=require("../Model/User");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.createUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=await User.create({name,email,password});

        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.logIn=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password) throw new Error("Plase give valid input")
        const user=await User.findOne({email});
    
        if(!user) throw new Error("User Not found")
    
        const flag=await bcrypt.compare(password,user.password);
        if(!flag) throw new Error("Please Enter Valid Password")
        
        const token=jwt.sign({email:email},process.env.jwtSecrate);
        
        res.status(200).json({
            success:true,
            user,
            token
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}