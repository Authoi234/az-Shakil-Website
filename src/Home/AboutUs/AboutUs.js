import React from 'react';
import Img1 from '../../assets/aboutImg1.jpg';
import Img2 from '../../assets/aboutImg2.jpg';
import { FaCheckCircle, FaTelegram } from "react-icons/fa";
import logoIcon from "../../assets/logoIcon-bgless.png";
import useNumReacher from './../../hooks/useNumReacher';
import { IoPaperPlane } from 'react-icons/io5';
import { BsGlobeAmericas } from 'react-icons/bs';
import '../../css/style.css';
import '../../App.css';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const AboutUs = () => {

    return (
        <div className='bg-[#F4F4F5] min-h-screen pt-10 h-auto flex justify-center items-center' style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/bg.png)", backgroundPosition: "center center", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
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
                                <h2 className='flex text-xl mb-[10px] items-center justify-start font-semibold -ml-2 text-[#1E6DEB] font-styled' >  <img src={require('../../assets/logo.png')} className='  mx-2' style={{
                                    width: "25px",
                                    height: "25px",
                                    objectFit: "cover",
                                    objectPosition: "0% 25%",
                                }} alt="" /> About Us </h2>
                                <h2 className="text-[#262626] text-[2.4rem] leading-[40px] font-semibold mb-5 font-styled">
                                    Education & Immigration Consulting Firm in Canada
                                </h2>
                            </div>
                        </div>
                        <p className='text-[#818181] py-1' style={{
                            fontSize: "17px",
                            lineHeight: "27px "
                        }}>
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </p>
                        <div className='text-[#818181] text-base leading-7 my-1'>
                            <div className="flex justify-start items-center font-medium"><FaCheckCircle className='text-[#B70404] bg-white text-xl p-0 mr-2.5 rounded-full'></FaCheckCircle> Lorem Ipsum has been the industry's standard dummy</div>
                            <div className="flex justify-start items-center font-medium"><FaCheckCircle className='text-[#B70404] bg-white text-xl p-0 mr-2.5 rounded-full'></FaCheckCircle> Many desktop publishing packages and web page</div>
                        </div>
                        <div className="md:flex items-center my-3 border border-[#EAEAEA] py-6 pr-6">
                            <div className='w-7/12'>
                                <img src="https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/about-h3-img-qn7wbdzio7btl9lfva398q5ojgmln6l3r784qmpbmo.jpg" alt="" className="w-full" />
                            </div>
                            <div className=''>
                                <h1 className='text-2xl font-semibold mx-5'>
                                    06+ Years of experience in visa and immigrations services.
                                </h1>
                            </div>
                        </div>
                        <div className='flex items-center py-4'>
                            <motion.div className="flex justify-center md:justify-start items-center" >
                                <Link to={"/book/booking"}>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="relative z-10 overflow-hidden flex justify-around items-center px-8 font-medium py-4 text-lg text-white bg-[#1E6CEA] rounded-md active:ring-4 before:content-[''] before:absolute before:left-[-100%] before:w-full before:h-full before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
                                    >
                                        <span className='z-20'>Get Started</span>
                                        <MdArrowOutward className="relative z-10 font-black text-2xl" />
                                    </motion.button>
                                </Link>
                            </motion.div>
                            <div className=" px-3 flex items-center ml-8">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;