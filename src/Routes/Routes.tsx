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
            //     {
            //           path: 'userHome',
            //           element:<UserHome></UserHome>
            //     },
            //     {
            //           path: 'PremiumArticles',
            //           element:<PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>
            //     },
            //     {
            //           path: 'profile',
            //           element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            //     },
            //     {
            //           path: 'myArticle',
            //           element:<PrivateRoute><MyArticle></MyArticle></PrivateRoute>
            //     },
            //     {
            //           path:'updateArticle/:id',
            //           element:<UpdateArticle></UpdateArticle>,
                     
            //     },
                
                // admin only routes 
                {
                      path:'adminHome',
                      element:<AdminHome></AdminHome>
                },
                {
                      path:'allUser',
                      element:<AllUser/>
                },
            //     {
            //           path:'allArticle',
            //           element:<AdminPrivateRoute><AdminAllArticlePage></AdminAllArticlePage></AdminPrivateRoute>
            //     },
            //     {
            //           path:'addPublisher',
            //           element:<AdminPrivateRoute><AddPublisher></AddPublisher></AdminPrivateRoute>
            //     },
            //     {
            //           path:'adminProfile',
            //           element:<AdminPrivateRoute><AdminProfile></AdminProfile> </AdminPrivateRoute>
            //     },
                
          ]
    }
  ]);