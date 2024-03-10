import { PiSpotifyLogoFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { RiBarChart2Fill } from "react-icons/ri";
import { MdShield } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

function Siderbar() {
  return (
    <div className="w-[10%] h-full bg-neutral-800 text-white">
      <div className="">
        <NavLink to="/" className="flex w-full  items-center  ">
          <PiSpotifyLogoFill
            size={"3.8em"}
            color="white"
            style={{ margin: "0px 10px" }}
          />
        </NavLink>
      </div>
      <div className="flex flex-col justify-center gap-10 items-center ">
        <NavLink to="/admin" className="hover:text-lg  h-8   ">
          <IoMdHome color="white" size={"2em"} />
        </NavLink>
        <NavLink className="hover:text-xl h-8">
          <BsStack color="white" size={"2em"} />
        </NavLink>
        <NavLink className="hover:text-xl h-8">
          <HiUser color="white" size={"2em"} />
        </NavLink>
        <NavLink className="hover:text-xl h-8">
          <RiBarChart2Fill color="white" size={"2em"} />
        </NavLink>
        <NavLink className="hover:text-xl h-8">
          <MdShield color="white" size={"2em"} />
        </NavLink>
        <div className="flex flex-col mt-32 gap-2 justify-start">
          <NavLink to="useradmin">
            <MdAccountCircle color="white" size={"2em"} />
          </NavLink>
          <div>
            <IoSettingsSharp color="white" size={"2em"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Siderbar;
