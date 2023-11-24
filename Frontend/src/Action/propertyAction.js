import axios from "axios"
const token=sessionStorage.getItem("token")

export const getAllPropertyAction=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"getAllPropertyRequest"
        })
        
        // http://localhost:4000
        const {data}=await axios.get("https://ventvilla-backend.onrender.com/api/list-properties");
        dispatch({
            type:"getAllPropertySuccess",
            payload:data
        })

    } catch (error) {
        dispatch({
            type:"getAllPropertyFailure",
            payload:error.response.data
        })
    }
}


export const getUserInfoAction=()=>async(dispatch)=>{
try {
    dispatch({
        type:"getUserInfoRequest"
    })
    
    // http://localhost:4000
    const {data}=await axios.get("https://ventvilla-backend.onrender.com/api/property",{
        headers:{
            'Authorization': `Bearer ${token}`,
        }
    });
    dispatch({
        type:"getUserInfoSuccess",
        payload:data
    })
} catch (error) {
    dispatch({
        type:"getUserInfoFailure",
        payload:error.response.data
    })
}
}