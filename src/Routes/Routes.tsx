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
import AllUser from "../Pages/DashBoard/Admin/AdminHome/Admin-user-Management/Alluser";
import AddProduct from "../Pages/DashBoard/Admin/AddProduct/AddProduct";
import GetAllProductBYAdmin from "../Pages/DashBoard/Admin/AddProduct/GetAllProductBYAdmin";
import UpdatedProduct from "../Pages/DashBoard/Admin/AddProduct/UpdatedProduct";
import ProductsUpdated from "../Pages/DashBoard/Admin/AddProduct/ProductsUpdated";
import CustomerHome from "../Pages/DashBoard/CustomerDashboard/CustomerHome";
import CustomerProfile from "../Pages/DashBoard/CustomerDashboard/CustomerProfile";





export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement:<ErrorPage></ErrorPage>,
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
                element:<ClickToCheckout/>
          },
          {
                path:'order/verify',
                element:<VerifyOrder/>
          },
          {
                path:'/aboutUs',
                element:<AboutUs/>
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
                      element:<CustomerProfile></CustomerProfile>
                },
      
                
                // admin only routes 
                {
                      path:'adminHome',
                      element:<AdminHome></AdminHome>
                },
                {
                      path:'allUser',
                      element:<AllUser/>
                },
                {
                      path:'getAllProductByAdmin',
                      element:<GetAllProductBYAdmin/>
                },
                {
                      path:'addProduct',
                      element:<AddProduct/>
                },
                {
                      path:'update-product/:id',
                      element:<ProductsUpdated/>
                },
            //     {
            //           path:'adminProfile',
            //           element:<AdminPrivateRoute><AdminProfile></AdminProfile> </AdminPrivateRoute>
            //     },
                
          ]
    }
  ]);