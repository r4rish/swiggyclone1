import React from "react";

import { CDN_URL, LOGO_LINK } from "../../utils/constants";
import "./RestaurantCards.css";

const RestaurantCards = (props) => {
  //We can pass props this way also
  const { resData } = props;
  const { name,cloudinaryImageId, avgRating, cuisines } = resData.info;

  //console.log(resData.info);

  return (
    <div className="w-[260px] m-2 p-2 border-2 border-black hover:scale-110">
      <img className="w-[260px] h-[200px]" alt="logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-lg font-bold">{name}</h3>
      <h4>{avgRating}</h4>
      <p className="truncate w-[200px] whitespace-nowrap overflow-hidden">{cuisines}</p>
    </div>
  );
};
export default RestaurantCards;
