import { Outlet } from "react-router-dom";
import UserNav from "./navbar/UserNav";
import SideBar from "./sidebar/SideBar";

function UserAdmin() {
  return (
    <div className="w-full fixed">
      <UserNav />
      <div className="flex">
        <SideBar />
        <div className="bg-slate-900 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserAdmin;
