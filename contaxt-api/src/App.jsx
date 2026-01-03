import React from 'react'
import UserContext from './context/Usercontext'
import Usercontextprovider from './context/Usercontextprovider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
   < Usercontextprovider>
   <h1>Razz is here </h1>
   <Login />
   <Profile />
   </Usercontextprovider>
  )
}

export default App
