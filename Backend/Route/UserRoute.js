const {Router}=require("express");
const { createUser, logIn } = require("../Methods/UserMethods");

const userRouter=Router();

userRouter.post("/signup",createUser);
userRouter.post("/login",logIn);

module.exports= userRouter;