import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const URL = "http://localhost:5001";

  const [registerData, setRegisterData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  async function getData() {
    try {
      const getting = await axios({
        method: "get",
        url: `${URL}/register`,
      });
      console.log(getting.data);
      setRegisterData(getting.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function postData(data) {
    try {
      const postingdata = await axios({
        method: "post",
        url: `${URL}/register`,
        data,
      });
      getData();
      console.log(postingdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" flex flex-col items-center m-3 p-10 w-auto ">
      <h1 className="text-[50px] font-mono m-2">Register</h1>
      <p>Create new one.</p>
      <form className="flex  flex-col " onSubmit={handleSubmit(postData)}>
        <input
          className="p-2  w-[30vw] my-5 bg-neutral-200"
          type="text"
          placeholder="Name"
          {...register("name", { required: true, max: 15 })}
        />
        <input
          className="p-2  w-[30vw] my-5 bg-neutral-200"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
          })}
        />
        <input
          className="p-2  w-[30vw] my-5 bg-neutral-200"
          type="password"
          placeholder="Password"
          {...register("password", { required: true, min: 5 })}
        />
        <input
          className="p-2  w-[30vw] my-5 bg-neutral-200"
          type="password"
          placeholder="Confirm Password"
          {...register("Confirm Password", { required: true, min: 5 })}
        />

        <button
          type="submit"
          className="bg-blue-700 w-[50%] my-5 h-8 rounded-lg"
        >
          Create
        </button>
      </form>
      <div className="bg-red-200 relative overflow-x-auto">
        <table
          border="1"
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-[20%] text-left px-6 py-3">SN</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {registerData &&
              registerData.map((item, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisterPage;
