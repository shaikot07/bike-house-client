// import  { useEffect, useState } from 'react';
// import { FaAddressBook,  FaBookReader, FaHome, FaUsers, FaBars } from 'react-icons/fa';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';
// import { MdPublish } from "react-icons/md";
// import { selectCurrentUser } from '../redux/features/auth/authSlice';
// import { useSelector } from 'react-redux';
// import { FaBagShopping } from 'react-icons/fa6';
// import DashboaedNav from '../Component/DashboaedNav';

// const Dashboard = () => {
  
//     const navigate = useNavigate();
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const user = useSelector(selectCurrentUser);
//     const isAdmin = user?.role==='admin'; 

//     useEffect(() => {
//         if (isAdmin) {
//             navigate('/dashboard/adminHome');
//         } else {
//             navigate('/dashboard/userHome');
//         }
//     }, [isAdmin, navigate]);
//     // ------------for navbar user iamge and name-------- 

//     return (
//         <div className='flex h-screen'>
//             {/* Sidebar */}
//             <div className={`absolute md:relative flex flex-col z-10 max-w-52 min-h-screen bg-[#F2355F] text-white transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
//                 <button className='md:hidden p-4' onClick={() => setIsSidebarOpen(false)}>
//                     ✖
//                 </button>
//                 <div>
//                 <ul className='menu p-4 mt-10  space-y-5'>
//                     {isAdmin ? (
//                         <>
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/allUser"><FaUsers /> All Users</NavLink></li>
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/getAllProductByAdmin"><FaBookReader /> All Products</NavLink></li>
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/addProduct"><MdPublish /> Add Product</NavLink></li>
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/adminProfile"><FaAddressBook /> Admin Profile</NavLink></li>
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/adminOrderDeltas"><FaBagShopping /> Order Deltas</NavLink></li>
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/"><FaHome /> Home</NavLink></li>
//                         </>
//                     ) : (
//                         <>
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                            
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/profile"><FaAddressBook /> My Profile</NavLink></li>
                            
//                             <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/"><FaHome /> Home</NavLink></li>
//                         </>
//                     )}
//                 </ul>
//                {/* Fixed Logout Button at Absolute Bottom */}
//                <div className='mt-auto p-4 border-t border-white/20'>
//                     <button className='w-full font-bold hover:text-black focus:!text-black'>
//                         Logout
//                     </button>
//                 </div>
//                 </div>
//             </div>
            
            
//             {/* Content Area */}
//             <div className='flex-1 p-4 md:p-8'>
//                 <button className='md:hidden p-2' onClick={() => setIsSidebarOpen(true)}>
//                     <FaBars size={24} />
//                 </button>
//                 <div className='bg-amber-700'>
//                     <DashboaedNav></DashboaedNav>
//                      </div>
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import { useEffect, useState } from 'react';
import { FaAddressBook, FaBookReader, FaHome, FaUsers, FaBars, FaSignOutAlt } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdPublish } from "react-icons/md";
import { selectCurrentUser } from '../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { FaBagShopping } from 'react-icons/fa6';
import DashboaedNav from '../Component/DashboaedNav';

const Dashboard = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const user = useSelector(selectCurrentUser);
    const isAdmin = user?.role === 'admin';

    useEffect(() => {
        if (isAdmin) {
            navigate('/dashboard/adminHome');
        } else {
            navigate('/dashboard/userHome');
        }
    }, [isAdmin, navigate]);

    return (
        <div className='flex h-screen'>
            {/* Sidebar */}
            <div className={`absolute md:relative flex flex-col z-10 w-1/6 h-screen bg-[#F2355F] text-white transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <button className='md:hidden p-4' onClick={() => setIsSidebarOpen(false)}>
                    ✖
                </button>
                
                {/* Scrollable Menu Items */}
                <div className='flex-1 overflow-y-auto ml-6'>
                    <div className='mt-10 text-2xl font-semibold '><h1>Well come to Back!!</h1></div>
                    <ul className='menu p-4 space-y-5'>
                        {isAdmin ? (
                            <>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/allUser"><FaUsers /> All Users</NavLink></li>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/getAllProductByAdmin"><FaBookReader /> All Products</NavLink></li>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/addProduct"><MdPublish /> Add Product</NavLink></li>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/adminProfile"><FaAddressBook /> Admin Profile</NavLink></li>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/adminOrderDeltas"><FaBagShopping /> Order Deltas</NavLink></li>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/"><FaHome /> Home</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/dashboard/profile"><FaAddressBook /> My Profile</NavLink></li>
                                <li className='font-bold hover:text-black focus:!text-black'><NavLink to="/"><FaHome /> Home</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Fixed Logout Button at Absolute Bottom */}
                <div className='mt-auto p-4 border-t border-white/20'>
                    <button className='w-full font-bold hover:text-black focus:!text-black'>
                    <FaSignOutAlt className='inline mr-2'/> 
                        Logout
                    </button>
                </div>
            </div>
            
            {/* Content Area */}
            <div className='flex-1 flex flex-col overflow-hidden'>
                <div className='p-4 md:p-8'>
                    <button className='md:hidden p-2' onClick={() => setIsSidebarOpen(true)}>
                        <FaBars size={24} />
                    </button>
                    <div className='bg-amber-700'>
                        <DashboaedNav></DashboaedNav>
                    </div>
                </div>
                <div className='flex-1 overflow-y-auto p-4 md:p-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;