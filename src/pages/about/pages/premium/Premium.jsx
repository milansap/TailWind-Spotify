import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Premium() {
  const [name, setName] = useState({});
  const [err, setErr] = useState("");
  const params = useParams("");
  // console.log(params.name);

  async function premiumData() {
    try {
      const pre = await axios({
        method: "get",
        url: `http://localhost:5001/about/pre/${params.name}`,
      });
      console.log(pre.data);
      setName(pre.data);
    } catch (error) {
      if (error.response) {
        setErr(error.response.data);
      } else setErr(error.message);
      console.log(error);
    }
  }

  useEffect(() => {
    premiumData();
  }, []);

  return (
    <div>
      <div>{err}</div>
      <div className="flex flex-col items-center justify-center">
        <div>{name.title}</div>
        <img src={name.image} />
        <div>{name.Description}</div>
      </div>
    </div>
  );
}

export default Premium;
