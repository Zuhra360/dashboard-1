import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../components/Pages/Login";
import { Dashboard } from "../../components/Pages/Dashboard";
import { Analytics } from "../../components/ui/Dashboard/Analytics/Analytics";
import { Home } from "../../components/ui/Dashboard/Home/Home";
import { Settings } from "../../components/ui/Dashboard/Settings/Settings";
import Invoicelist from "../../components/ui/Dashboard/Invoicelist/Invoicelist";
import Addcustomer from "../../components/ui/Dashboard/Analytics/AddCustomer/Addcustomer";
import Schedule from "../../components/ui/Dashboard/Schedule/Schedule";


export const router = createBrowserRouter([
  {
    path: "/dashboard-1/",
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

            // childern:[  
            //         {
            //           path:"addcustomer",
            //           element:<Addcustomer/>
            //         }
            //         ]
            
          },
              
          
          {
            path:"invoice",
            element:<Invoicelist/>
          },
          {
            path:"schedule",
            element:<Schedule/>
          },
          {
            path: "settings",
            element: <Settings />,
          },
            {
            path:"addcustomer",
            element:<Addcustomer/>
          }
     
    ],
  },
  // {
  //   path: "/addcustomer",
  //   element:<Addcustomer/>
  // }
 
 
]);
