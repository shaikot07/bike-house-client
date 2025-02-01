import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllProductPage from "../Pages/AllProductPage/AllProductPage";
import ProductDetails from "../Pages/AllProductPage/ProductDetails/ProductDetails";
import ClickToCheckout from "../Pages/AllProductPage/proCheckoutPage/ClickToCheckout";
import VerifyOrder from "../Pages/Order/VerifyOrder";
import AboutUs from "../Pages/About us/AboutUs";
import Dashboard from "../LayOut/Dashboard";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome/AdminHome";
import AllUser from "../Pages/DashBoard/Admin/AdminHome/Admin-user-Management/AllUsers";
import AddProduct from "../Pages/DashBoard/Admin/AddProduct/AddProduct";
import GetAllProductBYAdmin from "../Pages/DashBoard/Admin/AddProduct/GetAllProductBYAdmin";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import UpdatedProduct from "../Pages/DashBoard/Admin/AddProduct/UpdatedProduct";
import ProductsUpdated from "../Pages/DashBoard/Admin/AddProduct/ProductsUpdated";
import CustomerHome from "../Pages/DashBoard/CustomerDashboard/CustomerHome";
import CustomerProfile from "../Pages/DashBoard/CustomerDashboard/CustomerProfile";
import AdminProfile from "../Pages/DashBoard/Admin/AdminHome/AdminProfile";
import AdminOrderDetailes from "../Pages/DashBoard/Admin/Order/AdminOrderDetailes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Unauthorized from "../Pages/Shared/ErrorPage/Unauthorized";
import AdminPrivateRoute from "./AdminPrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
          {
                path:'/',
                element:<Home></Home>
          },
          {
                path:'/product',
                element:<AllProductPage/>
          },
          {
                path:'/product/:id',
                element:<ProductDetails/>
          },
          {
                path:'/checkout',
                element: <PrivateRoute><ClickToCheckout/></PrivateRoute>
          },
          {
                path:'order/verify',
                element: <PrivateRoute><VerifyOrder/></PrivateRoute>
          },
          {
                path:'/aboutUs',
                element:<PrivateRoute><AboutUs/></PrivateRoute>
                
          },
          {
                path:'/unauthorized',
                element:<Unauthorized/>
          },
          {
                path:'login',
                element:<Login></Login>
          },
          {
               path:'registration',
               element:<Registration/>
          },
      ]
    },
    {
          path:'dashboard',
          element:<Dashboard></Dashboard>,
      //     element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          
          children: [
                // normal user routers 
                {
                      path: 'userHome',
                      element:<CustomerHome/>
                },
                {
                      path: 'profile',
                      element:<CustomerProfile/> 
                },
      
                
                // admin only routes 
                {
                      path:'adminHome',
                      element:<AdminPrivateRoute><AdminHome/></AdminPrivateRoute>
                },
                {
                      path:'allUser',
                      element: <AdminPrivateRoute><AllUser/></AdminPrivateRoute>
                },
                {
                      path:'getAllProductByAdmin',
                      element: <AdminPrivateRoute><GetAllProductBYAdmin/></AdminPrivateRoute>
                },
                {
                      path:'addProduct',
                      element: <AdminPrivateRoute><AddProduct/></AdminPrivateRoute>
                },
                {
                      path:'update-product/:id',
                      element: <AdminPrivateRoute><ProductsUpdated/></AdminPrivateRoute>
                },
                {
                      path:'adminProfile',
                      element: <AdminPrivateRoute><AdminProfile/></AdminPrivateRoute>
                },
                {
                      path:'adminOrderDeltas',
                      element: <AdminPrivateRoute><AdminOrderDetailes/></AdminPrivateRoute>
                },
                
          ]
    }
  ]);