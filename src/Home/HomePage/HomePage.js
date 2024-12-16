import React, { useRef, useState } from 'react';
import '../../App.css';
import { useEffect } from 'react';
import bottomLayerImg from '../../assets/bottom-layer.webp';
import { motion } from 'framer-motion';
import homepageImage1 from "../../assets/book.png"
import homepageImage2 from "../../assets/homepage-graduation.png";
import homepageImage3 from "../../assets/travel-around-the-world.png";
import homepageImage4 from "../../assets/cn-tower.png";
import { useFollowPointer } from '../../hooks/useFollowPointer';

const HomePage = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    useEffect(() => {
        const starContainer = document.querySelector('.star-container');
        const stars = starContainer.querySelectorAll('.star');
        stars.forEach(star => star.remove());

        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `7px`;
            star.style.height = star.style.width;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            starContainer.appendChild(star);
        }
    }, []);

    return (
        <div>
            <div className="bg-[#201658] relative homepage-animated-bg h-[95vh]">
                <div className="star-container relative z-10 ">
                    <div className="pt-[11%]">
                        <div className="text-center md:pt-0">
                            <div className=''>
                                <h1 className="text-3xl md:text-4xl text-white font-bold " style={{wordSpacing: '10px', letterSpacing: "3px"}}>Our mission is to help <br /> Bangladeshi students </h1>
                                <h1 className=" text-4xl md:text-6xl text-white font-bold" style={{wordSpacing: "5px", letterSpacing: "4px"}}>study abroad</h1>
                                <p className="text-md text-white py-2">We are Working for Bangladeshi Students Study Abroad</p>
                                <motion.div whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <button className="special-neon-btn btn text-[#1F1B7F] font-semibold bg-white outline-none border-0 hover:bg-[#400C63] px-16 mt-4 z-20 relative hover:text-white" style={{ textShadow: "0 0 .20em #FFF7, 0 0 .30em #3d40ff", boxShadow: "inset 0 0 .5em #100854, 0 0 .9em #100854" }}>i’m a student who wants study abroad</button>
                                </motion.div>
                            </div>
                        </div>
                        <img className='bg-cover w-full' src={bottomLayerImg} alt="" />
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-y-1/2 -translate-x-1/2 z-0">
                    <img src={homepageImage1} className="w-16 absolute md:w-28 top-[30%] left-[72%] rotate-12  opacity-60  hover:-translate-y-2" style={{ transition: '0.5s ease-in' }} alt='' />
                    <img src={homepageImage2} className="w-16 absolute md:w-28 top-[30%] right-[72%] -rotate-12   opacity-60 hover:-translate-y-2 " style={{ transition: '0.5s ease-in' }} alt='' />
                    <img
                        src={homepageImage3}
                        className=" w-16 md:w-28 absolute right-[72%] top-[58%] opacity-60 hover:-translate-y-2" style={{ transition: '0.5s ease-in' }}
                        alt=''
                    />
                    <img src={homepageImage4} className="absolute w-16 md:w-28 opacity-60 top-[58%] left-[72%] hover:-translate-y-2 " style={{ transition: '0.5s ease-in' }} alt='' />
                </div>
            </div>

            <motion.div ref={ref} className="h-5 w-5 bg-[rgb(0,0,0,0.4)] backdrop-blur-lg rounded-full" style={{ x, y }} />
        </div>
    );
};

export default HomePage;