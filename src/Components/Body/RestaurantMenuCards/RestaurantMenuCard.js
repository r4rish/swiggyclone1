import React, { useEffect, useState } from "react";

//import { MENU_API } from '../../utils/constants';
import { useParams } from "react-router-dom";
import ShimmerCard from "../ShimmerCard/ShimmerCard";
import UseRestaurantMenuCards from "../customHooks/RestaurantMenuCards";
import "./RestaurantMenuCard.css";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenuCard = () => {
  // const [resInfo , setresInfo] = useState(null);
  //console.log(resInfo);
  const [showIndex, setShowIndex] = useState(false);

  const { resID } = useParams();
  //Custom Hooks
  const resInfo = UseRestaurantMenuCards(resID);
  //console.log(resInfo)
   //console.log(resID)
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
  //const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  //console.log(itemCards);
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
 //console.log(categories);
  return (
    <div className="text-center">
      {/* <h1>{resInfo.cards[0]?.card.card.info.name}</h1> */}
      <h1 className="font-bold text-lg my-6">{name}</h1>
      <h2 className="font-bold text-sm">
        {resInfo.cards[0]?.card.card.info.cuisines.join(", ")} - Rs{" "}
        {resInfo.cards[0]?.card.card.info.costForTwo / 100}
      </h2>
      {categories.map((category, index) => (
        <RestaurantCategory
        key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
        //<RestaurantCategory data={category.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenuCard;
