/* eslint-disable react/no-unescaped-entities */
import { NavLink, Navigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { API_URL } from "../../config/EnvironmentVariables";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";

function Login() {
  const cookie = Cookies.get("token");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const passwordVisible = () => {
    setShowpassword(!showPassword);
  };
  async function posting(e) {
    e.preventDefault();
    setSuccessMessage("");
    console.log({ password }, { email });
    try {
      const data = await axios({
        method: "post",
        url: `${API_URL}/login`,
        data: { email: email, password: password },
      });
      console.log(data.data);
      setError("");
      Cookies.set("token", data.data.token, { path: "" });
      setSuccessMessage(data.data);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  }

  return (
    <>
      {!cookie ? (
        <form onSubmit={posting}>
          <div className="bg-neutral-800 h-[91vh] flex justify-center  p-4">
            <div className="flex flex-col  w-1/2    bg-neutral-900 rounded-3xl shadow-md ">
              <div className="flex p-5 w-full    justify-between">
                <h1 className="text-slate-200  font-bold text-center w-full text-3xl">
                  Log in to Spotify
                </h1>
                <NavLink className="hover:rotate-90 " to="/">
                  <RxCross2
                    style={{
                      borderRadius: 100,
                      backgroundColor: "#181818",
                      fontSize: "35px",
                      color: "white",
                    }}
                  />
                </NavLink>
              </div>
              <div className="w-full ml-10  px-20 pt-14 ">
                <input
                  value={email}
                  className="w-5/6 bg-neutral-700  text-white h-14 rounded-2xl "
                  type="email"
                  placeholder="      E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <div className="flex items-center text-white">
                  <input
                    value={password}
                    className="w-5/6 flex text-white bg-neutral-700 h-14 relative rounded-2xl "
                    type={showPassword ? "text" : "password"}
                    placeholder="    Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="hover:cursor-pointer ml-[29vw] absolute"
                    onClick={passwordVisible}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {error && <div style={{ color: "red" }}>{error} </div>}
                {successMessage && (
                  <div style={{ color: "green" }}>{successMessage.msg} </div>
                )}
                <div className="text-white  font-thin p-4">
                  <NavLink>Forget your password?</NavLink>
                </div>
                <div>
                  <button
                    className="text-white  hover:text-black  bg-sky-600 w-5/6 hover:bg-sky-500 h-12 rounded-xl"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="text-white justify-center items-center  font-thin   h-20 flex">
                <h1>Don't Have an account?</h1>
                <NavLink className="text-sky-500" to="/signup">
                  {" "}
                  Sign up
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Navigate to={"/admin"} />
      )}
    </>
  );
}

export default Login;
