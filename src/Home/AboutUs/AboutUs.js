import React from 'react';
import useNumReacher from './../../hooks/useNumReacher';
import '../../css/style.css';
import '../../App.css';
import { motion } from 'motion/react';
import blueHeading from "../../assets/blue-header-aboutUs.png";
import { LuMessagesSquare } from "react-icons/lu";

const AboutUs = () => {
    return (
        <div id='about-us-sect' className='bg-[#F4F4F5] min-h-screen pt-10 -pb-5 h-auto flex justify-center items-center' style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/bg.png)", backgroundPosition: "center center", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
            <div data-theme="light" className='px-5 py-16 text-center flex justify-center items-center max-w-[1300px]' style={{ background: "transparent" }}>
                <div className='lg:flex lg:justify-around lg:items-center text-center mr-2'>
                    <div className='justify-center flex px-1 w-full lg:w-[47%]'>
                        <div className="">
                            <div className="w-[190%]"><img className='w-full border-8 border-[#F4F4F5] flex justify-center items-center rounded-xl' src={"https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/about-us-1-qn840u0nlbinvnvm88hesh8scfwt5a1gnzqj4mllzc.jpg"} alt="" /></div>
                            <div className="text-white p-2 z-30 border-y-[2rem] w-[125%] flex justify-center items-center border-[#F4F4F5] text-center h-[37%] rounded-2xl" style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/testi-section-vector.png)", backgroundColor: "#111111", backgroundRepeat: "no-repeat", backgroundPosition: 'top' }}>
                                <div>
                                    <h1 className="text-6xl font-semibold">{useNumReacher(0, 100, 20, 1)}%</h1>
                                    <span className="text-lg font-styled">Successful Visa <br /> Process Rate</span>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='relative ml-36 -z-[20] w-3/5 mt-12 mb-0 animation-updown'>
                                <img className=' rounded-xl absolute' src={"https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/send-icon-2.png"} alt="" />
                            </div>
                            <div className='w-[80%] h-[60%] ml-10'>
                                <img className=' w-full h-full  ml-0 border-e-0  mt-64 z-10 flex justify-center items-center rounded-[0.3rem] border-[2rem] border-[#F4F4F5] rounded-ss-xl' src={"https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/about-us-2-qn7wlq7udl1nldubxi548ayrvvqlqkhg2lruaj2xao.jpg"} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50%] text-left pl-2 pb-10'>
                        <div className="w-full flex justify-start items-start">
                            <div className=" text-start w-10/12">
                                <h2 className='flex text-xl mb-[10px]  items-center justify-start font-semibold -ml-2 text-[#1E6DEB] font-styled' >  <img src={require('../../assets/logo.png')} className='  mx-2' style={{
                                    width: "25px",
                                    height: "25px",
                                    objectFit: "cover",
                                    objectPosition: "0% 25%",
                                }} alt="" /> About Us </h2>
                                <div className="w-[70%]">
                                    <img src={blueHeading} className='w-full' alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='text-[#404040] py-1 mt-3 font-light font-styled' style={{
                            fontSize: "17px",
                            lineHeight: "27px "
                        }}>
                            Welcome to apprent global, your trusted partner in achieving global education and career aspirations for aspiratnts.
                        </p>
                        <div className='text-[#404040] text-[17px] leading-7 my-1'>
                            <div className="flex justify-start items-start font-styled font-light text-justify my-2 h-auto">
                                Based in Dhaka, Bangladesh, where unparalleled expertise combines with
                                personalized care to create life-changing
                                opportunities in education and immigration.
                            </div>
                            <div className="flex justify-start items-start font-normal my-2 text-justify h-auto">
                                Our unwavering dedication to excellence and integrity has earned us a strong
                                reputation, not only in Bangladesh but
                                across international borders. Let us help you turn your aspirations into reality
                                with confidence and ease.
                            </div>
                        </div>
                        <div className='flex items-center  py-4'>
                            <motion.div className="flex  justify-center md:justify-start items-center  mr-4" >
                                <a href='https://wa.me/+8801757333731' target='_blank' rel="noreferrer">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="relative z-10 h-24 w-80 overflow-hidden flex justify-around items-center px-8 font-medium py-4 text-xl text-white bg-blue-500 rounded-md active:ring-4 before:content-[''] before:absolute before:left-[-100%] before:w-full before:h-full before:bg-gray-700 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
                                    >
                                        <p className="z-20 flex justify-center items-center">
                                        <LuMessagesSquare className='pr-2 text-4xl' /><span className='z-20'>Drop a message</span>
                                        </p>
                                    </motion.button>
                                </a>
                            </motion.div>
                            <motion.div className="flex justify-center md:justify-start items-center  ml-4" >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.9 }}
                                    disabled={true}
                                    className="z-10 h-24 w-80 flex justify-around items-center px-8 font-medium py-4 text-white bg-blue-500 rounded-md "
                                >
                                    <p className='z-20'>
                                        <p className=''><span className="text-2xl font-medium">06+</span>Years <br />Experience</p>
                                    </p>
                                </motion.button>
                            </motion.div>
                            {/* <div className=" px-3 flex items-center ml-8">
                                <div className='mr-2'>
                                    <FaTelegram className='text-sky-600 text-5xl'></FaTelegram>
                                </div>
                                <div className='ml-2 items-center justify-start flex'>
                                    <div>
                                        <p className="text-base text-[#818181] py-0">Message Me Any Time </p>
                                        <a href="https://t.me/iazshakil" target="_blank" rel="noopener noreferrer" className='py-0'>
                                            <h1 className="text-[1.3rem] font-medium text-[#1E6CEA]">t.me/iazshakil</h1>
                                        </a>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;