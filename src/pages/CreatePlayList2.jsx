import axios from "axios";
import { useEffect, useState } from "react";

function CreatePlayList2() {
  const [newData, setNewData] = useState("");
  const [fact, setFact] = useState("");
  async function view() {
    try {
      let v = await axios.get("https://www.boredapi.com/api/activity");
      console.log(v.data.activity);
      setNewData(v.data.activity);
    } catch (Error) {
      console.log(Error);
      alert(Error.message);
    }
  }
  async function cat() {
    try {
      let c = await axios.get("https://catfact.ninja/fact");
      console.log(c.data.fact);
      setFact(c.data);
    } catch (Error) {
      console.log(Error);
      alert(Error.message);
    }
  }
  useEffect(() => {
    view();
  }, []);

  return (
    <div className="flex w-auto gap-2  justify-between">
      <div className="w-1/3 flex   flex-col">
        <div className=" w-full flex flex-col rounded-xl h-60 bg-[url('./forest.jpg')] ">
          <h1 className="font-bold text-purple-500 text-3xl underline text-center">
            Random Activities
          </h1>
          <div className="text-center">{newData}</div>
        </div>
        <button
          className=" border w-60 ml-10    p-2 rounded-xl   border-white  "
          onClick={view}
        >
          change Quotes!
        </button>
      </div>

      <div className="p-5 w-2/3  flex flex-col bg-stone-600  rounded-xl h-60  ">
        <div className=" border w-full h-screen ">
          <h1 className="font-bold text-purple-500 text-3xl underline text-center">
            cat Fact
          </h1>

          <p>
            The cat, commonly referred to as the domestic cat or house cat, is
            the only domesticated species in the family Felidae. Recent advances
            in archaeology and genetics have shown that the domestication of the
            cat occurred in the Near East around 7500 BC.{" "}
          </p>
          <div className="text-center text-gray-900">{fact.fact}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className=" border    w-60    p-2 rounded-xl  bg-blue-600 border-white  "
            onClick={cat}
          >
            View More!
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePlayList2;
