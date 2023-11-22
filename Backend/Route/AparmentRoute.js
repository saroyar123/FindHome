const {Router}=require("express");
const { createApartment, allApartment, deleteApartment, updataApartmentInfo, getAllApartmentOfAuthUser } = require("../Methods/ApartmentMethods");
const { auth } = require("../config/auth");

const apartmentRouter=Router();

apartmentRouter.get("/property",auth,getAllApartmentOfAuthUser)
apartmentRouter.post("/property",auth, createApartment)
apartmentRouter.delete("/property/:id",auth,deleteApartment)
apartmentRouter.put("/property/:id",auth,updataApartmentInfo)
apartmentRouter.get("/list-properties",allApartment)

module.exports=apartmentRouter