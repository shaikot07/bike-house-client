/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectCurrentUser } from "../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaTasks } from "react-icons/fa";

const DashboaedNav = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const profileRef = useRef<HTMLDivElement>(null);
  const loading = false;

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

  return (
    <div className="navbar bg-gray-400 text-black  sticky top-0 w-full   justify-between ">
      <div className="navbar-start ">
      
      </div>

      <div className="navbar-end mr-8 md:mr-0">
        {loading ? (
          <p>Loading</p>
        ) : user ? (
          <>
            <figure
              className="relative w-16"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              ref={profileRef}
            >
              <img
                // alt={user.displayName}
                className="h-12 w-12 block cursor-pointer rounded-full border-2 border-[#F2355F]"
              />
              <ul
                className={`absolute top-full p-3 bg-slate-900 text-slate-100 border-2 border-black w-40 rounded transition-all duration-500 origin-top ${
                  !isProfileOpen
                    ? "opacity-0 invisible -right-10"
                    : "opacity-100 visible right-2"
                }`}
              >
                {/* <Link to={"dashboard/profile"}>
                    <li className="flex gap-2 items-center py-2 cursor-pointer">
                      <FaUser /> My Profile
                    </li>
                  </Link> */}
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
          </>
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

export default DashboaedNav;
