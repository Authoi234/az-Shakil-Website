import React from 'react';
import plane from "../../assets/plane.webp";
import '../../css/style.css';
import '../../App.css';
import { motion } from 'motion/react';
import blueHeading from "../../assets/blue-header-aboutUs.png";
import { LuMessagesSquare } from "react-icons/lu";
import img1 from "../../assets/about-us-new.png";

const AboutUs = () => {
    return (
        <div id='about-us-sect' className='bg-[#F4F4F5] min-h-screen pt-10 -pb-5 h-auto flex justify-center items-center' style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/bg.png)", backgroundPosition: "center center", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
            <div data-theme="light" className='px-5 py-16 text-center flex justify-center items-center max-w-[1300px]' style={{ background: "transparent" }}>
                <div className='mx-auto w-full lg:flex lg:justify-around lg:items-center text-center mr-2'>
                    <div className="w-full md:w-[50%] flex justify-center items-start overflow-visible relative">
                        <img src="https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/send-icon-2.png" alt="" className="absolute -top-10 -right-5 -rotate-12  opacity-100 w-80" />
                        <img
                            className='w-full md:w-[90%] h-full border-[8px] md:border-[2rem] border-[#F4F4F5] rounded-[0.3rem] object-cover mx-auto'
                            src={img1}
                            alt=""
                        />
                    </div>
                    <div className='lg:w-[50%] text-left pl-2 pt-10 md:pt-0 pb-10'>
                        <div className="w-full flex justify-start items-start px-2 md:px-4">
                            <div className="text-start w-full md:w-11/12">
                                <h2 className='px-2 flex text-xl mb-[10px] items-center justify-start font-semibold -ml-2 text-[#1E6DEB] font-styled'>
                                    <img
                                        src={require('../../assets/logo.png')}
                                        className='mx-2 '
                                        style={{ width: "25px", height: "25px", objectFit: "cover", objectPosition: "0% 25%" }}
                                        alt="Logo"
                                    />
                                    About Us
                                </h2>
                                <div className="w-full md:w-[70%] px-2">
                                    <img src={blueHeading} className='w-full h-auto' alt="Heading" />
                                </div>
                            </div>
                        </div>

                        <p className='text-[#404040] py-1 mt-3 font-light font-styled text-[16px] md:text-[17px] leading-[26px] md:leading-[27px] px-4'>
                            Welcome to apprent global, your trusted partner in achieving global education and career aspirations for aspirants.
                        </p>

                        <div className='text-[#404040] text-[16px] md:text-[17px] leading-7 my-1 px-4'>
                            <div className="flex justify-start items-start font-styled font-light text-justify my-2">
                                Based in Dhaka, Bangladesh, where unparalleled expertise combines with personalized care to create life-changing opportunities in education and immigration.
                            </div>
                            <div className="flex justify-start items-start font-normal my-2 text-justify">
                                Our unwavering dedication to excellence and integrity has earned us a strong reputation, not only in Bangladesh but across international borders. Let us help you turn your aspirations into reality with confidence and ease.
                            </div>
                        </div>

                        {/* Centered Buttons */}
                        <div className='flex flex-wrap justify-center items-center py-4 w-full md:gap-auto gap-4 px-2'>
                            <motion.div className="flex justify-center items-center  w-[45%]">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative z-10 h-20 w-full px-auto overflow-hidden flex justify-around items-center font-medium text-xl text-white bg-blue-500 rounded-md active:ring-4 before:content-[''] before:absolute before:left-[-100%] before:w-full before:h-full before:bg-gray-700 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
                                >
                                    <a href='https://wa.me/+8801757333731' target='_blank' rel="noreferrer">
                                        <p className="z-20 flex justify-center items-center">
                                            <LuMessagesSquare className='pr-2 z-20 text-4xl' />
                                            <span className='z-20 text-xl'>Drop a message</span>
                                        </p>
                                    </a>
                                </motion.button>
                            </motion.div>

                            <motion.div className="flex justify-center items-center  w-[45%]">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.9 }}
                                    disabled={true}
                                    className="z-10 h-20 w-full flex justify-around items-center font-medium text-white bg-blue-500 rounded-md"
                                >
                                    <p className='z-20'>
                                        <span className=" text-xl font-medium">06+</span>Years <br />Experience
                                    </p>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;