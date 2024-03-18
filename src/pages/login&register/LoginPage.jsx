import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className=" flex flex-col items-center m-3 p-10 w-auto h-[80vh]">
      <div>
        <h1 className="text-[50px] font-mono m-2">Login</h1>
        <p>Hi,Welcome back.</p>
        <form className="flex  flex-col " onSubmit={handleSubmit()}>
          <label>
            <input
              className="p-2  w-[30vw] my-5 bg-neutral-200"
              type="email"
              placeholder="Email"
              {...register("Email", { required: "enter your email!!" })}
            />
          </label>
          <div className="text-red">{errors.email?.message}</div>
          <label>
            <input
              className="p-2 w-[30vw] my-5 bg-neutral-200 rounded"
              type="password"
              placeholder="password"
              {...register("Password", {
                required: "Enter Your password!",
                min: 8,
              })}
            />
          </label>
          <div className="text-red">{errors.password?.message}</div>
          <div className="flex justify-between ">
            <label>
              <input
                type="checkbox"
                {...register("check", { required: true })}
              />
              Remember me
            </label>
            <NavLink style={{ color: "blue" }}>Forget password?</NavLink>
          </div>
          <button
            className="bg-blue-700 w-[50%] my-5 h-8 rounded-lg"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
