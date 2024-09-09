import { Outlet } from "react-router-dom";
import { Sidebar } from "../ui/Dashboard/SIidebar/Sidebar";
export const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
       <Sidebar />
      <div
        style={{ height: "" }}
        className=" flex flex-col w-full bg-zinc-200"
      >
       
        {/* <Navbar/> */}
        <Outlet />
      </div>
    </div>
  );
};
