import React from 'react';
import { BsGlobeAmericas } from 'react-icons/bs';
import { IoPaperPlane } from 'react-icons/io5';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import "../../css/style.css";

const VisaCategories = () => {
    return (
        <div className='px-10 py-5 bg-[#FFFFFF] before-bg-bg flex justify-center items-center'>
            <div className="w-full flex justify-center my-0 mx-auto p-5 max-w-[1200px] gap-5 flex-row items-end">
                <div className="w-1/2 text-start rounded-lg bg-white flex-col">
                    <div className=" after:content-[''] after:opacity-95 after:absolute after:mix-blend-lighten" style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/visa-1.jpeg)", backgroundPosition: "cover", backgroundSize: "cover" }}>
                        <div className='p-10' style={{ background: "rgba(20, 20, 20, 0.9)" }}>
                            <h2 className='flex items-center py-2 font-semibold text-lg text-[#1E6DEB]' ><IoPaperPlane className='rotate-45 mr-2' /> Visa Categories  <BsGlobeAmericas className='ml-1' /></h2>
                            <h2 className="text-white text-[2.7rem] py-2 leading-[50px] font-semibold mb-5">
                                We Offers Citizenship & Immigration Services
                            </h2>
                            <p className="py-2 text-base text-[#F2F3F3]">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic</p>
                            <motion.div className='flex py-2 justify-center md:justify-start items-center'>
                                <Link to={"/book/booking"}>
                                    <motion.button
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.2 },
                                        }}
                                        className="relative z-10 overflow-hidden flex justify-around items-center px-9 font-medium py-3 text-lg text-white hover:text-black bg-[#1E6CEA] rounded-md active:ring-4 before:content-[''] before:absolute before:left-[-100%] before:w-full before:h-full before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <span className='z-20 '>View More</span> <MdArrowOutward className="font-black text-2xl z-20" />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='px-5 w-auto mb-4 shadow-lg' style={{flexWrap: "initial", justifyContent: "flex-end", flexGrow: 1, }}>
                    <div className='rounded-lg px-2 py-1 flex items-start max-w-full'>
                        <div>
                            <img src="https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2022/07/tourist-80x80.png" alt="" />
                        </div>
                        <div className='pl-5'>
                            <h2 className='text-3xl font-medium'>Tourist Visa</h2>
                            <p className="py-2 font-styled text-[#797979] text-base">
                                Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCategories;