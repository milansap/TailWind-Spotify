/* eslint-disable react/prop-types */
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";
import Siderbar from "./pages/sidebar/Siderbar";
import MainContent from "./pages/main-content/MainContent";
function Admin(props) {
  const { children } = props;
  const navigate = useNavigate();

  function lagout() {
    Cookies.remove("token", { path: "/" });
    navigate("/login");
  }
  return (
    <div className="bg-black flex h-[100vh]">
      <Siderbar />
      <MainContent />

      <div className="w-[100%]">{children}</div>
      <button className=" bg-black text-white" onClick={lagout}>
        Sign Out
      </button>
    </div>
  );
}

export default Admin;
