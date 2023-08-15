import React from 'react';
import { RouterProvider } from 'react-router-dom';
import appRouter from './Components/Routes';
import {QueryClientProvider , QueryClient} from "react-query"

import './App.css';
//Test

function App() {

 // const queryClient = new QueryClient()

  return (
    <div className="App">
  
   {/* <QueryClientProvider client={queryClient}>
   <RouterProvider router={appRouter}/>
   </QueryClientProvider> */}
    <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
