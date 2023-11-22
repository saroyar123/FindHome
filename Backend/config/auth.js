const jwt= require("jsonwebtoken");
const User = require("../Model/User");

exports.auth=async (req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        if(!token) throw new Error("Token not found");

        const {email}=jwt.verify(token,process.env.jwtSecrate);

        const user=await User.findOne({email:email});
        if(!user) throw new Error("User not exist");

        req.user=user;
        next();


    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}