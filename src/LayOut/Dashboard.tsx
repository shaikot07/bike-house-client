import React, { useEffect, useState } from 'react';
import { FaAddressBook, FaBook, FaBookReader, FaHome, FaUsers, FaBars } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdPublish } from "react-icons/md";

const Dashboard = () => {
    const isAdmin = true;
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <div className={`absolute md:relative z-10 w-64 min-h-screen bg-[#B80000] text-white transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <button className='md:hidden p-4' onClick={() => setIsSidebarOpen(false)}>
                    ✖
                </button>
                <ul className='menu p-4'>
                    {isAdmin ? (
                        <>
                            <li><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/allUser"><FaUsers /> All Users</NavLink></li>
                            <li><NavLink to="/dashboard/allArticle"><FaBookReader /> All Articles</NavLink></li>
                            <li><NavLink to="/dashboard/addPublisher"><MdPublish /> Add Publisher</NavLink></li>
                            <li><NavLink to="/dashboard/adminProfile"><FaAddressBook /> Admin Profile</NavLink></li>
                            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/PremiumArticles"><FaBook /> Premium Articles</NavLink></li>
                            <li><NavLink to="/dashboard/profile"><FaAddressBook /> My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/myArticle"><FaBookReader /> My Articles</NavLink></li>
                            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                        </>
                    )}
                </ul>
            </div>
            
            {/* Content Area */}
            <div className='flex-1 p-4 md:p-8'>
                <button className='md:hidden p-2' onClick={() => setIsSidebarOpen(true)}>
                    <FaBars size={24} />
                </button>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
