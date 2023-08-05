import React, { useState } from "react";

import { LOGO_LINK } from "../utils/constants";
import { FcDisapprove , FcApprove} from "react-icons/fc";
//import logo from "../../tree-736885_1280.jpg"

import "./Header.css"
import { Link } from "react-router-dom";
import useOnlineStatus from "../Body/customHooks/onlineStatus";



const Header = () => {

const [btnName , setbtnName] = useState("Login");

const onlineStatus = useOnlineStatus();


    return(
       <div className="header">
        <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_LINK}/>
        </div>
        <div className="navItems">
            <ul>
           <li>Order {onlineStatus ?<FcApprove /> : <FcDisapprove />}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
            <button className="loginButton" onClick={() => btnName ==="Login" ? setbtnName("Logout") : setbtnName("Login") }>{btnName}</button>
        </div>
       </div>
    )
}

export default Header;