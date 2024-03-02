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
      setErr(error);
      console.log(error);
    }
  }

  useEffect(() => {
    premiumData();
  }, []);

  return (
    <div>
      <div>{err}</div>
      <div>{name.title}</div>
      <div>{name.Price}</div>
    </div>
  );
}

export default Premium;
