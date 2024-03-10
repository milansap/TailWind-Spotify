import { IoMdArrowDown } from "react-icons/io";
function Default() {
  return (
    <div>
      <div className="w-[100%] m-5  text-white">
        <div className="w-[25%] flex">
          <div className=" m-5 p-3  rounded-2xl h-auto bg-slate-500">
            <h2>Revenue</h2>
            <div className="flex items-center p-3 justify-start ">
              <p className="text-3xl font-bold  text-slate-300">$2,454</p>
              <div className="flex p-3 gap-3 items-center  text-red-600">
                <p className="text-xl">-11.4</p>
                <IoMdArrowDown />
              </div>
            </div>
            <p>Compare to last year(2019)</p>
          </div>
          <div className=" m-5 p-3   rounded-2xl h-auto bg-slate-500">
            <h2>Revenue</h2>
            <div className="flex items-center p-3 justify-start ">
              <p className="text-3xl font-bold  text-slate-300">$2,454</p>
              <div className="flex p-3 gap-3 items-center  text-red-600">
                <p className="text-xl">-11.4</p>
                <IoMdArrowDown />
              </div>
            </div>
            <p>Compare to last year(2019)</p>
          </div>
          <div className=" m-5 p-3  rounded-2xl h-auto bg-slate-500">
            <h2>Revenue</h2>
            <div className="flex items-center p-3 justify-start ">
              <p className="text-3xl font-bold  text-slate-300">$2,454</p>
              <div className="flex p-3 gap-3 items-center  text-red-600">
                <p className="text-xl">-11.4</p>
                <IoMdArrowDown />
              </div>
            </div>
            <p>Compare to last year(2019)</p>
          </div>
        </div>
        <div className="w-[70%] m-5 rounded-xl bg-slate-500 h-[50vh]"></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Default;
