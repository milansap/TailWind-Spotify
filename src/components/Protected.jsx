import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import Admin from "../pages/admin/Admin";
function Protected() {
  const token = Cookies.get("token");

  return token ? (
    <Admin>
      <Outlet />
    </Admin>
  ) : (
    <Navigate to="/login" />
  );
}

export default Protected;
