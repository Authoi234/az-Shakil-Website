import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaLink } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import azShakilPortfolioImage from '../../assets/azShakilPortfolioImage.png';
import plane from '../../assets/plane.png';
// import Wave from 'react-wavify'

const Footer = () => {

    return (
        <div id='footer' className='text-wrap break-words mt-20'>
            <div className="w-full flex justify-center items-center z-20 -mb-10">
                <div className='w-10/11 z-10 py-7 bg-gradient-to-r  items-center from-[#773ECB] via-[#1F50E1] to-[#37A1F7] flex justify-between' style={{}}>
                    <div>
                        <div className="w-80 mx-8">
                            <img src={plane} className='-mt-[6.5rem] w-full -rotate-[7deg]' style={{
                                filter: "drop-shadow(rgba(254, 254, 254, 0.5) 33px 32px 25px)"
                            }} alt="" />
                        </div>
                        <div className="join pl-16 py-3">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                class="input h-12 input-bordered rounded-full join-item text-base" />
                            <button className="btn btn-primary join-item rounded-full h-12 text-base ">Subscribe</button>
                        </div>
                    </div>
                    <div className='text-white pr-10 '>
                        <h3 className="text-2xl font-semibold">Stay connected with us for the latest <br /> updates, news, and educational <br /> opportunities.</h3>
                    </div>


                </div>
            </div >
            <div className="w-full flex justify-center items-center">
                <footer className="rounded-t-3xl footer bg-transparent text-neutral-content pt-24 pb-10 pl-16 pr-5 border-t-8 border-t-blue-700 " style={{
                    backgroundImage: "url(https://web.programming-hero.com/home/footer/footer-bg.png)", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat",
                }}>
                    <div className="flex justify-evenly w-full">
                        <div>
                            <aside className='w-full max-w-sm'>
                                <div className={``} >
                                    <img src={logo} className={`w-80 py-2 rounded-x`} alt="" />
                                </div>
                                <p className='text-base text-black'>
                                    Cqube International, Since 2019
                                </p>
                                <p className='text-base text-black'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                                <p className='pt-1 text-base text-black' style={{
                                    textAlign: "justify",
                                    textJustify: "  We are a government approved licensed organization and we have the expertise to prepare students and their VISA, passport.We take you to aboard for your dream come true.We will take you to world’s top public & private Universities and Colleges. we will take you to Canada, America, Australia, Britain/UK/England and many more."
                                }}>
                                    We are a government approved licensed organization and we have the expertise to prepare students and their VISA, passport.We take you to aboard for your dream come true.We will take you to world’s top public & private Universities and Colleges. we will take you to Canada, America, Australia, Britain/UK/England and many more.
                                </p>
                            </aside>
                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 text-black'>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="opacity-65 text-xl uppercase mb-2 font-medium">Services</h6>
                                <a className="link link-hover text-base">Branding</a>
                                <a className="link link-hover text-base">Design</a>
                                <a className="link link-hover text-base">Marketing</a>
                                <a className="link link-hover text-base">Advertisement</a>
                            </nav>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="opacity-65 text-xl uppercase mb-2 font-medium">Company</h6>
                                <a className="link link-hover text-base">About us</a>
                                <a className="link link-hover text-base">Contact</a>
                                <a className="link link-hover text-base">Jobs</a>
                                <a className="link link-hover text-base">Press kit</a>
                            </nav>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="opacity-65 text-xl uppercase mb-2 font-medium">Legal</h6>
                                <a className="link link-hover text-base">Terms of use</a>
                                <a className="link link-hover text-base">Privacy policy</a>
                                <a className="link link-hover text-base">Cookie policy</a>
                            </nav>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    );
};

export default Footer;