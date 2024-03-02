/* eslint-disable react/prop-types */
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { NavLink, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

function Content() {
  const location = useLocation();

  return (
    <>
      <div className="w-[100%]  overflow-auto  rounded-t-2xl mt-1  bg-neutral-900 text-white">
        <nav className=" flex justify-between ">
          <div className=" flex ">
            <div className="flex gap-2 p-4 hover:cursor-not-allowed">
              <MdKeyboardArrowLeft
                color="Whitesmoke "
                style={{ borderRadius: 100, backgroundColor: "black" }}
                size={"35px"}
              />

              <MdKeyboardArrowRight
                color="whitesmoke"
                style={{ borderRadius: 100, backgroundColor: "black" }}
                size={"35px"}
              />
            </div>

            {location.pathname === "/search" && (
              <div className="pt-3  flex   ">
                <IoSearch className=" ml-2 flex justify-center     " />
                <input
                  className="w-96 h-12   bg-neutral-800  rounded-full"
                  type="text"
                  placeholder="         What do you want to play?"
                />
              </div>
            )}
          </div>
          <div className=" flex  p-4">
            <NavLink to="signup" className="mr-10 mt-3">
              Sign Up
            </NavLink>
            <NavLink
              to="login"
              className=" ml-3 px-5 py-3 rounded-3xl bg-white text-black"
            >
              Log in
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Content;
