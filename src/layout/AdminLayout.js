import React, { useContext, useEffect, useState } from 'react';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../context/AuthProvider';
import { Link, Outlet } from 'react-router-dom';
import logo from "../assets/logo.png";
import { motion } from 'framer-motion';
import { FaHome, FaEdit, FaCalendarPlus, FaUserFriends, FaBell, FaCog, FaEnvelope } from "react-icons/fa";
import { RiChatHistoryFill } from "react-icons/ri";
import { useQuery } from '@tanstack/react-query';
import { GiConversation } from "react-icons/gi";
import logoIcon from "../assets/logoIcon-bgless.png";
import { MdSupportAgent } from "react-icons/md";
import useTitle from '../hooks/useTitle';
import useMetaDiscription from '../hooks/useMetaDiscription';
import { Helmet } from 'react-helmet-async';

const AdminLayout = () => {
    useTitle("Admin")
    useMetaDiscription("Admin portal for user management, content publishing, and partnership tracking. Real-time analytics and permissions control for seamless operations.");
    const { user, logOut } = useContext(AuthContext)
    const [adminData, setAdminData] = useState(null);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://az-shakil-website-server.vercel.app/users`);
            const data = await res.json();
            return data;
        },
    });

    useEffect(() => {
        if (users) {
            const admin = users?.find(user => user?.role === "admin");
            setAdminData(admin);
        }
    }, [users])

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);


    // Animation variants for Framer Motion
    const drawerVariants = {
        open: { width: "250px", opacity: 1 },
        closed: { width: "80px", opacity: 1 },
    };

    const iconVariants = {
        hover: { scale: 1.1, backgroundColor: "rgba(0,0,0,0.1)", transition: { duration: 0.2 } },
        tap: { scale: 0.9 },
    }

    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://apprent.azshakil.com/admin/dashboard" />
            </Helmet>
            <div className="z-50 h-20 shadow-md" data-theme="light">
                <div className={`container mx-auto flex justify-between items-center h-full`}>
                    <div className={`md:w-64 w-10 border-0 outline-none pt-2`} >
                        <img
                            src={logo}
                            alt=""
                            className="border-0 outline-none pt-2 hidden hidden-special-on-small md:flex"
                        />
                        <img
                            src={logoIcon}
                            alt=""
                            className="border-0 outline-none pt-2 hidden-special-on-large"
                        />
                    </div>
                    <div className="navbar-center">
                        <label htmlFor="dashboard-drawer" tabIndex={2} role="button" className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>

                    <div className='flex justify-center items-center'>
                        <p className='text-lg text-black mr-2'>{adminData?.name}</p>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="cursor-pointer bg-white border-0 outline-0 m-1">
                                <div className="btn cursor-pointer btn-circle avatar">
                                    <div className="w-20 rounded-full bg-white">
                                        <img
                                            alt="Profile of Partner"
                                            src={adminData?.imgUrl} />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu  bg-white rounded-box z-40 font-medium w-52 p-2 shadow-sm">
                                <li>
                                    <a className=" justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li className='bg-red-600 text-white' onClick={() => { logOut() }}><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-base-100">
                        <motion.div
                            className="h-full overflow-hidden"
                            initial={false}
                            animate={isDrawerOpen ? "open" : "closed"}
                            variants={drawerVariants}
                        >
                            <div className="flex flex-col items-center justify-start py-4">
                                {/* Navigation Icons */}
                                <nav className="flex flex-col space-y-6 w-full">
                                    {/* Home */}
                                    <Link to={"/admin/dashboard"}>
                                        <motion.a
                                            className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                                } items-center text-base`}
                                            variants={iconVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <FaHome size={24} />
                                            {isDrawerOpen && <span className="ml-2">Home</span>}
                                        </motion.a>
                                    </Link>

                                    {/* Appointments */}
                                    <Link to={"/admin/appointments"}>
                                        <motion.a
                                            className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                                } items-center text-base`}
                                            variants={iconVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <GiConversation size={24} />
                                            {isDrawerOpen && <span className="ml-2">Appointments</span>}
                                        </motion.a>
                                    </Link>

                                    {/* Appointments History */}
                                    <Link to={"/admin/appointments-history"}>
                                        <motion.a
                                            className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                                } items-center text-base`}
                                            variants={iconVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <RiChatHistoryFill size={24} />
                                            {isDrawerOpen && <span className="ml-2">Appointments History</span>}
                                        </motion.a>
                                    </Link>

                                    {/* Agents/Partnership */}
                                    <Link to={"/admin/partnershipRequests"}>
                                        <motion.a
                                            href="#"
                                            className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                                } items-center text-base`}
                                            variants={iconVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <MdSupportAgent size={24} />
                                            {isDrawerOpen && <span className="ml-2">Partnership</span>}
                                        </motion.a>
                                    </Link>

                                    {/* Write a Post/Article */}
                                    <Link to={"/admin/write-post"}>
                                        <motion.a
                                            className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                                } items-center text-base`}
                                            variants={iconVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <FaEdit size={24} />
                                            {isDrawerOpen && <span className="ml-2">Write Post</span>}
                                        </motion.a>
                                    </Link>

                                    {/* Add Slots */}
                                    <motion.a
                                        href="#"
                                        className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                            } items-center text-base`}
                                        variants={iconVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <FaCalendarPlus size={24} />
                                        {isDrawerOpen && <span className="ml-2">Add Slots</span>}
                                    </motion.a>

                                    {/* Friends */}
                                    <motion.a
                                        href="#"
                                        className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                            } items-center text-base`}
                                        variants={iconVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <FaUserFriends size={24} />
                                        {isDrawerOpen && <span className="ml-2">Applicants</span>}
                                    </motion.a>

                                    {/* Notifications */}
                                    <motion.a
                                        href="#"
                                        className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                            } items-center text-base`}
                                        variants={iconVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <FaBell size={24} />
                                        {isDrawerOpen && <span className="ml-2">Notifications</span>}
                                    </motion.a>

                                    {/* Settings */}
                                    <motion.a
                                        href="#"
                                        className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                            } items-center text-base`}
                                        variants={iconVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <FaCog size={24} />
                                        {isDrawerOpen && <span className="ml-2">Settings</span>}
                                    </motion.a>
                                </nav>
                            </div>
                        </motion.div>
                    </ul>
                </div>
            </div>
        </div >
    )
};

export default AdminLayout;