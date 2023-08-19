import React from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Components/Routes";
import appStore from "./Components/utils/AppStore";
import { QueryClientProvider, QueryClient } from "react-query";

import "./App.css";
import { Provider } from "react-redux";
//Test

function App() {
  // const queryClient = new QueryClient()

  return (
    <div className="App">
      {/* <QueryClientProvider client={queryClient}>
   <RouterProvider router={appRouter}/>
   </QueryClientProvider> */}
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
