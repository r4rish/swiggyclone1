import React, { useContext, useEffect, useState } from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import UserContext from './utils/UserContext'

const Layout = () => {

  const [userName , setUserName] = useState();
  const {loggedIn} = useContext(UserContext);

  useEffect(() => {
    const data = {
name: "Rishabh Sinha"
    }
    setUserName(data.name);
  },[])

  return (
    <div>
     
     
      <UserContext.Provider value={{loggedIn : "Amit"}}>
      <Header/>
    </UserContext.Provider>
  
      <UserContext.Provider value={{loggedIn : userName , setUserName}}>
    <Outlet/>
    </UserContext.Provider>
    
    
    <Footer/>
    </div>
  )
}

export default Layout
