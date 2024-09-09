import React from "react";
import NavbarAddcustomer from "./NavbarAddcustomer";
import Customerinformation from "../Customer/Customerinformation";
import Customerlist from "../Customerlist";

function Addcustomer() {
  return (
    
    <div className="flex flex-row w-full h-full">
      <div className="w-full flex flex-col p-6 gap-5">
        <NavbarAddcustomer />
        <Customerlist/>
      </div>

      <Customerinformation />

     
    </div>
  );
}

export default Addcustomer;
