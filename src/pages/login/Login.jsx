/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { API_URL } from "../../config/EnvironmentVariables";
import axios from "axios";
import { useState } from "react";
import { PiSpotifyLogoFill } from "react-icons/pi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function posting() {
    try {
      const data = await axios({
        method: "post",
        url: `${API_URL}/postData`,
        data: { email: email, password: password },
      });
      console.log(data);
    } catch (Error) {
      console.log(Error);
    }
  }

  return (
    <div className="bg-neutral-800 h-[91vh] flex justify-center p-4">
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
        <div className="w-full p-5 ">
          <input
            required
            className="w-full bg-neutral-700  text-white h-14 rounded-2xl "
            type="email"
            placeholder="      E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <input
            required
            className="w-full flex text-white bg-neutral-700 h-14 rounded-2xl "
            type="Password"
            placeholder="    Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-white text-center font-thin p-4">
            <NavLink>Forget your password?</NavLink>
          </div>
          <div>
            <button
              className="text-white  hover:text-black  bg-sky-600 w-full hover:bg-sky-500 h-12 rounded-xl"
              onClick={posting}
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
  );
}

export default Login;
