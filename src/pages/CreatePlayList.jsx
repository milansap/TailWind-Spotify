import axios from "axios";
import { useState } from "react";

function CreatePlayList() {
  const [api, setApi] = useState("");
  const [get, setGet] = useState("");
  const [err, setErr] = useState("");
  async function createApi() {
    let x = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    setApi(x.data);
    console.log(x.data);
  }

  async function getting() {
    let a = await axios.get("http://localhost:5000/api/data");

    setGet(a.data);
    console.log(a.data);
  }
  async function catt() {
    try {
      let asy = await axios.get("https://catfact.ninja/fact");
      console.log(asy.data.fact);
      setErr(asy.data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  return (
    <div>
      <div className="m-3">
        <div className=" text-violet-800">{api.setup}</div>
        <div className=" text-violet-800">{api.punchline}</div>

        <br />
        <button
          onClick={createApi}
          className="border ml-10 p-2 rounded-xl  bg-blue-600 border-white"
        >
          Getting API
        </button>
        <div className="m-2">
          <img width={"500px"} src={get.image} alt="" />
          <div className="text-green-600 underline">
            {get.Country}>{get.Capital}>{get.District}>{get.City}>{get.Temple}
          </div>
        </div>
        <div className="m-2">
          <img width={"500px"} src={get.image} alt="" />
          <div className="text-green-600 underline">
            {get.Country}>{get.Capital}>{get.District}>{get.City}>{get.Temple}
          </div>
        </div>
        <button
          onClick={getting}
          className="border ml-10 p-2 rounded-xl  bg-blue-600 border-white"
        >
          Get Info
        </button>
        <div>{err.fact}</div>
        <div>{err.length}</div>
        <button
          onClick={catt}
          className="border ml-10 p-2 rounded-xl  bg-blue-600 border-white"
        >
          Get Info
        </button>
      </div>
    </div>
  );
}

export default CreatePlayList;
