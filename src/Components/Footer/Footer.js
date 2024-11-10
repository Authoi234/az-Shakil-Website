import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord, FaLink } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import azShakilPortfolioImage from '../../assets/azShakilPortfolioImage.png';



const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#0F172A] text-neutral-content p-10">
                <aside>
                    <img src={logo} className='w-80 py-2 rounded-xl bg-white p-4' alt="" />
                    <p className='text-base'>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <p className='text-base'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    <div className="flex justify-around items-start">
                        <div className='mx-7'>
                            <h6 className="text-xl">Social</h6>
                            <a href="https://www.youtube.com/AZShakilYT" target='_blank' rel='noreferrer' className='text-4xl mx-0 my-0 px-0 py-0 w-0 '><FaYoutube className='text-red-600 bg-white rounded-full p-1 mx-1 my-1'></FaYoutube></a>
                            <a href="https://www.facebook.com/infoAZS/" target='_blank' rel='noreferrer' className='text-4xl mx-0 my-0 px-0 py-0 w-0'><FaFacebook className='text-blue-500 bg-white p-1 rounded-full mx-1 my-1'></FaFacebook></a>
                            <a href="https://twitter.com/iazshakil?fbclid=IwZXh0bgNhZW0CMTAAAR3bswr6WAETdosCktBw8l6tLGEgPO2HRLFxe_-qAkizehKptDnawH4SEkE_aem_9sMli_2M2qTt13tZlmqYfw" target='_blank' rel='noreferrer' className='text-4xl mx-0 my-0 px-0 py-0 w-0'><FaTwitter className='text-cyan-500 bg-white rounded-full p-1 mx-1 my-1'></FaTwitter></a>
                            <a href="https://www.linkedin.com/in/iazshakil/" target='_blank' rel='noreferrer' className='text-4xl mx-0 my-0 px-0 py-0 w-0'><FaLinkedin className='text-cyan-500 bg-white rounded-full p-1 mx-1 my-1'></FaLinkedin></a>
                            <a href="https://t.me/iazshakil" target='_blank' rel='noreferrer' className='text-4xl mx-0 my-0 px-0 py-0 w-0'><FaTelegram className='text-cyan-500 bg-white rounded-full p-1 mx-1 my-1'></FaTelegram></a>
                        </div>
                        <div className='mx-7'>
                            <h2 className='text-xl mt-0.5'>Mail</h2>
                            <p className='text-base mb-1 text-slate-300 flex items-center'><IoIosMail className='text-2xl mx-1 bg-gradient-to-r via-green-500 rounded-lg from-red-600 to-blue-700'></IoIosMail> <span className='text-base'> hi@azshakil.com</span></p>
                            <h2 className='text-xl mt-1'>Mobile</h2>
                            <p className='text-base mb-1 text-slate-300 flex items-center'><IoIosCall className='text-2xl mx-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-md'></IoIosCall  > <span className='text-base'> hi@azshakil.com</span></p>
                            <h2 className='text-xl mt-1 flex items-center'>Website <a href="https://azshakil.com/" target='_blank' rel='noreferrer'> <img className='w-8 mx-1' src={azShakilPortfolioImage} alt="" /></a></h2>
                            <p className='text-base mb-1 text-slate-300 flex items-center' ><FaLink className='text-2xl mx-1 text-white'></FaLink> <span className='text-base'><a href="https://azshakil.com/" target="_blank" rel="noopener noreferrer">https://azshakil.com/</a></span></p>
                        </div>
                    </div>
                </aside>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20'>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Social</h6>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Instagram</a>
                        <a className="link link-hover">Facebook</a>
                        <a className="link link-hover">Github</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Explore</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Enterprise</a>
                        <a className="link link-hover">Security</a>
                        <a className="link link-hover">Pricing</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Apps</h6>
                        <a className="link link-hover">Mac</a>
                        <a className="link link-hover">Windows</a>
                        <a className="link link-hover">iPhone</a>
                        <a className="link link-hover">Android</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;