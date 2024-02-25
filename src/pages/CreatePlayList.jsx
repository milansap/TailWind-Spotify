import axios from "axios";
import { useEffect, useState } from "react";

function CreatePlayList() {
  const [api, setApi] = useState("");
  const [get, setGet] = useState("");
  const [err, setErr] = useState("");
  const [info, setInfo] = useState("");
  const [data, setData] = useState("");
  async function createApi() {
    let x = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    setApi(x.data);
    console.log(x.data);
  }

  async function getting() {
    let a = await axios.get("http://localhost:5001/msg/usa");

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
  async function country() {
    try {
      let asa = await axios.get("http://localhost:5001/msg/country");
      console.log(asa.data);
      setInfo(asa.data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  async function innfo() {
    try {
      let my = await axios.get("http://localhost:5001/msg");
      console.log(my.data);
      setData(my.data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  useEffect(() => {
    createApi();
    console.log("Rendering....");
  }, []);
  useEffect(() => {
    catt();
  }, []);

  return (
    <div>
      <div className="m-3 ">
        <div className=" bg-neutral-700 p-3">
          <div className="flex  justify-evenly">
            <div className=" text-violet-200">
              {api.setup}
              <div>{api.punchline}</div>
            </div>
            <img
              className="rounded-xl"
              src={
                "https://i.pinimg.com/originals/aa/02/63/aa0263b62a56719d4704fe7c97450242.jpg"
              }
              width={"300px"}
              height={"300px"}
              alt=""
            />
            <br />
          </div>
          <button
            onClick={createApi}
            className="border ml-10 p-2 rounded-xl  bg-blue-600 border-white"
          >
            Jokes
          </button>
        </div>

        <div className="flex">
          <div className="p-4">
            <div>{err.fact}</div>

            <button
              onClick={catt}
              className="border ml-10 p-2 rounded-xl  bg-grey-600 border-white"
            >
              Cat Fact
            </button>
          </div>
          <img
            src="https://img.freepik.com/free-photo/fluffy-kitten-sitting-grass-staring-sunset-playful-generated-by-artificial-intelligence_25030-67836.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais"
            alt=""
          />
        </div>
        <div className="flex p-3 gap-8">
          <div>
            <div className="border  w-full">
              <div>{info.name}</div>
              <div>{info.status}</div>
              <div>{info.CapitalCity}</div>
            </div>
            <button
              onClick={country}
              className="border ml-10 p-2 rounded-xl  bg-blue-600 border-white"
            >
              Info
            </button>
          </div>

          <div className=" border p-3 w-2/3">
            <div>
              <div>{data.name}</div>
              <div>{data.status}</div>
              <div>{data.Email}</div>
              <div>{data.Address}</div>
              <div>{data.position}</div>
              <button
                onClick={innfo}
                className="border ml-10 p-2 rounded-xl  bg-blue-600 border-white"
              >
                view more!
              </button>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlayList;
