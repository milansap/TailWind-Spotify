import { HiUser } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { IoEllipsisVerticalCircleOutline } from "react-icons/io5";
function MainContent() {
  return (
    <div className="w-[28%] p-2 text-white h-full bg-neutral-900">
      <input
        placeholder="  Search"
        type="search"
        className="w-full bg-neutral-500 h-7 rounded-lg"
      />
      <div className="mt-4 flex ">
        <div className="h-auto m-1 w-1/3 rounded-md p-2 bg-neutral-600">
          <HiUser size={"2em"} color="#AD88C6" />
          <h2 className="text-[12px]">Users</h2>
          <h4 className="text-[12px]">30K</h4>
        </div>
        <div className="h-auto m-1 w-1/3 rounded-md p-2 bg-neutral-600">
          <FaStar size={"2em"} color="#AD88C6" />
          <h2 className="text-[12px]">favourites</h2>
          <h4 className="text-[12px]">130.40K</h4>
        </div>

        <div className="h-auto m-1 w-1/3 rounded-md p-2 bg-neutral-600">
          <TbActivityHeartbeat size={"2em"} color="#AD88C6" />
          <h2 className="text-[12px]">Server Up-Time</h2>
          <h4 className="text-[12px]">20h 31m</h4>
        </div>
      </div>
      <div className="mt-5 mx-2">
        <h2 className="text-slate-400">ADMINISTRATORS</h2>
        <div>
          <div className=" p-2 flex justify-between">
            <div className="flex items-center justify-between gap-3">
              <FaUserCircle size={"30px"} />
              <h1>
                Admin 1<p className="text-xs">owner</p>
              </h1>
            </div>
            <IoEllipsisVerticalCircleOutline size={"30px"} />
          </div>
          <div className="flex p-2 justify-between">
            <div className="flex items-center justify-between gap-3">
              <FaUserCircle size={"30px"} bg- />
              <h1>
                Admin 2<p className="text-xs">Head Administrator</p>
              </h1>
            </div>
            <IoEllipsisVerticalCircleOutline size={"30px"} />
          </div>
          <div className="flex p-2 justify-between">
            <div className="flex items-center justify-between gap-3">
              <FaUserCircle size={"30px"} />
              <h1>
                Admin 1<p className="text-xs">Moderator</p>
              </h1>
            </div>
            <IoEllipsisVerticalCircleOutline size={"30px"} />
          </div>
          <div className="flex p-2 justify-between">
            <div className="flex items-center justify-between gap-3">
              <FaUserCircle size={"30px"} />
              <h1>
                Admin 1<p className="text-xs">Administrator</p>
              </h1>
            </div>
            <IoEllipsisVerticalCircleOutline size={"30px"} />
          </div>
          <div className="flex p-2 justify-between">
            <div className="flex items-center justify-between gap-3">
              <FaUserCircle size={"30px"} />
              <h1>
                Admin 1<p className="text-xs">Helper</p>
              </h1>
            </div>
            <IoEllipsisVerticalCircleOutline size={"30px"} />
          </div>
        </div>
        <div className="mt-4">
          <h1>MESSAGES</h1>
          <textarea
            className="bg-neutral-800 text-slate-400 rounded-xl"
            id=""
            cols="30"
            rows="6 "
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
