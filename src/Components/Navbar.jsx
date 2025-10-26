import React, { use } from "react";
import { NavLink } from "react-router";
import img2 from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const{user,logOut}=use(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      alert('Log Out Success')
    })
    .catch((error)=>{
      // console.log(error)
    })
  }
  return (
    <>
      <div className="relative w-11/12 flex items-center justify-between py-3 mx-auto">
      <h2>{user? user.displayName:''}</h2>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <img src={`${ user ?user.photoURL:img2}`} alt="" className="w-8 h-8 rounded-full" />
          {
            user ?  <NavLink onClick={handleLogOut} className="btn bg-gray-800 px-10">
            Log out
          </NavLink>: <NavLink to={"/auth/login"} className="btn bg-gray-400 px-10">
            Login
          </NavLink>
          }
         
        </div>
      </div>
    </>
  );
};

export default Navbar;
