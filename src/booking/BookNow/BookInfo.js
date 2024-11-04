import React from 'react';
import rafiki from '../../assets/bookInfoRafiki.png';
import { FaArrowRight, FaHome, FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';

const BookInfo = () => {
    return (
        <div className='bg-[#407BFF]  py-10 px-24'>
            <div className="flex justify-around items-center">
                <div className='w-[45%]'>
                    <img className='w-full' src={rafiki} alt="" />
                </div>
                <div className='text-center w-[45%]'>
                    <h1 className='text-4xl text-white font-semibold'>We’ll use calendly</h1>
                    <div className='p-8 bg-white w-full mx-5 my-8 rounded-2xl'>
                        <div className='text-start'>
                            <p className='text-slate-700 font-medium mb-2'>what is your First Name ?</p>
                            <label className="input input-bordered  flex items-center gap-2 w-full ">
                                <FaUser></FaUser>
                                <input type="text" placeholder='First Name' className='grow' />
                            </label>
                        </div>
                        <div className='text-start'>
                            <p className='text-slate-700 font-medium mb-2'>what is your Last Name ?</p>
                            <label className="input input-bordered  flex items-center gap-2 w-full ">
                                <FaUser></FaUser>
                                <input type="text" placeholder='Last Name' className='grow' />
                            </label>
                        </div>
                        <div className='text-start'>
                            <p className='text-slate-700 font-medium mb-2'>Choose Your Country ?</p>
                            <label className="flex items-center gap-2 w-full ">
                                <FaHome></FaHome>
                                <select type="" placeholder='Select your Country' className='select select-bordered w-full' >
                                    <option selected disabled>Choose your Country</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </label>
                        </div>
                        <div className="divider divider-info">Next</div>
                        <div className='flex justify-center items-center'>
                            <motion.div whileHover={{ scale: 1.10 }}
                                whileTap={{ scale: 0.96 }}
                                className="w-fit"
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                                <button className="btn bg-[#00ADE6] text-white hover:bg-[#00ADE6]">Next <FaArrowRight></FaArrowRight></button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookInfo;