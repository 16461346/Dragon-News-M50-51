import React from "react";
import { NavLink } from "react-router";
import img2 from "../assets/user.png";

const Navbar = () => {
  return (
    <>
      <div className="relative w-11/12 flex items-center justify-between py-3 mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        
        <div className="flex items-center gap-2 ml-auto">
          <img src={img2} alt="" className="w-8 h-8 rounded-full" />
          <NavLink to={"/auth/login"} className="btn bg-gray-500 text-white px-10">
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
