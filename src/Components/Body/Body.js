import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "./customHooks/onlineStatus";

import RestroList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards/RestaurantCards";
import ShimmerCard from "./ShimmerCard/ShimmerCard"

import "./Body.css";


const Body = () => {
  const [listRestaurant, setlistRestaurant] = useState([]);
  const [filteredRestaurant , setfilteredRestaurant] = useState();
  const [SearchText , setSearchText] = useState("");

  const onlineStatus = useOnlineStatus()
  

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();
    //console.log(json)
    //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
     setlistRestaurant(json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants);
     setfilteredRestaurant(json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants);
  };

 if(onlineStatus === false) return <h1>You are Offline, Please check your internet</h1>

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
        <button className="topSearch"
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
        
        {
       
        filteredRestaurant.map((restaurant , index) => (
          
         <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> <RestaurantCards  resData={restaurant} /></Link>
        ))
    
      }
      </div>
    </div>
  );
};

export default Body;
