import React from "react";
import { Card } from "./Card";
import { Linechart } from "./Linechart";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import shoe from "../../../../assets/images/shoe.jpg";
import iphone from "../../../../assets/images/iphone.jpg";
import { FaStar } from "react-icons/fa";
import { tableData } from "./Data";

export const Home = () => {
  return (
    <div className="w-[100%] p-9 bg-zinc-50">
      <Card />
      <Linechart /> 

      <div className="flex flex-row w-11/12 ">
        <div className="h-80 w-2/4 my-2  flex flex-col bg-white">
          <div className="flex flex-row justify-between mb-4">
            <h3 className="text-gray-700 text-xl">Recent Orders</h3>
            <button>
              <HiOutlineDotsHorizontal className="stroke-gray-500" />
            </button>
          </div>

          <div className="container mx-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-100 px-2 py-2 text-left text-lg font-medium">
                    Tracking No
                  </th>
                  <th className="border border-gray-100 px-2 py-2 text-left text-lg font-medium">
                    Product Name
                  </th>
                  <th className="border border-gray-100 px-2 py-2 text-left text-lg font-medium">
                    Price
                  </th>
                  <th className="border border-gray-100 px-2 py-2 text-left text-lg font-medium">
                    Total Order
                  </th>
                  <th className="border border-gray-100 px-2 py-2 text-left text-lg font-medium">
                    Total Amount{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-lg font-medium">
                      {row.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-lg font-medium">
                      {row.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-lg font-medium">
                      {row.price}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-lg font-medium bg-blue-100 text-cyan-700 text-center rounded-lg my-2">
                      {row.order}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-lg font-medium">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col bg-white h-80 w-4/12 my-2 mx-8">
          <div className="flex flex-row justify-between mx-4 my-4">
            <h2 className="text-gray-800 text-xl">Top selling Products</h2>
            <button>
              <HiOutlineDotsHorizontal className="stroke-gray-500" />
            </button>
          </div>

          <div className="flex flex-row gap-12 mb-8  mx-8">
            <div>
              <img className="mx-5 rounded-lg h-24 w-24" src={shoe} />
            </div>
            <div className="flex flex-col h-24 w-96  ">
              Nike Shoes Black Pattern
              <button className="flex flex-row">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </button>
              <p>$87</p>
            </div>
          </div>
          <div className="flex flex-row gap-12 mb-8  mx-8">
            <div>
              <img className="mx-5 rounded-lg h-24 w-24" src={iphone} />
            </div>
            <div className="flex flex-col h-24 w-96  ">
              iphone12
              <button className="flex flex-row">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </button>
              <p>$987</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};
