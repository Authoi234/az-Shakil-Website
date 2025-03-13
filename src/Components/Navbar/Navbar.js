import React, { useEffect, useState } from 'react';
import '../../App.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navMenu = [
        <li className='list-item font-medium rounded-md abc hover:text-white transition-all text-black mx-5'><Link to='/'>Home</Link></li>,
        <li className='list-item font-medium rounded-md abc hover:text-white transition-all text-black mx-5' ><a href='/'>Study Abroad</a></li>,
        <li className='list-item font-medium rounded-md abc hover:text-white transition-all text-black mx-5' ><a href='/'>Institutions</a></li>,
    ];


    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-sm " style={{ backgroundColor: "rgba(225,225,225, 0.3)" }} data-theme="light">
            <div className={`container mx-auto flex justify-between items-center h-full`}>
                <div className={`w-72 border-0 outline-none pt-2`} >
                    <img
                        src={logo}
                        alt=""
                    />
                </div>
                <div className='flex items-center '>
                    <div className="hidden-special-on-small md:flex">
                        <ul className="menu menu-horizontal px-1">
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
                <button className='rounded-full  text-white font-normal h-8 px-2 py-0 bg-gradient-to-r from-pink-500 to-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent transition-all'><Link to={'/book/booking'}>Book Now</Link></button>
            </div>
        </div >
    );
};

export default Navbar;