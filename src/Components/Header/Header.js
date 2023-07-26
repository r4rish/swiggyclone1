import React from "react";

import { LOGO_LINK } from "../utils/constants";
import logo from "../../tree-736885_1280.jpg"

import "./Header.css"



const Header = () => {
    return(
       <div className="header">
        <div className="logo-container">
        <img className="logo" alt="logo" src={logo}/>
        </div>
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
       </div>
    )
}

export default Header;