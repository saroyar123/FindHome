import { createReducer } from "@reduxjs/toolkit";

export const allProperty=createReducer({
    loading:false,
    response:null
},{
        getAllPropertyRequest:(state)=>{
           state.loading=true
        },
        
        getAllPropertySuccess:(state,action)=>{
           state.loading=false,
           state.response=action.payload;
        },

        getAllPropertyFailure:(state,action)=>{
            state.loading=false,
            state.response=action.payload;
         }
        
})


export const userInfo=createReducer({
   loading:false,
   response:null
},{
   getUserInfoRequest:(state)=>{
      state.loading=true
   },
   
   getUserInfoSuccess:(state,action)=>{
      state.loading=false,
      state.response=action.payload;
   },

   getUserInfoFailure:(state,action)=>{
       state.loading=false,
       state.response=action.payload;
    }
})

