import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Catagory from "../Pages/Catagory";
import CategoryNews from "../Components/CategoryNews";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/career',
                element:<Career/>
            },
            {
                path:'/catagory/:id',
                element:<CategoryNews/>,
                loader:()=>fetch('/news.json'),
            }
        ]
    }
])