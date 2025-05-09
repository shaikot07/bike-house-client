// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaSignOutAlt, FaTasks,  } from "react-icons/fa";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import {
//   logout,
//   selectCurrentUser,
// } from "../../../redux/features/auth/authSlice";

// const NavBar2 = () => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
//   const dispatch = useAppDispatch();
//   const user = useAppSelector(selectCurrentUser);

//   const profileRef = useRef<HTMLDivElement>(null);
//   const loading = false;

//   useEffect(() => {
//     const handleOutsideClick = (event: { target: any; }) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setIsProfileOpen(false);
//       }
//     };
//     window.addEventListener("click", handleOutsideClick);
//     return () => {
//       window.removeEventListener("click", handleOutsideClick);
//     };
//   }, []);

//   const handleSignoutFunc = () => {
//     dispatch(logout());
//   };

//   const menu = (
//     <>
//       <li>
//         <Link
//           className="rounded-none text-black font-bold border-b-0 hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
//           to={"/"}
//         >
//           Home
//         </Link>
//       </li>
//       {user ? (
//         <>
//           <li>
//             <Link
//               className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
//               to={"/products"}
//             >
//               All Product
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
//               to={"/aboutUs"}
//             >
//               About us
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
//               to={"/whyUs"}
//             >
//              Why us
//             </Link>
//           </li>
//           <li></li>
//         </>
//       ) : (
//         <>
//           <li>
//             <Link
//               className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
//               to={"/products"}
//             >
//               All Product
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
//               to={"/aboutUs"}
//             >
//               About us
//             </Link>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (

//       <div className="navbar bg-white text-black  sticky top-0 max-w-7xl mx-auto z-40 justify-between ">
//         <div className="navbar-start ">
//           {/* Hamburger Menu (only visible on small screens) */}
//           <button
//             className="btn btn-ghost lg:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu on click
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </button>
//           <a href="/" title="">
//             <img
//               className="block w-auto h-14"
//               src="https://i.ibb.co.com/KqBDrH7/bike-house.png"
//               alt="Logo"
//             />
//           </a>
//         </div>

//         {/* Menu for large screens */}
//         <div className="navbar-center hidden md:flex">
//           <ul className="menu menu-horizontal px-1">{menu}</ul>
//         </div>

//         {/* Mobile menu (visible when hamburger is clicked) */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-16 left-0 right-0 bg-white p-4 z-50 max-h-screen ">
//             <ul className="menu menu-vertical">{menu}</ul>
//           </div>
//         )}

//         <div className="navbar-end mr-8 md:mr-0">
//           {loading ? (
//             <p>Loading</p>
//           ) : user ? (
//             <>
//               <figure
//                 className="relative w-16"
//                 onClick={() => setIsProfileOpen(!isProfileOpen)}
//                 ref={profileRef}
//               >
//                 <img
//                   // alt={user.displayName}
//                   className="h-12 w-12 block cursor-pointer rounded-full border-2 border-black"
//                 />
//                 <ul
//                   className={`absolute top-full p-3 bg-slate-900 text-slate-100 border-2 border-black w-40 rounded transition-all duration-500 origin-top ${
//                     !isProfileOpen
//                       ? "opacity-0 invisible -right-10"
//                       : "opacity-100 visible right-2"
//                   }`}
//                 >
//                   {/* <Link to={"dashboard/profile"}>
//                     <li className="flex gap-2 items-center py-2 cursor-pointer">
//                       <FaUser /> My Profile
//                     </li>
//                   </Link> */}
//                   <Link to={"/dashboard"}>
//                     <li className="flex gap-2 items-center py-2 cursor-pointer">
//                       <FaTasks /> Dashboard
//                     </li>
//                   </Link>
//                   <li
//                     className="flex gap-2 items-center py-2 cursor-pointer"
//                     onClick={handleSignoutFunc}
//                   >
//                     <FaSignOutAlt /> Sign Out
//                   </li>
//                 </ul>
//               </figure>
//             </>
//           ) : (
//             <li>
//               <Link
//                 className=" bg-[#1A1D21] rounded-md px-4 py-2 text-white font-bold hover:!text-white hover:bg-[#F2355F]  transition duration-300 focus:!text-white"
//                 to={"/login"}
//               >
//                 Log In
//               </Link>
//             </li>
//           )}
//         </div>
//       </div>

//   );
// };

// export default NavBar2;

// -----------------new code with mega menu ----

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaTasks } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const NavBar2 = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const profileRef = useRef<HTMLDivElement>(null);
  const loading = false;
const cartItems = useSelector((state: RootState) => state.cart.cartItems);
const cartLength = cartItems.length;
  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSignoutFunc = () => {
    dispatch(logout());
  };

  const MegaMenu = () => (
    <div className="absolute hidden group-hover:flex group-focus:flex bg-white shadow-lg top-full left-0 w-[600px] p-6 z-40 transition-all duration-300">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Charge Up</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/products" className="hover:text-[#F2355F]">
                Mountain
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#F2355F]">
                Electric
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Rugged Path</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/products" className="hover:text-[#F2355F]">
                Gravel
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#F2355F]">
                Hybrid
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Off RoadX</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/products" className="hover:text-[#F2355F]">
                Road
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#F2355F]">
                Mountain
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const menu = (
    <>
      <li>
        <Link
          className="rounded-none text-black font-bold border-b-0 hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
          to={"/"}
        >
          Home
        </Link>
      </li>
      {user ? (
        <>
          <li className="relative group">
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              to={"/products"}
            >
              All Product
            </Link>
            <MegaMenu />
          </li>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              to={"/aboutUs"}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              to={"/whyUs"}
            >
              Why us
            </Link>
          </li>
           <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/addToCart" className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]">
              {/* Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13M7 13h10"
                />
              </svg>

              {/* Cart Count */}
              {cartLength > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartLength}
                </span>
              )}
            </Link>
          </li>
         
        </>
      ) : (
        <>
          <li className="relative group">
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              to={"/products"}
            >
              All Product
            </Link>
            <MegaMenu />
          </li>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              to={"/aboutUs"}
            >
              About us
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-white text-black sticky top-0 max-w-7xl mx-auto z-40 justify-between ">
      <div className="navbar-start ">
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <a href="/" title="">
          <img
            className="block w-auto h-14"
            src="https://i.ibb.co.com/KqBDrH7/bike-house.png"
            alt="Logo"
          />
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white p-4 z-50 max-h-screen ">
          <ul className="menu menu-vertical">
            <li>
              <Link className="text-black font-bold" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <details>
                <summary className="text-black font-bold">All Product</summary>
                <ul className="pl-4 space-y-1">
                  <li>
                    <Link to="/products">ChargeUp</Link>
                  </li>
                  <li>
                    <Link to="/products">Rugged Path</Link>
                  </li>
                  <li>
                    <Link to="/products">Off RoadX</Link>
                  </li>
                  <li>
                    <Link to="/products">Turbo Wheels</Link>
                  </li>
                  <li>
                    <Link to="/products">CUrbanX</Link>
                  </li>
                  <li>
                    <Link to="/products">Alpine Rides</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link className="text-black font-bold" to={"/aboutUs"}>
                About us
              </Link>
            </li>
            {user && (
              <li>
                <Link className="text-black font-bold" to={"/whyUs"}>
                  Why us
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="navbar-end mr-8 md:mr-0">
        {loading ? (
          <p>Loading</p>
        ) : user ? (
          <figure
            className="relative w-16"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            ref={profileRef}
          >
            <img className="h-12 w-12 block cursor-pointer rounded-full border-2 border-black" />
            <ul
              className={`absolute top-full p-3 bg-slate-900 text-slate-100 border-2 border-black w-40 rounded transition-all duration-500 origin-top ${
                !isProfileOpen
                  ? "opacity-0 invisible -right-10"
                  : "opacity-100 visible right-2"
              }`}
            >
              <Link to={"/dashboard"}>
                <li className="flex gap-2 items-center py-2 cursor-pointer">
                  <FaTasks /> Dashboard
                </li>
              </Link>
              <li
                className="flex gap-2 items-center py-2 cursor-pointer"
                onClick={handleSignoutFunc}
              >
                <FaSignOutAlt /> Sign Out
              </li>
            </ul>
          </figure>
        ) : (
          <li>
            <Link
              className=" bg-[#1A1D21] rounded-md px-4 py-2 text-white font-bold hover:!text-white hover:bg-[#F2355F]  transition duration-300 focus:!text-white"
              to={"/login"}
            >
              Log In
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default NavBar2;
