/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Login() {
  return (
    <div>
      <div className="flex flex-col ml-48 w-1/2    bg-zinc-800 rounded-3xl shadow-md ">
        <div className="flex p-5 w-full    justify-between">
          <h1 className="text-slate-200  font-thin text-3xl">Log in</h1>
          <NavLink className="hover:rotate-90 " to="/">
            <RxCross2
              style={{
                borderRadius: 100,
                backgroundColor: "#181818",
                fontSize: "35px",
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
          />
          <br />
          <br />

          <input
            required
            className="w-full flex text-white bg-neutral-700 h-14 rounded-2xl "
            type="Password"
            placeholder="    Password"
          />
          <div className="text-white text-center font-thin p-4">
            <NavLink>Forget your password?</NavLink>
          </div>
          <div className="text-white cursor-pointer hover:text-black hover:bg-sky-500    text-center rounded-xl h-12 flex items-center justify-center bg-sky-600">
            <button type="submit">Login</button>
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
