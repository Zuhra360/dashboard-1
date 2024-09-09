import React, { useState } from "react";
import Customerlist from "./Customerlist";
import Customerinformation from "./Customer/Customerinformation";
import { Navbar } from "../Navbar/Navbar";
import Navbaranalytics from "./Customer/Navbaranalytics";
import NavbarAddcustomer from "./AddCustomer/NavbarAddcustomer";
import AddcustomerForm from "./AddCustomer/AddcustomerForm";

export const Analytics = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-full flex flex-col p-6 gap-5">
        <Navbaranalytics active={active} setActive={setActive} />
        <Customerlist />
      </div>

      {active && <AddcustomerForm active={active} setActive={setActive} />}
      {!active && <Customerinformation  />}

    </div>
  );
};
