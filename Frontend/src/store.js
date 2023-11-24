import { configureStore } from "@reduxjs/toolkit";
import { allProperty, userInfo } from "./Reducer/property";

const store=configureStore({
    reducer:{
        allProperty:allProperty,
        userInfo:userInfo
    }
})

export default store;