import { configureStore } from "@reduxjs/toolkit";
import { allProperty } from "./Reducer/property";

const store=configureStore({
    reducer:{
        allProperty:allProperty
    }
})

export default store;