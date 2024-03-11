import { useForm } from "react-hook-form";
import { API_URL } from "../../config/EnvironmentVariables";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function ReactHookForm() {
  const [formData, setFormData] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  console.log(errors);

  // function submission(data) {
  //   console.log(data);
  // }

  async function submission(data) {
    console.log(data);
    try {
      const form = await axios({
        method: "post",
        url: `${API_URL}/reactHook`,
        data: data,
      });
      setFormData(form.data);
      console.log(form.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-between ">
      <div className="flex justify-center p-7 w-[70%]  items-center">
        <form
          className="flex border   justify-center  w-[50%] p-5 flex-col gap-5 "
          onSubmit={handleSubmit(submission)}
        >
          <h1 className="text-center font-bold text-xl underline">
            Student Registration Form
          </h1>
          <label>
            Full Name:
            <input
              className="bg-neutral-300 rounded-xl h-10"
              {...register("fullName", {
                required: "please enter your name!!",
                max: 10,
                min: 3,
              })}
              placeholder="Name"
            />
          </label>
          <div className="text-red-500">{errors?.fullName?.message}</div>
          <label>
            Address:
            <input
              className="bg-neutral-300 rounded-xl h-10"
              {...register("address", {
                required: "please enter your address!!",
                max: 10,
                min: 3,
              })}
              placeholder="Address"
            />
          </label>
          <div className="text-red-500">{errors?.address?.message}</div>
          <label>
            Year Level:
            <select {...register("year", { required: "select your level!!" })}>
              <option value="">--Please Select--</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </label>
          <div className="text-red-500">{errors?.year?.message}</div>
          <label
            className="flex gap-3"
            {...register("gender", { required: "select gender!!" })}
          >
            Gender Selection:
            <label>
              <input value="male" type="radio" {...register("gender")} />
              Male
            </label>
            <label>
              <input value="female" type="radio" {...register("gender")} />
              Female
            </label>
            <label>
              <input value="others" type="radio" {...register("gender")} />
              Others
            </label>
            {/* <select {...register("gender", { required: "Please select gender" })}>
          <option value="">--Select Gender--</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select> */}
          </label>
          <div className="text-red-500">{errors?.gender?.message}</div>
          <label>
            Email:
            <input
              {...register("email", {
                required: "please enter your email address",
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
              })}
              placeholder="Email"
              type="email"
              className="bg-neutral-300 rounded-xl h-10"
            />
          </label>
          <div className="text-red-500">{errors?.email?.message}</div>
          <label>
            Phone no.:
            <input
              {...register("phone", {
                required: "please enter your email address",
                pattern: "[0-9]*",
              })}
              placeholder="Number"
              type="number"
              className="bg-neutral-300 rounded-xl h-10"
            />
          </label>
          <div className="text-red-500">{errors?.phone?.message}</div>
          <label>Courses:</label>
          <div
            className="flex gap-5"
            {...register("course", {
              required: "select your course!!",
            })}
          >
            <label>
              <input
                type="checkbox"
                value="react"
                placeholder="courses"
                {...register("course")}
              />
              REACT JS
            </label>
            <label>
              <input
                type="checkbox"
                value="next"
                placeholder="courses"
                {...register("course")}
              />
              NEXT JS
            </label>
            <label>
              <input
                type="checkbox"
                value="node"
                placeholder="courses"
                {...register("course")}
              />
              NODE JS
            </label>
            <label>
              <input
                type="checkbox"
                value="python"
                placeholder="courses"
                {...register("course")}
              />
              PYTHON
            </label>
            <label>
              <input
                type="checkbox"
                value="laravel"
                placeholder="courses"
                {...register("course")}
              />
              LARAVEL
            </label>
          </div>
          <div className="text-red-500">{errors?.course?.message}</div>
          <label>Message:</label>
          <textarea
            className="bg-neutral-300 w-[100%] h-20 rounded"
            {...register("feed", {
              max: 50,
              min: 5,
              required: "Drop your feedback",
            })}
          />

          <div className="text-red-500">{errors?.feed?.message}</div>
          <input
            className="w-[70%]"
            type="date"
            placeholder="date of form submisson"
            {...register("date", {
              required: "enter date of submission",
            })}
          />
          <div className="text-red-500">{errors?.date?.message}</div>
          <label htmlFor="">
            <input
              type="checkbox"
              {...register("agree", {
                required: "agree the policy and conditions!",
              })}
            />
            I agree to the{" "}
            <NavLink className="font-semibold text-blue-500">
              Terms & Conditions
            </NavLink>{" "}
            and{" "}
            <NavLink className="font-semibold text-blue-500">
              Privacy Policy
            </NavLink>
          </label>
          <button className="w-[20%] h-10 bg-blue-400 rounded-lg" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className=" flex flex-col w-[30%] bg-slate-200">
        <h1 className="font-bold text-xl">Data from Backend:</h1>

        {Object.entries(formData).map(([key, value]) => (
          <p className=" flex p-2  " key={key}>
            <div className="font-bold ">
              {key === "agree" ? "Agree to terms" : key}:
            </div>
            {typeof value === "boolean" ? (value ? "yes" : "no") : value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ReactHookForm;
