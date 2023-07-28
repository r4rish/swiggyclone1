import React from "react";

import { CDN_URL, LOGO_LINK } from "../../utils/constants";
import "./RestaurantCards.css";

const RestaurantCards = (props) => {
  //We can pass props this way also
  const { resData } = props;
  const { name,cloudinaryImageId, avgRating, cuisines } = resData.info;

  //console.log(resData.info);

  return (
    <div className="restroCards">
      <img className="restrologo" alt="logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <p>{cuisines}</p>
    </div>
  );
};
export default RestaurantCards;
