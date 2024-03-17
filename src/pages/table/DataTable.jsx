import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { API_URL } from "../../config/EnvironmentVariables";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useForm } from "react-hook-form";

function DataTable() {
  const [tailwindData, setTailwindData] = useState("");
  const [materialData, setMaterialData] = useState("");
  const [prismaData, setPrismaData] = useState("");
  const [formData, setFormData] = useState([]);

  const [idUpdate, setIdUpdate] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  async function fetchData() {
    try {
      const materialdata = await axios({
        method: "get",
        url: `${API_URL}/materialDataTable`,
      });
      setMaterialData(materialdata.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchDataTail() {
    try {
      const tailData = await axios({
        method: "get",
        url: `${API_URL}/tailwindData`,
      });
      setTailwindData(tailData.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function priData() {
    try {
      const dataFromPrisma = await axios({
        method: "get",
        url: "http://localhost:5001/prisma",
      });
      console.log(dataFromPrisma.data);
      setPrismaData(dataFromPrisma.data);
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
    try {
      await axios({
        method: "delete",
        url: `http://localhost:5001/prisma/${data.id}`,
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
    fetchData();
    fetchDataTail();
    priData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: materialData,
  });

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tailwindData &&
              tailwindData.map((row, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {row.name}
                  </th>
                  <td className="px-6 py-4">{row.age}</td>
                  <td className="px-6 py-4">{row.contact}</td>
                  <td className="px-6 py-4">{row.address}</td>
                  <td className="px-6 py-4">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      {row.action}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <MaterialReactTable table={table} />
      </div>
      <div className="flex w-full bg-neutral-500 ">
        <div className="flex flex-col w-[40%]">
          <form
            className="bg-neutral-600 w-[100%] flex flex-col items-center  p-3"
            onSubmit={handleSubmit(isUpdate ? handleUpdate : dataofprisma)}
          >
            <h1 className=" text-center text-xl">Forms</h1>
            <label>
              Name:
              <br />
              <input
                className="m-2 w-[100%] h-7 rounded"
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
                className="m-2 w-[100%] h-7 rounded"
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

            <button className="bg-blue-500 m-3 p-1 rounded" type="submit">
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
                    <td className=" px-6 py-4">
                      <button
                        className="m-1 rounded w-[85%] bg-green-600"
                        onClick={() => selectedData(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="m-1 rounded w-[85%] bg-red-600"
                        onClick={() => deleteData(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
