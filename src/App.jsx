
import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import Cart from './components/Cart';


const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },

      {
        path :'/cart',
        element:<Cart/>
      }


    ]
  },
  
])
const App=()=>{
  return <RouterProvider router={appRouter}/>
}
export default App
