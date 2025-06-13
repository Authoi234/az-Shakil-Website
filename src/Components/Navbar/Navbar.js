import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import logo from "../../assets/logo.png";
import logoIcon from "../../assets/logoIcon-bgless.png";
import { Link, useNavigate } from 'react-router-dom';
import { FaNetworkWired, FaRegHandshake } from "react-icons/fa6";
import { MdDashboard, MdOutlineReviews } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHandsHelping, FaHome, FaPhone, FaQuoteLeft } from 'react-icons/fa';
import { TiMessages } from "react-icons/ti";
import { ImBlog } from "react-icons/im";
import { AiOutlineLogin } from "react-icons/ai";
import "../../css/style.css";
import { AuthContext } from '../../context/AuthProvider';
import useUserProfile from '../../hooks/useUserProfile';

const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const { data: userProfile, isLoading } = useUserProfile(user?.email);

    const handleDashboardClick = () => {
        if (isLoading) return; // skip if loading

        console.log("user Profile", userProfile);
        console.log("user", user);
        if (!user) {
            navigate('/login');
        } else if (userProfile?.role === 'admin') {
            navigate('/admin/dashboard');
        } else if (userProfile?.role === 'partner') {
            navigate('/partner/dashboard');
        } else {
            navigate('/');
        }
    };


    const navMenu = [
        <div className="dropdown dropdown-hover">
            <li className='list-item font-medium rounded-md abc hover:text-white transition-all text-black mx-2'><Link to='/'><FaHome className='text-[#1E6DEB]' ></FaHome> Home</Link></li>
            <div className="dropdown-content menu bg-base-100 min-w-fit w-full rounded-box z-[1] p-2 shadow">
                <div className="flex justify-center gap-3">
                    <ul className='gap-1'>
                        <li className='list-item my-2'><a href='#services-sect'> <SiAmazonsimpleemailservice className='text-[#1E6DEB]' /> Services</a></li>
                        <li className='list-item my-2'><a href='#about-us-sect'> <FcAbout className='text-[#1E6DEB]' /> About Us</a></li>
                        <li className='list-item my-2'><a href='#contact-us'> <FaPhone className='text-[#1E6DEB]' /> Contact Us</a></li>
                    </ul>
                    <ul className='gap-1'>
                        <li className='list-item my-2'><a href='#reviews-sect'><MdOutlineReviews className='text-[#1E6DEB]' /> Reviews</a></li>
                        <li className='list-item my-2'><a href='#contributions-sect'> <FaNetworkWired className='text-[#1E6DEB]' /> Contributions</a></li>
                        <li className='list-item my-2'><a href='#faq-sect'> <FaQuoteLeft className='text-[#1E6DEB]' /> FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>,
        <div className="dropdown dropdown-hover">
            <li className='list-item font-medium rounded-md abc hover:text-white transition-all text-black mx-2'><Link to='/'><GiCommercialAirplane className='text-[#1E6DEB]' /> Study Abroad</Link></li>
            <div className="dropdown-content menu bg-base-100 min-w-fit w-full rounded-box z-[1] p-2 shadow">
                <div className="flex justify-center gap-3">
                    <ul className='gap-1'>
                        <li className='list-item my-2'><a href='#visa-categories'> <BiSolidCategoryAlt className='text-[#1E6DEB]' ></BiSolidCategoryAlt> Visa Categories</a></li>
                        <li className='list-item my-2'><a href='#countries-sect'> <LiaGlobeAmericasSolid className='text-[#1E6DEB]' /> Countries</a></li>
                    </ul>
                    <ul className='gap-1'>
                        <li className='list-item my-2'><a href='#coaching-sect'> <FaHandsHelping className='text-[#1E6DEB]'></FaHandsHelping> Coaching We Offer</a></li>
                    </ul>
                </div>
            </div>
        </div>,
        <div className="dropdown dropdown-hover">
            <li className='list-item font-medium rounded-md abc hover:text-white transition-all text-black mx-2'><Link to='/'><ImBlog className='text-[#1E6DEB]' />Blogs</Link></li>
            <div className="dropdown-content menu bg-base-100 min-w-fit w-full rounded-box z-[1] p-2 shadow">
                <div className="flex justify-center gap-3">
                    <ul className='gap-1'>
                    </ul>
                </div>
            </div>
        </div>,
        <div className="">
            <li className='list-item font-medium rounded-md abc hover:text-white transition-all text-black mx-2'><Link to='/assessment'><TiMessages className='text-[#1E6DEB]' />Free Assessment</Link></li>
        </div>
    ];


    const mobileNavItems = (
        <ul className="menu menu-vertical lg:menu-horizontal w-full lg:w-auto bg-white px-4 py-2 gap-2 overflow-y-visible">
            {/* Home */}
            <li className="dropdown overflow-y-auto">
                <details>
                    <summary>
                        <Link to="/"><FaHome className="text-[#1E6DEB]" /> Home</Link>
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-box shadow-lg">
                        <li><a href="#services-sect"><SiAmazonsimpleemailservice className="text-[#1E6DEB]" /> Services</a></li>
                        <li><a href="#about-us-sect"><FcAbout className="text-[#1E6DEB]" /> About Us</a></li>
                        <li><a href="#contact-us"><FaPhone className="text-[#1E6DEB]" /> Contact Us</a></li>
                        <li><a href="#reviews-sect"><MdOutlineReviews className="text-[#1E6DEB]" /> Reviews</a></li>
                        <li><a href="#contributions-sect"><FaNetworkWired className="text-[#1E6DEB]" /> Contributions</a></li>
                        <li><a href="#faq-sect"><FaQuoteLeft className="text-[#1E6DEB]" /> FAQ</a></li>
                    </ul>
                </details>
            </li>

            {/* Study Abroad */}
            <li className="dropdown overflow-y-auto">
                <details>
                    <summary>
                        <Link to="/"><GiCommercialAirplane className="text-[#1E6DEB]" /> Study Abroad</Link>
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-box shadow-lg">
                        <li><a href="#visa-categories"><BiSolidCategoryAlt className="text-[#1E6DEB]" /> Visa Categories</a></li>
                        <li><a href="#countries-sect"><LiaGlobeAmericasSolid className="text-[#1E6DEB]" /> Countries</a></li>
                        <li><a href="#coaching-sect"><FaHandsHelping className="text-[#1E6DEB]" /> Coaching We Offer</a></li>
                    </ul>
                </details>
            </li>

            {/* Blogs */}
            <li>
                <Link to="/"><ImBlog className="text-[#1E6DEB] overflow-y-auto" /> Blogs</Link>
            </li>

            {/* Free Assessment */}
            <li>
                <Link to="/assessment"><TiMessages className="text-[#1E6DEB] overflow-y-auto" /> Free Assessment</Link>
            </li>
        </ul>
    );

    return (
        <div className="fixed top-0 left-0 right-0 z-50 ">
            <div className=" hidden-special-on-small md:flex h-[30px]" style={{ backgroundColor: "#16171A" }} data-theme="light">
                <div className={`max-w-[1242px] flex justify-end ml-auto items-center h-full px-4  `}>
                    <div className='flex justify-end w-full'>
                        <div className="">
                            <ul className="menu menu-horizontal py-5 px-0">
                                <li className='list-item font-medium rounded-md abc text-white transition-all mx-2'><Link to='/partnership/request'><FaRegHandshake className='text-[#1E6DEB]' />Partner</Link></li>
                                {user ? (
                                    <li className='list-item font-medium rounded-md abc text-white transition-all ml-2 '>
                                        <button
                                            onClick={handleDashboardClick}
                                            disabled={isLoading} // prevent click until profile loaded
                                            className={`${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <MdDashboard className='text-[#1E6DEB]' />Dashboard
                                        </button>
                                    </li>
                                ) : (
                                    <li className='list-item font-medium rounded-md abc text-white transition-all ml-2 '>
                                        <Link to='/auth/login'><AiOutlineLogin className='text-[#1E6DEB]' />Login</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
            <div className="h-[70px]" style={{ backgroundColor: "rgba(225,225,225, 0.3)", backdropFilter: "blur(5px)" }} data-theme="light">
                <div className={`container mx-auto flex justify-between items-center my-auto h-full px-4 `}>
                    <div className={`md:w-52 flex justify-center items-center mx-auto my-auto  w-[65px]`} >
                        <img
                            src={logo}
                            alt=""
                            className="border-0 my-auto outline-none pt-2 hidden hidden-special-on-small md:flex"
                        />
                        <div className="dropdown">
                            <img
                                src={logoIcon}
                                alt=""
                                tabIndex={0}
                                role="button"
                                className="border-0 cursor-pointer  outline-none pt-2 hidden-special-on-large"
                            />
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white rounded-box z-20 mt-3 w-52 p-2 shadow text-black">
                                {mobileNavItems}
                            </ul>
                        </div>
                    </div>
                    <div className=' flex-grow flex justify-end'>
                        <div className="hidden-special-on-small md:flex">
                            <ul className="menu menu-horizontal py-5 px-1">
                                {navMenu}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-end  mx-0 my-0 h-full">
                        <Link to={'/book/booking'}><button className='rounded-none h-full max-w-44 w-auto btn btn-before-bg relative hover:bg-white bg-[#1E6DEB] border-0 text-white group text-base transition-all '><p className=' z-10 group-hover:text-[#1E6DEB]' to={'/book/booking'}>BOOK NOW</p></button></Link>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Navbar;