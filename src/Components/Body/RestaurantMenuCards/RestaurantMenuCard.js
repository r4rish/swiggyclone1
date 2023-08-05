import React, { useEffect, useState } from "react";

//import { MENU_API } from '../../utils/constants';
import { useParams } from "react-router-dom";
import ShimmerCard from "../ShimmerCard/ShimmerCard";
import UseRestaurantMenuCards from "../customHooks/RestaurantMenuCards";
import "./RestaurantMenuCard.css";

const RestaurantMenuCard = () => {
  // const [resInfo , setresInfo] = useState(null);
  //console.log(resInfo);

  const { resID } = useParams();
  //Custom Hooks
  const resInfo = UseRestaurantMenuCards(resID);
  // console.log(resID)
  //WithOut Custom Hooks
  // useEffect(() => {
  //     fetchMenu();
  // },[]);

  // const fetchMenu = async () => {
  //     const data = await fetch(MENU_API + resId);

  //     const json = await data.json();
  //     //console.log(json.data.cards[0].card.card.info)
  //      setresInfo(json.data);
  //      //console.log(setresInfo)
  // }
  //

  if (resInfo === null) return <ShimmerCard />;
  const { name } = resInfo.cards[0].card.card.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  //console.log(itemCards);
  return (
    <div className="menu">
      {/* <h1>{resInfo.cards[0]?.card.card.info.name}</h1> */}
      <h1>{name}</h1>
      <h2>
        {resInfo.cards[0]?.card.card.info.cuisines.join(", ")} - Rs{" "}
        {resInfo.cards[0]?.card.card.info.costForTwo / 100}
      </h2>
      {/*  <h1>{name}</h1> */}
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - RS {item.card.info.price}
          </li>
        ))}
        {/* <li>name</li>
        <li>Biryani</li>
        <li>Burger</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenuCard;
