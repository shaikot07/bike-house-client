import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllProductPage from "../Pages/AllProductPage/AllProductPage";
import ProductDetails from "../Pages/AllProductPage/ProductDetails/ProductDetails";





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
                path:'login',
                element:<Login></Login>
          },
          {
               path:'registration',
               element:<Registration/>
          },
      ]
    },
    // {
    //       path:'dashboard',
    //       element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          
    //       children: [
    //             // normal user routers 
    //             {
    //                   path: 'userHome',
    //                   element:<UserHome></UserHome>
    //             },
    //             {
    //                   path: 'PremiumArticles',
    //                   element:<PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>
    //             },
    //             {
    //                   path: 'profile',
    //                   element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
    //             },
    //             {
    //                   path: 'myArticle',
    //                   element:<PrivateRoute><MyArticle></MyArticle></PrivateRoute>
    //             },
    //             {
    //                   path:'updateArticle/:id',
    //                   element:<UpdateArticle></UpdateArticle>,
                     
    //             },
                
    //             // admin only routes 
    //             {
    //                   path:'adminHome',
    //                   element:<AdminPrivateRoute><AdminHome></AdminHome></AdminPrivateRoute>
    //             },
    //             {
    //                   path:'allUser',
    //                   element:<AdminPrivateRoute><AllUser></AllUser></AdminPrivateRoute>
    //             },
    //             {
    //                   path:'allArticle',
    //                   element:<AdminPrivateRoute><AdminAllArticlePage></AdminAllArticlePage></AdminPrivateRoute>
    //             },
    //             {
    //                   path:'addPublisher',
    //                   element:<AdminPrivateRoute><AddPublisher></AddPublisher></AdminPrivateRoute>
    //             },
    //             {
    //                   path:'adminProfile',
    //                   element:<AdminPrivateRoute><AdminProfile></AdminProfile> </AdminPrivateRoute>
    //             },
                
    //       ]
    // }
  ]);