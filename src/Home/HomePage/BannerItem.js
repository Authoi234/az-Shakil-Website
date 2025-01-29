import React from 'react';

import { IoPaperPlane } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

const BannerItem = ({ constraintsRef, item }) => {
    return (
        <div className="flex justify-between items-center h-screen z-30" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
            <div className='mx-16' style={{ width: "50%" }}>
                <p className="text-[#1E6DEB] text-2xl font-bold flex justify-start items-center font-styled"><IoPaperPlane className='rotate-45 mr-1' /> {item?.mainText} <BsGlobeAmericas className='ml-1' /></p>
                <h1 className='leading-tight text-white font-styled' style={{ fontSize: "3.9rem", fontWeight: 600 }}>{item?.title}</h1>
                <p className='text-xl my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                <motion.div className=' animate__animated animate__zoomInDown max-w-fit' style={{ animationIterationCount: 1 }} ref={constraintsRef}>
                    <Link to={"/book/booking"}>
                        <motion.button
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 },
                            }}
                            className='flex justify-around items-center px-6 py-3 text-lg text-white bg-[#1E6CEA] hover:bg-white hover:text-black'
                            whileTap={{ scale: 0.9 }}
                            drag
                            dragConstraints={constraintsRef}
                        >
                            Get Started <MdArrowOutward className='font-black text-2xl' />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
            <div className="relative overflow-hidden z-50" style={{ width: "50%", height: "100%" }}>
                <img
                    src={item?.image}
                    className="absolute inset-0 w-full scale-[1.5] origin-left object-cover"
                    alt=""
                />
            </div>
        </div>
    );
};

export default BannerItem;