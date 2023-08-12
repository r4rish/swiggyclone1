import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "./customHooks/onlineStatus";

import RestroList from "../utils/mockData";
import RestaurantCards from "./RestaurantCards/RestaurantCards";
import withPromoted from "./RestaurantCards/RestaurantCardsPromoted";
import ShimmerCard from "./ShimmerCard/ShimmerCard";
import UserContext from "../utils/UserContext";

import "./Body.css";

const Body = () => {
  const [listRestaurant, setlistRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState(listRestaurant);
  const [SearchText, setSearchText] = useState("");

  const { loggedIn, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  const RestaurantCardsPromote = withPromoted(RestaurantCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();
    //console.log(json)
    //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setlistRestaurant(
      json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
    );
  };

  // const testSearch = (text) => {
  //   const filteredsearchRestaurant = listRestaurant.filter((res) => res.info.name.toLowerCase().includes(text.toLowerCase()));
  //   setSearchText(text);
  //   setfilteredRestaurant(filteredsearchRestaurant);
  // }

  if (onlineStatus === false)
    return <h1>You are Offline, Please check your internet</h1>;

  return listRestaurant.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="bodyContainer">
      <div className="flex gap-40 m-5 justify-center">
        <div className="flex">
          {/* <input type="text" placeholder="search" value={SearchText} onChange={(e) => testSearch(e.target.value)}/>  */}
          <input
            className="border-2 border-black"
            type="text"
            placeholder="search"
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-400"
            onClick={() => {
              const filteredsearchRestaurant = listRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setfilteredRestaurant(filteredsearchRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="hover:bg-red-400 border border-gray-950 bg-gray-400"
          onClick={() => {
            const filterrating = listRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            //console.log(listRestaurant)
            setfilteredRestaurant(filterrating);
            //console.log(filterrating)
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label>UseName :</label>
          <input
            className="border border-gray-500"
            value={loggedIn}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center m-5 ">
        {filteredRestaurant.length === 0 ? (
          <h1>No Data</h1>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {" "}
              {restaurant.info.id ? (
                <RestaurantCardsPromote resData={restaurant} />
              ) : (
                <RestaurantCards resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
