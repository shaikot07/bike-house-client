// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";
// import { selectCurrentUser } from "../redux/features/auth/authSlice";
// import { useState } from "react";



// // const PrivateRoute = ({children}) => {
// //     const [loading, isLoading]=useState()
// //     const user = useSelector(selectCurrentUser);
    

// //       // console.log(user);
// //       const location =useLocation();

// //       if(loading){
// //             return <progress className="progress w-56"></progress>
// //       }
// //       if(user){
// //             return children;
// //       }
// //       return <Navigate to="/login" state={{from: location}} replace></Navigate>
// // };

// // export default PrivateRoute;





import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser, useCurrentToken } from "../redux/features/auth/authSlice";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useSelector(selectCurrentUser);
    const token = useSelector(useCurrentToken);
    const location = useLocation();

    // If no token and no user, redirect to login immediately
    if (!token || !user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
