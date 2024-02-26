import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Content from "../Content/Content";
import SignUpForFree from "../../pages/SignUpForFree";

function Layout() {
  return (
    <div className="flex w-[100%] bg-black h-[100vh] overflow-auto flex-col">
      <div className="flex:8  bg-nuetral-700 gap-3 flex w-full h-auto ">
        <div className="flex:2  m-1">
          <Navbar />
        </div>
        <div className="flex:4  m-1 rounded-t-2xl  bg-neutral-900 w-[78%]">
          <div className=" text-white  w-full">
            <Content />
            <div className="h-[77vh] rounded-b-2xl bg-neutral-800 overflow-auto">
              <Outlet />

              <Footer />
            </div>
          </div>
        </div>
      </div>
      <div className="flex:2">
        <SignUpForFree />
      </div>
    </div>
  );
}

export default Layout;
