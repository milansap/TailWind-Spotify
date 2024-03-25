import { useForm } from "react-hook-form";
import { NavLink, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../store/useTheme";
import { CiDark } from "react-icons/ci";

function LoginPage() {
  const { color, setColor, setDefault, backgroundColor } = useTheme();
  console.log(color, setColor);

  const [success, setsuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const URL = "http://localhost:5001";
  const navigate = useNavigate("");
  const cookie = Cookies.get("token");

  async function posting(data) {
    console.log(data);
    try {
      const cookieData = await axios({
        method: "post",
        url: `${URL}/loginCookie`,
        data: data,
      });
      setsuccess(cookieData.data.msg);

      console.log(cookieData.data.msg);
      Cookies.set("token", cookieData.data.token, { path: "" });
      navigate("/useradmin");
    } catch (err) {
      setErrorMsg(err.response.data);
    }
  }
  function toggle() {
    if (color === "#272926" && backgroundColor === "#eef5eb") {
      setColor("#eef5eb", "#272926");
      Cookies.set("color", "#eef5eb", { path: "" });
      Cookies.set("backgroundColor", "#272926", { path: "" });
    } else {
      setDefault("#272926", "#eef5eb");
      Cookies.set("color", "#272926", { path: "" });
      Cookies.set("backgroundColor", "#eef5eb", { path: "" });
    }
  }
  useEffect(() => {
    const storedColor = Cookies.get("color");
    const storedBackgroundColor = Cookies.get("backgroundColor");

    if (storedColor && storedBackgroundColor) {
      setColor(storedColor, storedBackgroundColor);
    }
  }, []);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div style={{ color: color, backgroundColor: backgroundColor }}>
      <label className="flex">
        <CiDark onClick={toggle} size={"30px"} />

        {/* <select className="bg-red-400">
          <option onClick={() => setColor("#eef5eb", "#272926")}> Dark</option>
          <option onClick={() => setDefault("#272926", "#eef5eb")}>
            Light
          </option>
        </select> */}
      </label>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {!cookie ? (
          <div className=" flex flex-col items-center m-3 p-10 w-auto h-[80vh]">
            <div>
              <h1 className="text-[50px] font-mono m-2">Login</h1>
              <p>Hi,Welcome back.</p>
              <form
                className="flex  flex-col "
                onSubmit={handleSubmit(posting)}
              >
                <label>
                  <input
                    style={{ color: color, backgroundColor: backgroundColor }}
                    className="p-2  w-[30vw] my-5 bg-neutral-200"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "enter your email!!" })}
                  />
                </label>
                <div className="text-red-400">{errors.email?.message}</div>

                <label>
                  <input
                    style={{ color: color, backgroundColor: backgroundColor }}
                    className="p-2 w-[30vw] my-5 bg-neutral-200 rounded"
                    type="password"
                    placeholder="password"
                    {...register("password", {
                      required: "Enter Your password!",
                      min: 8,
                    })}
                  />
                </label>
                <div className="text-red-400">{errorMsg}</div>
                <div className="text-red-400">{errors.password?.message}</div>
                <div className="flex justify-between ">
                  <label>
                    <input type="checkbox" {...register("check")} />
                    Remember me
                  </label>
                  <NavLink style={{ color: "blue" }}>Forget password?</NavLink>
                </div>
                <div>{success}</div>
                <button
                  className="bg-blue-700 w-[50%] my-5 h-8 rounded-lg"
                  type="submit"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        ) : (
          <Navigate to={"/useradmin"} />
        )}
      </motion.div>
    </div>
  );
}

export default LoginPage;
