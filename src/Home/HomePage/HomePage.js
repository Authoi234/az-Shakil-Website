import React, { useState } from 'react';
import '../../App.css';
import { useEffect } from 'react';
import bottomLayerImg from '../../assets/bottom-layer.webp';
import roundImage1 from '../../assets/homepageImage1.png';
import roundImage2 from '../../assets/homepageImage2.png';
import roundImage3 from '../../assets/homepageImage3.png';
import roundImage4 from '../../assets/homepageImage4.png';
import roundImage5 from '../../assets/studyAbordPage.png';

const HomePage = () => {

    useEffect(() => {
        const starContainer = document.querySelector('.star-container');
        const stars = starContainer.querySelectorAll('.star');
        stars.forEach(star => star.remove());
    
        for (let i = 0; i < 20; i++) { // Create 30 stars
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `6px`;
            star.style.height = star.style.width; // Keep it circular
            star.style.top = `${Math.random() * 100}%`; // Random vertical position
            star.style.left = `${Math.random() * 100}%`; // Random horizontal position
            starContainer.appendChild(star);
        }
    }, []);
    
    return (
        <div className="pb-20 bg-[#0D0518] relative" style={{ background: 'radial-gradient(circle, rgba(73,8,89,1) 0%, rgba(13,5,25,1) 35%)' }}>
            <div className="star-container relative z-10">
                <div className="pt-44">
                    <div className="md:flex md:justify-center md:items-center text-center md:pt-0">
                        <div>
                            <h1 className="text-4xl text-white font-bold">Our mission is to help <br /> Bangladeshi students </h1>
                            <h1 className="text-6xl text-white font-bold">study abroad</h1>
                            <p className="text-md text-white py-2">We are Working for Bangladeshi Students Study Abroad</p>
                            <button id="test" className="special-neon-btn btn text-primary px-16 mt-4 z-20 relative " style={{textShadow: "0 0 .20em #FFF7, 0 0 .30em #14f7ff", boxShadow: "inset 0 0 .5em #14f7ff, 0 0 .9em #14f7ff"}}>i’m a student who wants study abroad</button>
                        </div>
                    </div>
                    <img className='bg-cover w-full' src={bottomLayerImg} alt="" />
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-full h-full -translate-y-1/2 -translate-x-1/2 z-0">
                <img src={roundImage1} className="absolute w-56 h-40 top-1/4 left-[62%] hover:-translate-y-2 " style={{ transition: '0.5s ease-in' }} alt="circular-img-1" />
                <img src={roundImage2} className="absolute w-52 h-40 top-2/4 left-[70%] hover:-translate-y-2 " style={{ transition: '0.5s ease-in' }} alt="circular-img-2" />
                <img src={roundImage3} className="absolute w-60 h-40 top-1/4 right-[62%] hover:-translate-y-2 " style={{ transition: '0.5s ease-in' }} alt="circular-img-3" />
                <img src={roundImage4} className="absolute w-52 h-40 top-2/4 right-[70%] hover:-translate-y-2 " style={{ transition: '0.5s ease-in' }} alt="circular-img-4" />
                <img
                    src={roundImage5}
                    className="w-48 h-36 absolute mt-24 left-1/2 -translate-x-1/2 hover:-translate-y-2 transition-transform duration-500 ease-in-out"
                    alt="circular-img-5"
                />
            </div>
        </div>
    );
};

export default HomePage;