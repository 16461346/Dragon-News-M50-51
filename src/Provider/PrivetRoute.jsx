import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loadding from "../Components/Loadding";

const PrivetRoute = ({ children }) => {
  const { user,loading } = use(AuthContext);
  const location= useLocation()
  // console.log(location)

  if(loading){
    return <Loadding></Loadding>

  }
  if (user && user?.email) {
    return children;
  }
  else{
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
  }
};

export default PrivetRoute;
