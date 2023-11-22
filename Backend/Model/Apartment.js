const { default: mongoose } = require("mongoose");

const apartment=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    area:{
        type:String,

    },
    rent:{
        type:Number
    },
    address:{
        type:String
    },
    bhkType:{
        type:String
    },
    details:{
        noOfBeds:String,
        noOfBathrooms:String
    },
    owner:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    rentedTo:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    }

})

module.exports=mongoose.model("apartment",apartment)