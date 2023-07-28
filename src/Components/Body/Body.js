import React, { useState, useEffect } from "react";

import RestroList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards/RestaurantCards";
import ShimmerCard from "./ShimmerCard/ShimmerCard"

import "./Body.css";

const Body = () => {
  const [listRestaurant, setlistRestaurant] = useState([]);
  const [filteredRestaurant , setfilteredRestaurant] = useState();
  const [SearchText , setSearchText] = useState("");
  

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
     setlistRestaurant(json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants);
     setfilteredRestaurant(json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants);
  };

 

  return listRestaurant.length === 0 ?( <ShimmerCard/>) :  (
   
    <div className="bodyContainer">
      <div className="resButton">
        <div className="searchButton">
          <input type="text" placeholder="search" value={SearchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button onClick={() => {
            const filteredsearchRestaurant = listRestaurant.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
            setfilteredRestaurant(filteredsearchRestaurant);
          }}>Search</button>
        </div>
        <button
          onClick={() => {
            const filterrating = listRestaurant.filter((res) => res.info.avgRating > 4.2);
            //console.log(listRestaurant)
             setfilteredRestaurant(filterrating);
            //console.log(filterrating)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro_container">
        {filteredRestaurant.map((restaurant , index) => (
          <RestaurantCards  resData={restaurant} key={restaurant.info.id}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
