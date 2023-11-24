import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfoAction } from '../../Action/propertyAction';
import Navbar from '../Navber/Navbar';
import Property from '../Property/Property';
import "./Account.css"
import {useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate=useNavigate()
  const { loading, response } = useSelector((state) => state.userInfo);
  const logoutHandler=()=>{
    sessionStorage.removeItem("token");
     navigate('/')
  }
  return (
    <div>
      <Navbar />
      {
        loading == true || response == null ? <h1>Loading</h1> :
          <>
            <div className='main_box'>
              <div className='user_Info'>              
                <h1>Welcome {response.response.data.user.name}</h1>
                <button onClick={logoutHandler}>Logout</button>
                </div>

              <h2>Your Properties On Sell</h2>
              <div className='Property_Box'>

                {
                  response.response.data.apartments.map((value, index) => (
                    <Property key={index} value={value} />
                  ))
                }
              </div>

            </div>
          </>

      }
    </div>
  )
}

export default Account