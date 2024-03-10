import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Support() {
  const [name, setName] = useState({});
  const [err, setErr] = useState("");
  const params = useParams("");
  // console.log(params.name);

  async function supportData() {
    try {
      const pre = await axios({
        method: "get",
        url: `http://localhost:5001/about/sup/${params.name}`,
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
    supportData();
  }, []);

  return (
    <div>
      <div>{err.response.data}</div>
      <div>{name.title}</div>
      <div>{name.image}</div>
      <div>{name.Price}</div>
    </div>
  );
}

export default Support;
