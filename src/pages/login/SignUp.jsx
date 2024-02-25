import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

function SignUp() {
  return (
    <div className="flex  justify-center ">
      <div className="w-1/2 h-auto  flex flex-col  rounded-2xl bg-neutral-800 ">
        <div className="text-center h-28 flex items-center justify-center">
          <h1 className="text-[30px] font-thin ">Sign up</h1>
        </div>
        <div className=" m-2 text-center">
          <input
            type="text"
            className="w-1/2 h-8  bg-stone-600 rounded-xl"
            placeholder="    Username"
          />
        </div>
        <div className="main  m-2 text-center">
          <input
            type="email"
            className="w-1/2 h-8 bg-stone-600 rounded-xl"
            placeholder="    E-mail"
          />
        </div>
        <div className="main m-2 text-center">
          <input
            type="Password"
            className="w-1/2 h-8 bg-stone-600 rounded-xl"
            placeholder="    Password"
          />
        </div>
        <div className="main m-2 text-center">
          <input
            type="Password"
            className="w-1/2 h-8 bg-stone-600 rounded-xl"
            placeholder="    Confirm password"
          />
        </div>
        <NavLink className="flex items-center m-5 cursor-pointer justify-center">
          <div className="text-center flex items-center justify-center bg-white text-black w-1/2 h-8  rounded-xl">
            Sign up
          </div>
        </NavLink>

        <div className="flex flex-col items-center justify-center">
          <div className="flex m-4">
            <h3>already have an account?</h3>
            <NavLink to="/login" style={{ color: "skyblue" }}>
              Log in
            </NavLink>
          </div>

          <div className="w-1/2 m-2 items-center gap-1 cursor-pointer  justify-center flex h-8 rounded-xl border">
            <FaGoogle size={"20px"} className="text-green-600 " />
            <h3>Sign in with Google</h3>
          </div>
          <div className="w-1/2 m-2 mb-10 flex  cursor-pointer  items-center justify-center h-8 rounded-xl border">
            <AiFillApple size={"28px"} />

            <h3>Sign in with Google</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
