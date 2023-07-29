import {createBrowserRouter} from "react-router-dom"
import About from "./Body/About"
import Body from "./Body/Body";
import Contact from "./Body/Contact"
import Layout from "./Layout";
import Error from "./Error";
import RestaurantMenuCard from "./Body/RestaurantMenuCards/RestaurantMenuCard";


const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"",
                element: <Body/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenuCard/>
            }
        ],
        errorElement: <Error/>,
    },
    
]);

export default appRouter;