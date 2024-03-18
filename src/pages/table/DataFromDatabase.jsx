import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

function DataFromDatabase() {
  const [prismaData, setPrismaData] = useState("");
  const [formData, setFormData] = useState([]);

  const [idUpdate, setIdUpdate] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  async function priData() {
    try {
      const dataFromPrisma = await axios({
        method: "get",
        url: "http://localhost:5001/prisma",
      });

      console.log(dataFromPrisma.data);
      setPrismaData(dataFromPrisma.data);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  console.log(errors);

  async function dataofprisma(dataprisma) {
    console.log(dataprisma);
    try {
      const dataFromPrisma = await axios({
        method: "post",
        url: "http://localhost:5001/prisma",
        data: dataprisma,
      });
      priData();
      console.log(dataFromPrisma.data);
      setFormData(dataFromPrisma.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteData(data) {
    console.log(data);
    try {
      await axios({
        method: "delete",
        url: `http://localhost:5001/prisma/${data}`,
      });
      priData();
    } catch (error) {
      console.log(error);
    }
  }

  async function selectedData(data) {
    setIsUpdate(true);
    setIdUpdate(data.id);
    setValue("name", data.name);
    setValue("email", data.email);
  }

  const handleUpdate = async (data) => {
    console.log("Update:", data);
    try {
      await axios({
        method: "put",
        url: `http://localhost:5001/prisma/${idUpdate}`,
        data: { name: data.name, email: data.email },
      });

      priData();

      reset();
    } catch (err) {
      console.log(err);
    } finally {
      setIsUpdate(false);
    }
  };

  useEffect(() => {
    priData();
  }, []);

  return (
    <div className=" justify-center items-center flex-col w-full bg-neutral-500 ">
      <div className="flex flex-col ">
        <form
          className="bg-neutral-600 w-[100%] flex flex-col items-center  p-3"
          onSubmit={handleSubmit(isUpdate ? handleUpdate : dataofprisma)}
        >
          <h1 className=" text-center text-xl">Forms</h1>
          <label>
            Name:
            <br />
            <input
              className="m-2 w-[100%] text-black h-7 rounded"
              type="text"
              {...register("name", {
                required: "please enter your Name!!",
              })}
            />
          </label>
          <div className="text-red-800">
            {errors.name && errors.name?.message}
          </div>
          <br />
          <label>
            Email:
            <br />
            <input
              className="m-2 w-[100%] text-black h-7 rounded"
              type="email"
              {...register("email", {
                required: "please enter your email!!",
              })}
            />
          </label>
          <div className="text-red-800">
            {errors.email && errors.email?.message}
          </div>
          <br />

          <button
            className="bg-blue-500 m-3 hover:bg-blue-600 p-1 rounded"
            type="submit"
          >
            {!isUpdate ? "submit" : "update"}
          </button>
        </form>

        <div>
          <h1>Submitted Data to Database:</h1>

          {Object.entries(formData).map(([key, value]) => (
            <p className=" flex p-2  " key={key}>
              {key}:{value}
            </p>
          ))}
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table
          border="1"
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-[20%] text-left px-6 py-3">SN</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {prismaData &&
              prismaData.map((item, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className=" px-6 py-4 flex">
                    <button
                      className="m-1 rounded w-[50%] h-[5vh] "
                      onClick={() => selectedData(item)}
                    >
                      <IoMdSettings size={"30px"} color="skyblue" />
                    </button>

                    <button
                      className="m-1 rounded w-[50%] h-[5vh] "
                      onClick={() => deleteData(item.id)}
                    >
                      <IoMdCloseCircle size={"30px"} color="#d42020" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataFromDatabase;
