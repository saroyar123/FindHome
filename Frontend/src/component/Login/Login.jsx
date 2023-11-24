import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const loginHandler = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("http://localhost:4000/api/login", { email, password });
        setIsLogin(true)
        sessionStorage.setItem("token",data.token)
    }
    return (
        <div className='login'>
            {
                isLogin ? <div className='goto_Home'>
                    <Link to={"/"}>Home</Link>
                </div> : <>
                    <form onSubmit={loginHandler} className='login_Form'>
                        <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>Login</button>
                    </form>
                </>
            }

        </div>
    )
}

export default Login