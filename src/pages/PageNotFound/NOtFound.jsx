import { FaRegCopyright } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function NOtFound() {
  return (
    <div className="bg-[url(./hills-615429_1280.jpg)]  bg-cover bg-center h-screen flex  flex-col items-center  text-3xl  text-white">
      <div className="m-3">FOG ERROR</div>
      <div className="text-white mt-20 text-opacity-65 text-9xl">404</div>
      <h2 className="mt-10 text-4xl">page not found </h2>
      <h6>I tried to catch Some fog,but I missed it </h6>
      <NavLink
        to=""
        className="w-32 mt-10 h-8 text-center  pt-1 bg-slate-400 border rounded-xl text-base  bg-transparent"
      >
        Back to Home
      </NavLink>
      <div className="flex mt-auto text-base items-center gap-2">
        <FaRegCopyright />
        2024 fog error.All rights reserved | Design by{" "}
        <NavLink>Milan Sapkota</NavLink>
      </div>
    </div>
  );
}

export default NOtFound;
