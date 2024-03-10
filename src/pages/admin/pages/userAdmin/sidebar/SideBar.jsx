import { AiOutlineDashboard } from "react-icons/ai";
import { GrAnalytics } from "react-icons/gr";
import { IoAnalyticsSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { BsChatDots } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { LuLightbulb } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className="w-[20%] h-[90vh] overflow-auto bg-slate-700 text-slate-400">
      <div className=" p-3">
        <h1 className="text-slate-400">DASHBOARD</h1>
        <div className="mr-16 flex flex-col items-start ml-2  justify-between">
          <NavLink
            to=""
            className="flex hover:text-white gap-3 justify-center  mt-5 items-center"
          >
            <AiOutlineDashboard size={"20px"} />
            <h2>Default</h2>
          </NavLink>
          <NavLink
            to="analytic"
            className="flex hover:text-white  justify-center gap-3 mt-5  items-center"
          >
            <GrAnalytics size={"20px"} />
            <h2>Analytic</h2>
          </NavLink>
          <NavLink
            to="sales"
            className="flex  hover:text-white justify-center mt-5  gap-3  items-center"
          >
            <IoAnalyticsSharp size={"20px"} />
            <h2>Sales</h2>
          </NavLink>
        </div>
      </div>
      <div className=" p-3">
        <h1 className="text-slate-400">APPS </h1>
        <div className="mr-16 flex flex-col items-start ml-2  justify-between">
          <NavLink className="flex gap-3 hover:text-white   justify-center  mt-4 items-center">
            <CiMail size={"20px"} />
            <h2>Mail</h2>
          </NavLink>
          <NavLink className="flex justify-center hover:text-white   gap-3 mt-5  items-center">
            <BsChatDots size={"20px"} />
            <h2>Chat</h2>
          </NavLink>
          <NavLink className="flex justify-center hover:text-white  mt-5  gap-3  items-center">
            <SlCalender size={"20px"} />
            <h2>Calender</h2>
          </NavLink>
          <NavLink className="flex justify-center hover:text-white  mt-5  gap-3  items-center">
            <LuLightbulb size={"20px"} />
            <h2>Project</h2>
          </NavLink>
          <NavLink className="flex justify-center hover:text-white  mt-5  gap-3  items-center">
            <MdOutlineShoppingCart size={"20px"} />
            <h2>E-Commerce</h2>
          </NavLink>
        </div>
      </div>
      <div className=" p-3">
        <h1 className="text-slate-400">COMPONENTS </h1>
        <div className="mr-16 flex flex-col items-start ml-2  justify-between">
          <NavLink className="flex gap-3 hover:text-white  justify-center  mt-4 items-center">
            <AiOutlineDashboard size={"20px"} />
            <h2>General</h2>
          </NavLink>
          <NavLink className="flex justify-center hover:text-white  gap-3 mt-5  items-center">
            <GrAnalytics size={"20px"} />
            <h2>Layout</h2>
          </NavLink>
          <NavLink className="flex justify-center mt-5  hover:text-white  gap-3  items-center">
            <IoAnalyticsSharp size={"20px"} />
            <h2>Navigation</h2>
          </NavLink>
          <NavLink className="flex justify-center mt-5 hover:text-white   gap-3  items-center">
            <IoAnalyticsSharp size={"20px"} />
            <h2>Data Entry</h2>
          </NavLink>
          <NavLink className="flex justify-center mt-5 hover:text-white  gap-3  items-center">
            <IoAnalyticsSharp size={"20px"} />
            <h2>Data Display</h2>
          </NavLink>
          <NavLink className="flex justify-center mt-5 hover:text-white  gap-3  items-center">
            <IoAnalyticsSharp size={"20px"} />
            <h2>Feedback</h2>
          </NavLink>
          <NavLink className="flex justify-center mt-5 hover:text-white  gap-3  items-center">
            <IoAnalyticsSharp size={"20px"} />
            <h2> Other</h2>
          </NavLink>
          <NavLink className="flex justify-center mt-5 hover:text-white  gap-3  items-center">
            <IoAnalyticsSharp size={"20px"} />
            <h2>Charts</h2>
          </NavLink>
          <NavLink className="flex justify-center mt-5 hover:text-white   gap-3  items-center">
            <IoAnalyticsSharp size={"20px"} />
            <h2>Maps</h2>
          </NavLink>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default SideBar;
