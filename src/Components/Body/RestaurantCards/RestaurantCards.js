import React, { useState } from "react";

import { CDN_URL, LOGO_LINK } from "../../utils/constants";
import "./RestaurantCards.css";

const RestaurantCards = (props) => {

  //We can pass props this way also
  const { resData } = props;
  const { name,cloudinaryImageId, avgRating, cuisines } = resData.info;

  //console.log(resData.info);

  return (
    <div className="container w-[260px] h-[350px] m-2 p-2 border-2 border-black hover:scale-110">
      <img className="w-[260px] h-[200px]" alt="logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-lg font-bold">{name}</h3>
      <h4>{avgRating}</h4>
      <p className="truncate  w-[200px] whitespace-nowrap overflow-hidden ">{cuisines}</p>
    <div className="buttonContainer text-center mt-3">
       <button className="order__button text-lg bg-black text-white p-1">Order</button>
      
    </div>
    
    </div>
  );
};



export default RestaurantCards;
