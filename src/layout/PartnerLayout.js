import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaChartBar, FaUsers, FaRocket, FaBell } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { IoCloseSharp, IoLayersSharp, IoMenu } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { FiMessageSquare } from 'react-icons/fi';
import logo from "../assets/white-logo.png";
import logoIcon from "../assets/logoIcon-bgless.png";
import useUserProfile from '../hooks/useUserProfile';
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../hooks/useTitle';
import { Helmet } from 'react-helmet-async';


const PartnerLayout = () => {
    useTitle('Partner Dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { logOut, user } = useContext(AuthContext)
    const { data: partnerData, isLoading } = useUserProfile(user?.email);
    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter">
                {/* Sidebar */}
                <motion.aside
                    initial={false}
                    // Animate width based on sidebar open state
                    animate={{ width: isSidebarOpen ? '280px' : '80px' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-gray-800 shadow-xl overflow-hidden
                            md:relative md:translate-x-0 transition-all duration-300 ease-in-out
                            ${isSidebarOpen ? 'w-[280px]' : 'w-[80px]'}
                            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                            md:flex`} // Ensure sidebar is visible on md screens
                >
                    {/* Sidebar Header/Logo */}
                    <div className="flex items-center justify-center h-20 bg-gray-900 shadow-md p-4">
                        <FaRocket size={32} className="text-blue-400 mr-2" />
                        <motion.span
                            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                            initial={{ opacity: 0 }}
                            // Animate opacity based on sidebar open state
                            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            Nebula
                        </motion.span>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="flex-1 p-4 space-y-3">
                        {/* Dashboard Link */}
                        <motion.a
                            href="/admin/dashboard" // Link to the dashboard page
                            className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-blue-600 hover:text-white transition duration-200 group relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaHome size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                // Animate text visibility based on sidebar open state
                                animate={{ opacity: isSidebarOpen ? 1 : 0, x: isSidebarOpen ? 0 : -10 }}
                                transition={{ duration: 0.2 }}
                                className="whitespace-nowrap"
                            >
                                Dashboard
                            </motion.span>
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </motion.a>

                        {/* Analytics Link */}
                        <motion.a
                            href="/admin/analytics" // Example link for analytics
                            className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-purple-600 hover:text-white transition duration-200 group relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaChartBar size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: isSidebarOpen ? 1 : 0, x: isSidebarOpen ? 0 : -10 }}
                                transition={{ duration: 0.2 }}
                                className="whitespace-nowrap"
                            >
                                Analytics
                            </motion.span>
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </motion.a>

                        {/* Users Link */}
                        <motion.a
                            href="/admin/users" // Example link for users
                            className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-green-600 hover:text-white transition duration-200 group relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaUsers size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: isSidebarOpen ? 1 : 0, x: isSidebarOpen ? 0 : -10 }}
                                transition={{ duration: 0.2 }}
                                className="whitespace-nowrap"
                            >
                                Users
                            </motion.span>
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </motion.a>

                        {/* Projects Link */}
                        <motion.a
                            href="/admin/projects" // Example link for projects
                            className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-indigo-600 hover:text-white transition duration-200 group relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <IoLayersSharp size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: isSidebarOpen ? 1 : 0, x: isSidebarOpen ? 0 : -10 }}
                                transition={{ duration: 0.2 }}
                                className="whitespace-nowrap"
                            >
                                Projects
                            </motion.span>
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </motion.a>

                        {/* Settings Link */}
                        <motion.a
                            href="/admin/settings" // Example link for settings
                            className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-orange-600 hover:text-white transition duration-200 group relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <IoMdSettings size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: isSidebarOpen ? 1 : 0, x: isSidebarOpen ? 0 : -10 }}
                                transition={{ duration: 0.2 }}
                                className="whitespace-nowrap"
                            >
                                Settings
                            </motion.span>
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </motion.a>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-gray-700 mt-auto">
                        <p className="text-sm text-gray-500 text-center">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                © 2024 Nebula.
                            </motion.span>
                        </p>
                    </div>

                    {/* Sidebar Toggle Button (Mobile) */}
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden absolute top-4 -right-12 z-50 p-2 bg-gray-700 rounded-full text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {isSidebarOpen ? <IoCloseSharp size={24} /> : <IoMenu size={24} />}
                    </button>
                </motion.aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Bar */}
                    <header className="flex items-center justify-between h-20 bg-gray-800 shadow-lg px-6 py-4 z-40">
                        {/* Hamburger menu for mobile */}
                        <button
                            onClick={toggleSidebar}
                            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                        >
                            {isSidebarOpen ? <IoCloseSharp size={24} /> : <IoMenu size={24} />}
                        </button>

                        <h1 className="text-3xl font-extrabold flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
                            <img
                                src={logo}
                                alt=""
                                className="border-0 w-56 outline-none pt-2 md:flex"
                            />
                        </h1>

                        <div className="flex items-center space-x-4">
                            {/* Notifications Icon */}
                            <motion.button
                                className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition duration-200 relative"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaBell size={24} />
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-gray-800 bg-red-500"></span>
                            </motion.button>

                            {/* Messages Icon */}
                            <motion.button
                                className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FiMessageSquare size={24} />
                            </motion.button>

                            {/* User Avatar */}
                            <div className='flex justify-center items-center'>
                                <p className='text-lg text-white mr-2'>{partnerData?.name}</p>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="cursor-pointer bg-[#1F2937] border-0 outline-0 m-1">
                                        <div className="btn cursor-pointer btn-circle avatar">
                                            <div className="w-20 rounded-full bg-[#1F2937]">
                                                <img
                                                    alt="Profile of Partner"
                                                    src={partnerData?.imgUrl} />
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu font-medium  bg-[#1F2937] rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li>
                                            <a className=" justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li className='bg-red-600' onClick={() => { logOut() }}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* This is where the nested routes (like DashboardPage) will be rendered */}
                    <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
};

export default PartnerLayout;