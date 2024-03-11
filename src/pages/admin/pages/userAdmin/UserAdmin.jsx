import { Outlet } from "react-router-dom";
import UserNav from "./navbar/UserNav";
import SideBar from "./sidebar/SideBar";
import { useContext } from "react";
import GlobalContext from "../../../GlobalContext";

function UserAdmin() {
  const { theme } = useContext(GlobalContext);
  const { background, color } = theme;
  return (
    <div
      style={{ backgroundColor: background, color: color }}
      className="w-full fixed"
    >
      <UserNav />
      <div className="flex">
        <SideBar />
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserAdmin;
