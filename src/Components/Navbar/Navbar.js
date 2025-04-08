import React, { useEffect, useState } from 'react';
import '../../App.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { FaNetworkWired } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHandsHelping, FaHome, FaPhone, FaQuoteLeft } from 'react-icons/fa';
import { TiMessages } from "react-icons/ti";
import { ImBlog } from "react-icons/im";
import "../../css/style.css";

const Navbar = () => {

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
    
        </div>,
        <div className="">
            <li className='list-item font-medium rounded-md abc hover:text-white transition-all text-black mx-2'><Link to='/assessment'><TiMessages className='text-[#1E6DEB]' />Login</Link></li>
    
        </div>,
    ];


    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-20 " style={{ backgroundColor: "rgba(225,225,225, 0.3)", backdropFilter: "blur(5px)" }} data-theme="light">
            <div className={`flex justify-between items-center h-full w-full pl-4`}>
                <div className={`w-72`} >
                    <img
                        src={logo}
                        alt=""
                        className="border-0 outline-none pt-2"
                    />
                </div>
                <div className='flex-grow flex justify-center'>
                    <div className="hidden-special-on-small md:flex">
                        <ul className="menu menu-horizontal py-5 px-1">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="hidden-special-on-large">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-blue-950 rounded-box z-20 mt-3 w-52 p-2 shadow text-black">
                                {navMenu}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mx-0 my-0 h-full">
                    <Link to={'/book/booking'}><button className='rounded-none h-full w-60 btn btn-before-bg hover:bg-white bg-[#1E6DEB] border-0 text-white group text-lg transition-all relative overflow-hidden'><p className=' z-10 group-hover:text-[#1E6DEB]' to={'/book/booking'}>BOOK APPRENT</p></button></Link>
                </div>
            </div>
        </div >
    );
};

export default Navbar;