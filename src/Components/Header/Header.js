import React, { useContext, useState } from "react";

import { LOGO_LINK } from "../utils/constants";
import { FcDisapprove, FcApprove } from "react-icons/fc";
//import logo from "../../tree-736885_1280.jpg"

import "./Header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Body/customHooks/onlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const {loggedIn} = useContext(UserContext);


  //redux
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)


  return (
    <div className=" flex justify-between bg-green-400 shadow-lg px-[20px]">
      <div className="flex items-center">
        <img className="w-[150px] h-[100px]" alt="logo" src={LOGO_LINK} />
      </div>
      <div className="navItems">
        <ul className="flex m-4 p-4 items-center">
          <li className="flex items-center p-2 m-2">
            Order {onlineStatus ? <FcApprove /> : <FcDisapprove />}
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 m-2 font-bold text-lg"><Link to="/restaurant/cart">Cart ({cartItems.length} items)</Link></li>
          <button
            className="p-2 m-2"
            onClick={() =>
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="p-2 m-2">{loggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
