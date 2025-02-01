
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { toast } from "sonner";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const redirectToLogin = () => {
    navigate("/login"); // Replace "/login" with your login route
  };

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());

    // Show toast notification
    toast.success('Logout successful!');
  };
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#" title="">
                  <img
                    className="block w-auto h-14"
                    src="https://i.ibb.co.com/KqBDrH7/bike-house.png"
                    alt="Logo"
                  />
                </a>
              </div>

              {/* Navigation Links */}
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                {[
                  "Home",
                  "Best Sellers",
                  "Gift Ideas",
                  "Today's Deals",
                  "Sell",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="/"
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions Section */}
            <div className="flex items-center lg:space-x-2">
              {/* Cart Button */}
              <button
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
                <svg
                  className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Account Button */}
              {user ? (
                <button
                  id="userDropdownButton1"
                  data-dropdown-toggle="userDropdown1"
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center pbutton rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-white"
                >
                  Log Out
                </button>
              ) : (
                <button
                  id="userDropdownButton1"
                  data-dropdown-toggle="userDropdown1"
                  type="button"
                  onClick={redirectToLogin}
                  className="inline-flex items-center pbutton rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-white"
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
