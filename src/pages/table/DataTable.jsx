import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { API_URL } from "../../config/EnvironmentVariables";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

function DataTable() {
  const [tailwindData, setTailwindData] = useState("");
  const [materialData, setMaterialData] = useState("");

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

  useEffect(() => {
    fetchDataTail();
    fetchData();
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
    </div>
  );
}

export default DataTable;
