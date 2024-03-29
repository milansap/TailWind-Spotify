/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { IoLibrarySharp } from "react-icons/io5";
import { PiSpotifyLogoFill } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import Content from "./Content/Content";

function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <div className="flex w-[20vw]  flex-col">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-full h-1/4  p-2 mt-1 flex flex-col bg-neutral-900 rounded-md  border-none ">
            <NavLink className="flex items-center ">
              <PiSpotifyLogoFill
                size={"1.8em"}
                color="white"
                style={{ margin: "0px 10px" }}
              />
              <h2 className="text-white  text-base font-bold">Spotify</h2>
            </NavLink>
            <NavLink to="" className="flex items-center p-1 ">
              <GoHomeFill
                size={"2em"}
                color="white"
                style={{ margin: "10px 10px" }}
              />
              <NavLink
                to=""
                onClick={() => {
                  // setSearch(false);
                }}
                className="text-white 
              font-bold text-sm"
              >
                Home
              </NavLink>
            </NavLink>
            <NavLink to="/search" className="flex items-center p-1">
              <FiSearch
                size={"2em"}
                color="white"
                style={{ margin: "10px 10px" }}
              />
              <NavLink
                to="/search"
                onClick={() => {
                  // setSearch(true);
                }}
                className="text-slate-300 hover:text-white font-bold text-sm"
              >
                Search
              </NavLink>
            </NavLink>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-full h-1\4 p-4  mt-2 flex flex-col bg-neutral-900 rounded-md border-none   ">
            <div className="flex justify-between  ">
              <NavLink className="flex  text-slate-300 hover:text-white ">
                <IoLibrarySharp size={"1.5em"} />
                &nbsp;
                <h2 className="text-base hover:visible ">&nbsp;Your Library</h2>
              </NavLink>
              <NavLink className="text-slate-300  hover:text-white">
                <FiPlus size={"1.5em"} />
              </NavLink>
            </div>
            <div className="max-h-52 w-full overflow-auto">
              <div className="p-4  mt-4 h-full font-bold text-base w-full rounded-t-xl m-2 text-white bg-neutral-800">
                <h3>Create Your first Playists</h3>
                <p>It's easy,We'll help you</p>
                <NavLink
                  to="createlist"
                  className="w-32 font-bold h-12 mt-14 rounded-full shadow-gray-300 text-black text-sm bg-white "
                >
                  Create playlist
                </NavLink>
              </div>
              <div className="p-5 mt-4 h-full  font-bold text-base w-full rounded-t-xl m-2 text-white bg-neutral-800">
                <h3>Create Your first Playists</h3>
                <p>It's easy,We'll help you</p>
                <NavLink
                  to="CreateList2"
                  className="w-32 font-bold h-9 mt-14 rounded-full shadow-gray-300 text-black text-sm bg-white "
                >
                  Create playlist
                </NavLink>
              </div>
            </div>
            <div className="flex text-xs p-2 text-white justify-between">
              <NavLink>Legal</NavLink>
              <NavLink>Privacy Center</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
            <div className="flex text-xs  p-2 text-white justify-between">
              <NavLink>Cookies</NavLink>
              <NavLink>About Ads</NavLink>
              <NavLink>Accessibility</NavLink>
            </div>
            <div className="flex text-xs  p-2 text-white">
              <NavLink>Cookies</NavLink>
            </div>

            <button className=" hover:transition-transform rounded-2xl p-1 px-2 mt-5 border-gray-400 text-white flex text-center border   text-sm max-w-24">
              <RiGlobalLine size={"20px"} style={{ alignItems: "center" }} />
              <p>English</p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
