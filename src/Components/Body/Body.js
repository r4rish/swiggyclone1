import React, { useState, useEffect } from "react";

import RestroList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards/RestaurantCards";

import "./Body.css";

const Body = () => {
  const [listRestaurant, setlistRestaurant] = useState([]);

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json)
    //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
     setlistRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };

  return (
    <div className="bodyContainer">
      <div className="resButton">
        <div className="searchButton">
          <input placeholder="search" />
          <button>Search</button>
        </div>
        <button
          onClick={() => {
            const filterrating = listRestaurant.filter((res) => res.rating > 4);
            setlistRestaurant(filterrating);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro_container">
        {listRestaurant.map((restaurant) => (
          <RestaurantCards key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
