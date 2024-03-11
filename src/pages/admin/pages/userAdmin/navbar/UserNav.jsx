import { IoIosNotificationsOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { SlSettings } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import GlobalContext from "../../../../GlobalContext";
function UserNav() {
  const { theme, setTheme } = useContext(GlobalContext);
  const { background, color } = theme;

  function themeChange(e) {
    const value = e.target.value;
    console.log(e.target.value);
    if (value === "theme1") {
      setTheme({ background: "green", color: "red" });
    } else if (value === "theme2") {
      setTheme({ background: "blue", color: "white" });
    } else if (value === "theme3")
      setTheme({ background: "black", color: "white" });
    else {
      setTheme({
        background: "#0F172A",
        color: "white",
      });
    }
  }
  return (
    <div
      style={{ backgroundColor: background, color: color }}
      className="flex justify-between  w-full shadow-2xl p-2  bg-slate-600 text-white"
    >
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
          <MdDarkMode size={"30px"} />
          <label style={{ backgroundColor: background, color: color }}>
            <select onChange={themeChange}>
              <option value=""></option>
              <option value="theme1">theme1</option>
              <option value="theme2">theme2</option>
              <option value="theme3">theme3</option>
            </select>
          </label>
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
