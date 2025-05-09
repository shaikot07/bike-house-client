
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative bg-[#1A1D21] text-[#9FA0A2] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold ">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="hover:text-[#F2355F] text-lightBlue-400 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                {/* <i className="fab fa-twitter"></i> */}
                <FaLinkedinIn />
                
              </button>
              <button
                className="hover:text-[#F2355F] text-lightBlue-600  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                 <FaInstagram />
              </button>
              <button
                className=" hover:text-[#F2355F]  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
               <FaFacebook />
              </button>
              <button
                className="hover:text-[#F2355F] font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTiktok />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase  text-sm font-semibold mb-2">
                About Us
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-[#F2355F] font-semibold block pb-2 text-sm"
                      href="/whyUs"
                    >
                    Why us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-[#F2355F] font-semibold block pb-2 text-sm"
                      href="/contact"
                    >
                     Work with us
                    </a>
                  </li>
                 
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-[#F2355F] font-semibold block pb-2 text-sm"
                      href="/aboutUs"
                    >
                    About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-[#F2355F] font-semibold block pb-2 text-sm"
                      href="/aboutUs"
                    >
                     information
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="text-blueGray-600 hover:text-[#F2355F] font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      className="text-blueGray-600 hover:text-[#F2355F] font-semibold block pb-2 text-sm"
                      href="/contact"
                    >
                      Privacy Policy
                    </a>
                  </li> */}
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-[#F2355F] font-semibold block pb-2 text-sm"
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2025</span>{" "}
             
              Saiful Islam Shaikot
              <a
               href="#"
                className="text-blueGray-500 hover:text-[#F2355F]"
              >
                {" "} All rights reserved.
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
