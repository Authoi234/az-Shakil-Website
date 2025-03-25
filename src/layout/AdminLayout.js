import React, { useContext, useState } from 'react';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../context/AuthProvider';
import { Link, Outlet } from 'react-router-dom';
import logo from "../assets/logo.png";
import { motion } from 'framer-motion';
import { FaHome, FaEdit, FaCalendarPlus, FaUserFriends, FaBell, FaCog } from "react-icons/fa";
import { FaBars } from 'react-icons/fa6';

const AdminLayout = () => {
    const { user } = useContext(AuthContext)

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    // Toggle drawer visibility
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

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
            <div className="z-50 h-20 shadow-md" data-theme="light">
                <div className={`container mx-auto flex justify-between items-center h-full`}>
                    <div className={`w-72 border-0 outline-none pt-2`} >
                        <img
                            src={logo}
                            alt=""
                        />
                    </div>

                    <div className="pt-2 mt-5 h-full">
                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-20 rounded-full">
                                    <img
                                        alt="Profile of AzShakil"
                                        src="https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-1/372915154_716579217150448_8459710957527313208_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=Ze0q-xy9HKQQ7kNvgFx35-3&_nc_oc=Adl0PVuIzlECKeWHJPm2FWZr-j2amiEpbiF4z0uVs9CMNdkZFpeYBUHk_tYJmy_7-_Y&_nc_zt=24&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=dICWwHyoeZncOiT4Py3W4g&oh=00_AYEyOjkGy8XPNHa2YG4vTcObh0Vxhvy-XH4UuxTt_SiE0g&oe=67E4F3FC" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            <div className="fixed left-0 h-full shadow-black shadow-lg flex">
                {/* Drawer */}
                <motion.div
                    className="h-full overflow-hidden bg-base-200"
                    initial={false}
                    animate={isDrawerOpen ? "open" : "closed"}
                    variants={drawerVariants}
                >
                    <div className="flex flex-col items-center justify-start py-4">
                        {/* Burger Menu */}
                        <motion.button
                            onClick={toggleDrawer}
                            className={`mb-8 text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                } items-center w-full`}
                            variants={iconVariants}
                            whileHover={"hover"}
                            whileTap="tap"
                        >
                            <FaBars size={24} />
                        </motion.button>

                        {/* Navigation Icons */}
                        <nav className="flex flex-col space-y-6 w-full">
                            {/* Home */}
                            <motion.a
                                href="#"
                                className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                    } items-center text-base`}
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FaHome size={24} />
                                {isDrawerOpen && <span className="ml-2">Home</span>}
                            </motion.a>

                            {/* Write a Post/Article */}
                            <motion.a
                                href="#"
                                className={`text-gray-700 hover:text-[#1E6DEB] transition duration-300 flex p-2 ${isDrawerOpen ? "justify-start pl-4" : "justify-center"
                                    } items-center text-base`}
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FaEdit size={24} />
                                {isDrawerOpen && <span className="ml-2">Write Post</span>}
                            </motion.a>

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
            </div>
            <Outlet></Outlet>
        </div>
    )
};

export default AdminLayout;