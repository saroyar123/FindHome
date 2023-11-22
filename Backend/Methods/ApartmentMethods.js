const Apartment = require("../Model/Apartment");

// Create the apartment
exports.createApartment=async (req,res)=>{
    try {
        const {name,area,rent}=req.body;
        const apartment=await Apartment.create({name,area,rent,owner:req.user._id});
        res.status(201).json({
            success:true,
            apartment
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}


// get all details of property
exports.allApartment=async (req,res)=>{
    try {
        const apartment=await Apartment.find({}).populate("owner");
        res.status(200).json({
            success:true,
            apartment
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}


// delete property by id
exports.deleteApartment=async (req,res)=>{
    try {
        const {id}=req.params;
        const apartment=await Apartment.findOne({_id:id})

        if(!apartment) throw new Error("Invalid Data")
    
        if(!apartment.owner.equals(req.user._id)) throw new Error("Unotharized request")
        
        if(!(await Apartment.deleteOne({_id:id}))) throw new Error("Something is wrong")

        res.status(202).json({
            success:true,
            message:"Apartment data deleted"
        })


    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}


// update property by id

exports.updataApartmentInfo=async (req,res)=>{
    try {
        const {id}=req.params;
        const {name,area,rent,address,bhktype,details}=req.body;

        const apartment=await Apartment.findOne({_id:id});
        
        if(!apartment) throw new Error("Invalid data")
        
        if(!apartment.owner.equals(req.user._id)) throw new Error("Unotharized request")

        const update={
            $set:{
                name:name!=undefined?name:apartment.name,
                area:area!=undefined?area:apartment.area,
                rent:rent!=undefined?rent:apartment.rent,
                address:address!=undefined?address:apartment.address,
                bhktype:bhktype!=undefined?bhktype:apartment.bhktype,   
                details:details!=undefined?details:apartment.details,
                }
        }

        const result=await Apartment.updateOne({_id:id},update);

        if(result.modifiedCount!==1) throw new Error("Data not found for update")

        res.status(200).json({
            success:true,
            message:"update the doc"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}

// get all property fo a autharized user
exports.getAllApartmentOfAuthUser=async(req,res)=>{
 try {
    const apartments=await Apartment.find({owner:req.user._id});
    res.status(200).json({
        success:true,
        apartments
    })
 } catch (error) {
    res.status(400).json({
        success:false,
        error:error.message
    })
 }
}