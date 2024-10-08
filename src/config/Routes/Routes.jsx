import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../components/Pages/Login";
import { Dashboard } from "../../components/Pages/Dashboard";
import { Analytics } from "../../components/ui/Dashboard/Analytics/Analytics";
import { Home } from "../../components/ui/Dashboard/Home/Home";
import { Settings } from "../../components/ui/Dashboard/Settings/Settings";
import { Invoice } from "../../components/ui/Dashboard/Invoice/Invoice";
import { Calender } from "../../components/ui/Dashboard/Calender/Calender";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "analytics",
        element: <Analytics />,
        
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {

        path: "calender",
        element: <Calender/>,
      },
      {

        path: "settings",
        element: <Settings/>,
      },

    ],
  },
]);
