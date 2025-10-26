import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Catagory from "../Pages/Catagory";
import CategoryNews from "../Components/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loadding from "../Components/Loadding";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/catagory/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement:<Loadding/>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
    loader:()=>fetch('/news.json'),
    hydrateFallbackElement:<Loadding/>
  },
]);
