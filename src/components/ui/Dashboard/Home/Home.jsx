import React from "react";
import { Card } from "./Card";
import { Linechart } from "./Linechart";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import shoe from "../../../../assets/images/shoe.jpg";
import iphone from "../../../../assets/images/iphone.jpg";
import { FaStar } from "react-icons/fa";
import { tableData } from "./Data";
import OrdersProducts from "./OrdersProducts";

import NavbarHome from "./NavbarHome";

export const Home = () => {
  return (
    <div className="w-[100%] p-6 bg-zinc-200 flex flex-col gap-5">
      <NavbarHome/>
     
      
      <Card />
      <Linechart /> 
      <OrdersProducts/>
    </div>
  );
};
