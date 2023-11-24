import axios from 'axios'
import React, { useState } from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'


const SignUp = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isSignup,setIsSignUp]=useState(false)
    const signUpHandler= async(e)=>{
        e.preventDefault();
        // http://localhost:4000
        const {data}=await axios.post("https://ventvilla-backend.onrender.com/api/signup",{name,email,password})
        setIsSignUp(true)
    }
  return (
    <div className='signup'>
        {
            isSignup?<>
            <div className='login_now'>
                <h1>Please login now</h1>
                <Link to={"/login"}>Login</Link>
            </div>
            </>:<>
            <form onSubmit={signUpHandler} className='signUpForm'>
            <input placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>SighUp</button>
        </form>
            </>
        }

    </div>
  )
}

export default SignUp