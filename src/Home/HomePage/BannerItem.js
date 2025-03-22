import React, { useEffect, useRef } from 'react';
import { IoPaperPlane } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { SiYoutube } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import "../../css/style.css";

import { animate, stagger } from 'motion';

const BannerItem = ({ item }) => {

    const springLetterAnimation = {
        hidden: { y: -100, opacity: 0 },
        visible: (index) => ({
            y: 0,
            opacity: 1,
            transition: { delay: index * 0.1, type: 'spring', stiffness: 100, damping: 10 },
        }),
    };

    const text = item?.title;

    return (
        <div> <div
            className="flex flex-col lg:flex-row lg:justify-evenly p-0 m-0 items-center overflow-hidden h-full w-screen"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
            <div className="flex xl:justify-center justify-center lg:justify-start items-center text-center lg:mt-1/2 lg:w-[2%] 2xl:w-min lg:transform lg:-translate-y-[0%] lg:rotate-90  space-y-4">
                <div className="flex justify-center items-center gap-1">
                    <span className="text-white text-sm font-medium ">FOLLOW</span>
                    <span className="text-white text-sm font-medium ">US</span>

                    <div className='divider divider-horizontal rotate-90 h-9 w-px bg-[#FFFFFF]'></div>

                    <div className="flex space-x-3 ">
                        <a href="https://www.facebook.com/infoAZS/" target="_blank" className="-rotate-90 text-white hover:text-[#1E6DEB] hover:bg-white rounded-full border-0 outline-none transition-all duration-500" rel="noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/iazshakil?fbclid=IwZXh0bgNhZW0CMTAAAR3bswr6WAETdosCktBw8l6tLGEgPO2HRLFxe_-qAkizehKptDnawH4SEkE_aem_9sMli_2M2qTt13tZlmqYfw" target="_blank" className="-rotate-90 text-white hover:bg-black hover:text-white rounded-full border-0 outline-none transition-all duration-500" rel="noreferrer">
                            <RiTwitterXFill />
                        </a>
                        <a href="https://www.instagram.com/iazshakil/" target="_blank" className="-rotate-90 instagram-style" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/iazshakil/" target="_blank" className="-rotate-90 text-white hover:text-white hover:bg-[#0A66C2] rounded-md border-0 outline-none transition-all duration-500" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://t.me/iazshakil" target="_blank" className="-rotate-90 hover:text-[#2481CC] hover:bg-white rounded-full border-0 outline-none transition-all duration-500" rel="noreferrer">
                            <FaTelegram />
                        </a>
                        <a href="https://www.youtube.com/AZShakilYT" target="_blank" className="-rotate-90 hover:text-red-500 hover:bg-white rounded-md border-0 outline-none transition-all duration-500" rel="noreferrer">
                            <SiYoutube />
                        </a>
                    </div>
                </div>
            </div>
            {/* Left Content Section */}
            <div className="px-6 lg:px-5 text-center lg:text-left w-full lg:max-w-[48%] flex justify-center items-center lg:py-0 py-10 z-30">
                <div className=''>
                    <p  className="text-[#1E6DEB] text-xl lg:text-xl font-bold flex justify-center -ml-[5px] lg:justify-start items-center font-styled">
                        <img src={require('../../assets/logo.png')} className='  mx-2' style={{
                            width: "25px",
                            height: "25px",
                            objectFit: "cover",
                            objectPosition: "0% 25%",
                        }} alt="" /> <p className='uppercase '>{item?.mainText}</p>
                    </p>
                    <div className="lg:w-[36rem] xl:w-[37rem]"> <h1 className='leading-[81px] text-white font-styled lg:font-medium xl:font-semibold text-[60px]' >
                        {text.split('').map((letter, index) => (
                            <motion.span
                                key={index}
                                initial="hidden"
                                animate="visible"
                                variants={springLetterAnimation}
                                custom={index} // Pass the index to control the delay
                            >
                                {letter}
                            </motion.span>
                        ))}</h1></div>
                    <div className='lg:w-[520px] xl:w-[540px] text-left'>
                        <p className='text-[18px] font-normal leading-[32px] my-3 xl:my-8 text-[#f7f7f7]'>{item?.para}</p>
                    </div>
                    <motion.div className='flex justify-center lg:justify-start items-center'>
                        <Link to={"/book/booking"}>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                    x: 5
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="h-[61px] leading-[17px] text-[16px] relative w-[213px] z-10 overflow-hidden flex justify-around items-center font-medium py-5 px-9 rounded-md text-white hover:text-black bg-[#1E6CEA] active:ring-4 before:content-[''] before:absolute before:left-[-100%] before:w-full before:h-full before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
                                whileTap={{ rotate: 20, scale: 0.90 }}
                            >
                                <motion.span
                                    className='z-20 leading-[17px] font-bold text-[16px] uppercase'
                                    transition={{ duration: 0.2 }}
                                >
                                    Learn More
                                </motion.span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Right Image Section */}
            <div
                className=" overflow-hidden w-full flex origin-top-left lg:origin-left justify-start items-center lg:w-full lg:max-w-[43%] object-cover 2xl:min-w-[50%] xl:max-w-[1025px] lg:h-[857px] "
            >
                <img
                    src={item?.image}
                    className=" inset-0 w-full h-full overflow-hidden object-cover text-start origin-top-left lg:origin-left "
                    alt=""
                />
            </div>
        </div></div >
    );
};

export default BannerItem;