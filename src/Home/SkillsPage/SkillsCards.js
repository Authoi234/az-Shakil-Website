import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { PiVideoFill } from "react-icons/pi";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const SkillsCards = ({ card }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    console.log(card)
    return (
        <div data-aos-duration="700" className='text-center shadow-2xl border p-2 border-gray-800 rounded-lg'>
            <motion.div
                initial={false}
                animate={
                    isLoaded && isInView
                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
                className="flex items-center justify-center"
            >
                <img className='rounded-full w-[70px]' src={card.image} alt="" onLoad={() => setIsLoaded(true)} />
            </motion.div>
            <h1 className='text-white text-[15px]'>{card.title}</h1>
            <p className='text-[#bab8b8] text-[13px]'>{card.discription}</p>
            <div className="flex justify-center items-center">
                <Link to={`/video/${card.id}`} className=' my-1 w-[80%] text-center rounded-3xl bg-blue-700 transition-colors text-white border-2 hover:border-2 text-sm hover:border-blue-700 border-blue-700 hover:bg-white hover:text-primary flex justify-center items-center'> <PiVideoFill className='text-xl mx-1'></PiVideoFill>  ভিডিও দেখুন</Link>
            </div>
        </div >
    );
};

export default SkillsCards; 