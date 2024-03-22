import { Outlet, useNavigate } from "react-router-dom";
import UserNav from "./navbar/UserNav";
import SideBar from "./sidebar/SideBar";
import { useContext } from "react";
import GlobalContext from "../../../GlobalContext";
import Cookies from "js-cookie";

function UserAdmin() {
  const navigate = useNavigate("");
  const { theme } = useContext(GlobalContext);
  const { background, color } = theme;

  function logout() {
    Cookies.remove("token", { path: "/" });
    navigate("/LoginCookie");
  }
  return (
    <div
      style={{ backgroundColor: background, color: color }}
      className=" w-auto "
    >
      <UserNav />
      <div className="flex w-[100%] ">
        <SideBar />
        <div className=" ">
          <Outlet />
        </div>
      </div>
      <div>
        <button className="w-[20%]" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default UserAdmin;
