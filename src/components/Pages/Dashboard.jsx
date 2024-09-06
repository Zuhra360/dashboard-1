import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/Dashboard/Navbar/Navbar";
import { Sidebar } from "../ui/Dashboard/SIidebar/Sidebar";
export const Dashboard = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div
        style={{ height: "calc(100vh - 85.19px" }}
        className=" flex flex-row"
      >
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
