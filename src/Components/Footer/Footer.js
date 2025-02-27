import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaLink } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import azShakilPortfolioImage from '../../assets/azShakilPortfolioImage.png';



const Footer = ({isFooterVisible}) => {
    return (
        <div id='footer' className='text-wrap break-words'>
            <footer className="rounded-t-3xl footer bg-[#0F172A] text-neutral-content pt-20 pb-10 pl-16 pr-5">
                <aside className='w-full max-w-sm'>
                    <div className="relative">
                        <img src={logo} className='w-80 py-2 rounded-xl bg-white p-4' alt="" />
                        {isFooterVisible && (
                            <img
                                src={logo}
                                className='logo-animate-footer absolute top-0 left-0 w-80 py-2 rounded-xl bg-white p-4'
                                alt=""
                            />
                        )}
                    </div>
                    <p className='text-base'>
                        Cqube Internationa Since 2019
                    </p>
                    <p className='text-base'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    <p className='pt-1 text-base'>
                        We are a government approved licensed organization and we have the expertise to prepare students and their VISA, passport.We take you to aboard for your dream come true.We will take you to world’s top public & private Universities and Colleges. we will take you to Canada, America, Australia, Britain/UK/England and many more.
                    </p>
                </aside>
                {/* Rest of the footer code */}
            </footer>
        </div>
    );
};

export default Footer;