import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const
    Navbar = () => {
        const [isToken, setIsToken] = useState(null)
        useEffect(() => {
            const token = sessionStorage.getItem("token");
            setIsToken(token)
        }, [isToken])
        return (
            <div className='navbar'>
                <div className='left'>
                    <h2>VentVilla</h2>
                    <Link to={"/"} >Home</Link>
                </div>
                <div className='right'>
                    {
                        isToken == null ?
                            <>
                                <Link to={"/login"}>LogIn</Link>
                                <Link to={"/signup"}>SignUp</Link>

                            </> :
                            <>
                                <Link>Account</Link>
                            </>
                    }

                </div>
            </div>
        )
    }

export default Navbar