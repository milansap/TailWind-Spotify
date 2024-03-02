import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DynRoute() {
  const [data, setData] = useState("");
  const [err, setErr] = useState("");
  const params = useParams("");
  console.log(params.id);
  async function dynamicCall() {
    try {
      const resp = await axios({
        method: "get",
        url: `http://localhost:5001/dynRoute/${params.id}`,
      });
      console.log(resp.data);
      setData(resp.data);
    } catch (err) {
      setErr(err.response.data);
      console.log(err.response.data);
    }
  }
  useEffect(() => {
    dynamicCall();
  }, []);

  return (
    <div>
      <div>{err}</div>
      <div>{data.name}</div>
      <div>{data.roll}</div>
    </div>
  );
}

export default DynRoute;
