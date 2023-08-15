import {useQuery} from "react-query";
import axios from "axios";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = (resID) => {
    console.log("hello" + resID)
    return axios.get(MENU_API + resID)
}

export const useMenuCard = (resID) => { 
 //   console.log(resID)
    return useQuery("Restaurant-card" , () => RestaurantMenu(

        
    ))
}

