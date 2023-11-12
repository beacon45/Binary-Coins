import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className=" w-[90%] sm:w-[40%] mt-28 sm:mt-24 flex justify-around align-middle
      border border-yellow-300 rounded-lg
    "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-abc m-2.5

${isActive
              ?" bg-yellow-300 text-gray-100hover:text-cyan active:bg-cyan active:text-black"
              : " bg-[#706d64] text-white" 
            }
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center font-abc m-2.5

${isActive
              ? " bg-yellow-300 text-gray-100hover:text-cyan active:bg-cyan active:text-black"
              : " bg-[#706d64] text-white"
            }
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Trending
      </NavLink>

      <NavLink
        to="/About"
        className={({ isActive }) => {
          return `w-full text-base text-center font-abc m-2.5

${isActive
              ? " bg-yellow-300 text-gray-100hover:text-cyan active:bg-cyan active:text-black"
              : " bg-[#706d64] text-white"
            }
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;