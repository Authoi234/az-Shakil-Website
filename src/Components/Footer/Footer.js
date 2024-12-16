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



const Footer = () => {
    return (
        <div className='text-wrap break-words'>
            <footer className="footer bg-[#0F172A] text-neutral-content pt-20 pb-10 pl-16 pr-5">
                <aside className='w-full max-w-sm'>
                    <img src={logo} className='w-80 py-2 rounded-xl bg-white p-4' alt="" />
                    <p className='text-base'>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <p className='text-base'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    <p className='pt-1 text-base'>
                        We are a government approved licensed organization and we have the expertise to prepare students and their VISA, passport.We take you to aboard for your dream come true.We will take you to world’s top public & private Universities and Colleges. we will take you to Canada, America, Australia, Britain/UK/England and many more.
                    </p>
                </aside>
                <div>
                    <div className="flex w-full">
                        <div className='mx-7'>
                            <h6 className="text-xl">Social</h6>
                            <div className='flex gap-2 justify-center flex-wrap'>
                                <a href="https://www.youtube.com/AZShakilYT" target='_blank' rel='noreferrer' className='leading-10 text-[2.7rem] '><FaYoutube className='text-red-600 bg-white rounded-full p-1 mx-0 my-1'></FaYoutube></a>
                                <a href="https://www.facebook.com/infoAZS/" target='_blank' rel='noreferrer' className='leading-10 text-[2.7rem]'><FaFacebook className='text-blue-500 bg-white p-1 rounded-full mx-0 my-1'></FaFacebook></a>
                                <a href="https://twitter.com/iazshakil?fbclid=IwZXh0bgNhZW0CMTAAAR3bswr6WAETdosCktBw8l6tLGEgPO2HRLFxe_-qAkizehKptDnawH4SEkE_aem_9sMli_2M2qTt13tZlmqYfw" target='_blank' rel='noreferrer' className='leading-10 text-[2.7rem]'><FaTwitter className='text-cyan-500 bg-white rounded-full p-1 mx-0 my-1'></FaTwitter></a>
                                <a href="https://www.linkedin.com/in/iazshakil/" target='_blank' rel='noreferrer' className='leading-10 text-[2.7rem]'><FaLinkedin className='text-cyan-500 bg-white rounded-full p-1 mx-0 my-1'></FaLinkedin></a>
                                <a href="https://t.me/iazshakil" target='_blank' rel='noreferrer' className='leading-10 text-[2.7rem]'><FaTelegram className='text-cyan-500 bg-white rounded-full p-1 mx-0 my-1'></FaTelegram></a>
                                <a href="https://www.instagram.com/iazshakil/" target='_blank' rel='noreferrer' className='leading-10 text-[2.7rem]'><FaInstagram className='rounded-full p-1 mx-0 my-1' style={{background: "linear-gradient(225deg, rgba(129,53,176,1) 0%, rgba(166,57,152,1) 25%, rgba(213,61,130,1) 50%, rgba(239,106,77,1) 75%, rgba(246,180,61,1) 100%)"}}></FaInstagram></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className='mx-7 '>
                            <h2 className='text-xl my-1'>Mail</h2>
                            <p className='text-base text-slate-300 flex items-center space-x-3' style={{letterSpacing: '1.5px'}}><IoIosMail className='text-3xl mx-1 bg-gradient-to-r via-green-500 rounded-lg from-red-600 to-blue-700'></IoIosMail> <span className='text-base'> hi@azshakil.com</span></p>
                            <h2 className='text-xl my-1'>Mobile</h2>
                            <p className='text-base text-slate-300 flex items-center space-x-3' style={{letterSpacing: '1.5px'}}><IoIosCall className='text-3xl mx-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-md'></IoIosCall  > <span className='text-base'> hi@azshakil.com</span></p>
                            <h2 className='text-xl  flex items-center my-1'>Website <a href="https://azshakil.com/" target='_blank' rel='noreferrer'> <img className='w-8 mx-1' src={azShakilPortfolioImage} alt="" /></a></h2>
                            <p className='text-base text-slate-300 flex items-center space-x-3' style={{letterSpacing: '1.5px'}} ><FaLink className='text-3xl mx-1 text-white'></FaLink> <span className='text-base'><a href="https://azshakil.com/" target="_blank" rel="noopener noreferrer">https://azshakil.com/</a></span></p>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="text-xl font-bold text-gray">Company</h6>
                        <a className="link link-hover text-base">About us</a>
                        <a className="link link-hover text-base">Contact</a>
                        <a className="link link-hover text-base ">Jobs</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="text-xl font-bold text-gray">Legal</h6>
                        <a className="link link-hover text-base">Terms of use</a>
                        <a className="link link-hover text-base">Privacy policy</a>
                        <a className="link link-hover text-base ">Cookie policy</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="text-xl font-bold text-gray">Social</h6>
                        <a className="link link-hover text-base" rel='noreferrer' target='_blank' href='https://https://x.com/iazshakil?fbclid=IwZXh0bgNhZW0CMTAAAR3bswr6WAETdosCktBw8l6tLGEgPO2HRLFxe_-qAkizehKptDnawH4SEkE_aem_9sMli_2M2qTt13tZlmqYfw'>Twitter</a>
                        <a className="link link-hover text-base" rel='noreferrer' target='_blank' href='https://https://www.instagram.com/iazshakil/'>Instagram</a>
                        <a className="link link-hover text-base" rel='noreferrer' target='_blank' href='https://https://www.facebook.com/infoAZS/'>Facebook</a>
                    </nav>
                </div>
            </footer>
            <footer className='py-5 px-10 bg-[#060a12] md:flex md:justify-between justify-center'>
                <div className='flex items-center md:py-0 py-2.5 justify-center'>
                    <p className=' text-xl text-white font bold'>© 2024 </p><img src={require('../../assets/logoIcon.jpg')} className='h-12 rounded-s-full rounded-tr-full mx-2' alt="" /><div>
                        <p className='font-extrabold text-4xl text-[#1E6DEB]'>Apprent</p>
                        <p className='text-gray-400 text-xs'>Empowering Minds, Shaping Futures</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-lg text-slate-400'>Developed By <span className='text-xl font-medium' style={{ background: 'linear-gradient(304deg, rgba(1,255,0,1) 0%, rgba(0,252,254,1) 50%, rgba(0,0,255,1) 100%)', backgroundClip: 'text', color: 'transparent' }}>MD. Jawad Jabbar Khan Authoi</span> </h1>
                </div>
            </footer>
        </div>
    );
};

export default Footer;