import axios from "axios"

export const getAllPropertyAction=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"getAllPropertyRequest"
        })
        
        const {data}=await axios.get("http://localhost:4000/api/list-properties");
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