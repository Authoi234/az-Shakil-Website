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
        <div className='bg-[#F4F4F5] min-h-screen h-auto'>
            <div data-theme="light" className='px-5 py-16 text-center' style={{ background: "#F4F4F5" }}>
                <div className='lg:flex lg:justify-center lg:items-center text-center mr-2' data-aos="flip-right">
                    <div className='justify-around flex px-1'>
                        <div className="w-1/2">
                            <img className='w-full border-8 border-[#F4F4F5] -z-10 flex justify-center items-center rounded-xl' src={Img1} alt="" />
                            <div className="text-white p-2 border-y-[2rem] border-[#F4F4F5] text-center w-3/4 rounded-xl" style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/testi-section-vector.png)", backgroundColor: "#111111", backgroundRepeat: "no-repeat", backgroundPosition: 'top' }}>
                                <h1 className="text-5xl font-medium">{useNumReacher(0, 100, 50, 1)}</h1>
                                <span className="text-lg font-styled">Successful Visa <br /> Process Rate</span>
                            </div>
                        </div>
                        <div className='z-50 w-1/2'>
                            <img className='-ml-5 w-3/4 border-8 border-[#F4F4F5] -mt-5 animation-updown rounded-xl' src={logoIcon} alt="" />
                            <img className=' w-full -ml-20 mt-10 flex justify-center items-center rounded-e-2xl border-[2rem] border-[#F4F4F5] rounded-ss-xl' src={Img2} alt="" />
                        </div>
                    </div>
                    <div className='lg:w-1/2 text-left pl-2 pb-10' style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/bg.png)", backgroundPosition: "right", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                        <div className="w-full flex justify-start items-start">
                            <div className=" text-start w-3/4">
                                <h2 className='flex text-xl items-center justify-start font-semibold text-[#1E6DEB] font-styled' ><IoPaperPlane className='rotate-45 mr-2' /> About Us <BsGlobeAmericas className='ml-1' /></h2>
                                <h2 className="text-[#262626] text-[2.4rem] leading-[50px] font-semibold mb-5 font-styled">
                                    Visa & Immigration Consulting Firm in USA
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
                        <div className="md:flex items-center my-3 border border-[#EAEAEA] p-6">
                            <div className='w-7/12'>
                                <img src="https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/about-h3-img-qn7wbdzio7btl9lfva398q5ojgmln6l3r784qmpbmo.jpg" alt="" className="w-full" />
                            </div>
                            <div className=''>
                                <h1 className='text-2xl font-semibold mx-5'>
                                    25+ Years of experience in visa and immigrations services.
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