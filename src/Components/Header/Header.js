import React, { useState } from "react";

import { LOGO_LINK } from "../utils/constants";
//import logo from "../../tree-736885_1280.jpg"

import "./Header.css"



const Header = () => {

const [btnName , setbtnName] = useState("Login")

    return(
       <div className="header">
        <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_LINK}/>
        </div>
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            <button className="loginButton" onClick={() => btnName ==="Login" ? setbtnName("Logout") : setbtnName("Login") }>{btnName}</button>
        </div>
       </div>
    )
}

export default Header;