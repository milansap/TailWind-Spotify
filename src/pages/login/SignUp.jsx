import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { useState } from "react";
import { API_URL } from "../../config/EnvironmentVariables";
import axios from "axios";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccessMessage, setSignUpSuccessmessage] = useState("");

  async function signPosting(e) {
    e.preventDefault();
    setSignUpSuccessmessage("");
    console.log({ userName }, { email }, { password }, { confirm });
    try {
      const data1 = await axios({
        method: "post",
        url: `${API_URL}/sign-post`,
        data: {
          username: userName,
          email: email,
          password: password,
          confirmPassword: confirm,
        },
      });
      console.log(data1.data);
      setSignUpError("");
      setSignUpSuccessmessage(data1.data);
    } catch (err) {
      console.log(err.response.data);
      setSignUpError(err.response.data);
    }
  }
  return (
    <form onSubmit={signPosting}>
      <div className="flex flex-col bg-neutral-900 items-center  justify-center ">
        <div className="w-1/2 h-auto  flex flex-col justify-center text-white    rounded  ">
          <div className="text-center  h-[80px] flex items-center justify-center">
            <h1 className="text-[40px]  font-bold ">
              Sign up to Start <br />
              listening
            </h1>
          </div>
          <div className=" m-2 mt-8 text-center">
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              className="w-1/2 h-10  bg-stone-600 rounded-xl"
              placeholder="    Username"
            />
          </div>
          <div className="main  m-2 text-center">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-1/2 h-10 bg-stone-600 rounded-xl"
              placeholder="    E-mail"
            />
          </div>
          <div className="main m-2 text-center">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="Password"
              className="w-1/2 h-10 bg-stone-600 rounded-xl"
              placeholder="    Password"
            />
          </div>
          <div className="main m-2 text-center">
            <input
              onChange={(e) => setConfirm(e.target.value)}
              type="Password"
              className="w-1/2 h-10 bg-stone-600 rounded-xl"
              placeholder="    Confirm password"
            />
          </div>
          {signUpError && <div style={{ color: "red" }}>{signUpError} </div>}
          {signUpSuccessMessage && (
            <div style={{ color: "green" }}>{signUpSuccessMessage.msg} </div>
          )}

          <button
            type="submit"
            className="flex items-center ml-[165px] m-5 cursor-pointer  text-center  justify-center bg-white text-black w-1/2 h-8  rounded-xl"
          >
            Sign up
          </button>

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
            <div className="w-1/2 m-2 mb-[51px] flex  cursor-pointer  items-center justify-center h-8 rounded-xl border">
              <AiFillApple size={"28px"} />

              <h3>Sign in with Google</h3>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
