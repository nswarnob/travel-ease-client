import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layouts/MainLayOut";
import HomePage from "../Pages/HomePage";
import AllVehiclesPage from "../Pages/AllVehiclesPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import MyVehiclePage from "../Pages/MyVehiclePage";
import MyBookingPage from "../Pages/MyBookingPage";
import AddVehiclePage from "../Pages/AddVehiclePage";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children:[
      {
        path:'/home',
        Component: HomePage,

      },
      {
        path:'all-vehicles',
        Component:AllVehiclesPage,
      },
      {
        path:'login',
        Component: LoginPage,
      },
      {
        path:'register',
        Component: RegisterPage,
      },
      {
        path:'my-vehicle',
        element: <PrivateRoute>
          <MyVehiclePage></MyVehiclePage>
        </PrivateRoute>
      },
      {
        path:'my-bookings',
        element:<PrivateRoute>
          <MyBookingPage></MyBookingPage>
        </PrivateRoute>
      },
      {
        path:'add-vehicle',
        element:<PrivateRoute>
          <AddVehiclePage></AddVehiclePage>
        </PrivateRoute>
      }
      

    ]
  },
]);