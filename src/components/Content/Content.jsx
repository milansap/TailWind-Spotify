/* eslint-disable react/prop-types */
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

import SignUpForFree from "../../pages/SignUpForFree";
import Navbar from "../Navbar";

function Content() {
  return (
    <>
      <div className=" flex flex-col p-2 w-full gap-2 h-screen bg-black">
        <div className="flex gap-3 ">
          <Navbar />
          <div className="w-4/5  overflow-auto  rounded-2xl mt-1  bg-neutral-900 text-white">
            <nav className=" flex justify-between ">
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
              {/* <div className="">
                {}
                {props.stateFromParent && (
                  <input
                    type="text"
                    placeholder="Search for easy dinners,fashion,etc."
                    name="search"
                  ></input>
                )}
                {!props.stateFromParent && <h1>11</h1>}
              </div> */}
              <div className=" flex  p-4">
                <button className="mr-10">Sign Up</button>
                <button className=" ml-3 px-5 py-3 rounded-3xl bg-white text-black">
                  Log in
                </button>
              </div>
            </nav>
            <Outlet />
            <Footer />
          </div>
        </div>
        <SignUpForFree />
      </div>
    </>
  );
}

export default Content;
