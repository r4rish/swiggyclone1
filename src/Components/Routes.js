import {createBrowserRouter , RouterProvider} from "react-router-dom"
import About from "./Body/About"
import Body from "./Body/Body";
import Contact from "./Body/Contact"
import Layout from "./Layout";


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
            }
        ]
    },
    
]);

export default appRouter;