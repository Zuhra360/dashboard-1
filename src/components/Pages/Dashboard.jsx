import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/Dashboard/Navbar/Navbar";
import { Sidebar } from "../ui/Dashboard/SIidebar/Sidebar";
export const Dashboard = () => {
  return (
    <div className="h-screen">
      <div className="sticky top-0">
        <Navbar />
      </div>

      <div className=" flex flex-row">
        <div
          style={{
            position: "sticky",
            top: 86,
            zIndex: 1000,
            height: "calc(100vh - 86px)",
          }}
        >
          <Sidebar />
        </div>

        <Outlet />
      </div>
    </div>
  );
};
