import { IoIosNotificationsOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { SlSettings } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import GlobalContext from "../../../../GlobalContext";
function UserNav() {
  function themeChange() {}

  const colorContext = useContext(GlobalContext);
  return (
    <div className="flex justify-between  w-full shadow-2xl p-2  bg-slate-600 text-white">
      <div className="flex justify-between items-center  w-[40%]">
        <div>
          <h1 className="text-2xl">Spotify</h1>
        </div>

        <div className="flex items-center gap-2">
          <NavLink>
            <MdOutlineSegment size={"30px"} />
          </NavLink>

          <input
            type="search"
            placeholder="  Search..."
            className="w-[20vw] h-9 bg-slate-500 rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-[30%]">
        <NavLink>
          <IoIosNotificationsOutline size={"30px"} />
        </NavLink>
        <NavLink>
          <TbWorld size={"30px"} />
        </NavLink>
        <NavLink>
          <SlSettings size={"30px"} />
        </NavLink>
        <NavLink>
          <MdDarkMode onClick={themeChange} size={"30px"} />
        </NavLink>
        <div className="flex justify-between gap-1 ">
          <img
            src="./unnamed.jpg"
            width={"50px"}
            height={"50px"}
            className="rounded-full"
            alt=""
          />
          <div className="text-sm">
            <h1>Milan Sapkota</h1>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNav;
