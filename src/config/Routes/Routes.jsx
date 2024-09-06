import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../components/Pages/Login";
import { Dashboard } from "../../components/Pages/Dashboard";
import { Analytics } from "../../components/ui/Dashboard/Analytics/Analytics";
import { Home } from "../../components/ui/Dashboard/Home/Home";
import { Settings } from "../../components/ui/Dashboard/Settings/Settings";

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
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
