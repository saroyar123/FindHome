import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navber/Navbar'
import Search from './component/Search/Search'
import { useDispatch } from 'react-redux'
import { getAllPropertyAction } from './Action/propertyAction'
import Home from './component/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './component/SignUp/SignUp'
import Login from './component/Login/Login'
import Account from './component/Account/Account'

function App() {
  const [isToken, setIsToken] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPropertyAction());
    const token = sessionStorage.getItem("token");
    setIsToken(token)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {
          isToken == null ?
            <>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </>:
            <>
            <Route path='/account' element={<Account/>}/>
            </>
        }
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
