import React from 'react';
import { IoPaperPlane } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

const BannerItem = ({ item }) => {
    return (
        <div> <div
            className="flex flex-col md:flex-row justify-between items-center md:h-screen"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
            {/* Left Content Section */}
            <div className="px-6 md:px-16 w-full md:w-1/2 text-center md:text-left md:py-0 py-10">
                <p className="text-[#1E6DEB] text-xl md:text-2xl font-bold flex justify-center md:justify-start items-center font-styled">
                    <IoPaperPlane className="rotate-45 mr-1" /> {item?.mainText}{" "}
                    <BsGlobeAmericas className="ml-1" />
                </p>
                <h1 className='leading-tight text-white font-styled font-semibold text-4xl md:text-5xl lg:text-6xl' >{item?.title}</h1>
                <p className='text-base md:text-xl my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                <motion.div className='flex justify-center md:justify-start items-center'>
                    <Link to={"/book/booking"}>
                        <motion.button
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 },
                            }}
                            className="relative z-10 overflow-hidden flex justify-around items-center px-8 font-medium py-4 text-lg text-white hover:text-black bg-[#1E6CEA] rounded-md active:ring-4 before:content-[''] before:absolute before:left-[-100%] before:w-full before:h-full before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
                        whileTap={{ scale: 0.9 }}
                        >
                        <span className='z-20'>Get Started</span> <MdArrowOutward className="font-black text-2xl z-20" />
                    </motion.button>
                </Link>
            </motion.div>
        </div>

            {/* Right Image Section */}
            <div
                className="overflow-hidden  w-full md:w-1/2 md:h-full"
            >
                <img
                    src={item?.image}
                    className=" inset-0 w-full h-full scale-125 object-cover origin-top-left md:origin-left "
                    alt=""
                />
            </div>
        </div></div >
    );
};

export default BannerItem;