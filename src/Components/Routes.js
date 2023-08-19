import { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";
//import About from "./Body/About"
import Body from "./Body/Body";

import Contact from "./Body/Contact";
import Layout from "./Layout";
import Error from "./Error";
import RestaurantMenuCard from "./Body/RestaurantMenuCards/RestaurantMenuCard";
import Cart from "./Cart/Cart";

const About = lazy(() => import("./Body/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>...Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenuCard />,
      },
      {
        path: "/restaurant/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
