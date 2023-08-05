import{ useState , useEffect } from "react";
import { MENU_API } from "../../utils/constants";

const UseRestaurantMenuCards = (resId) => {

    const [resInfo , setresInfo] = useState(null);

    
useEffect(() => {
    fetchMenu();
},[]);

const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    //console.log(json.data.cards[0].card.card.info)
     setresInfo(json.data);
     //console.log(setresInfo)
}

return resInfo;

}



export default UseRestaurantMenuCards;