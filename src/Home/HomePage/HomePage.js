import React from 'react';
import '../../App.css';

const HomePage = () => {

    // const starContainer = document.querySelector('.star-container');

    // for (let i = 0; i < 30; i++) { // Create 30 stars
    //     const star = document.createElement('div');
    //     star.className = 'star';
    //     star.style.width = `${Math.random() * 30 + 5}px`; // Random width between 5 and 35
    //     star.style.height = star.style.width; // Keep it circular
    //     star.style.top = `${Math.random() * 100}%`; // Random vertical position
    //     star.style.left = `${Math.random() * 100}%`; // Random horizontal position
    //     starContainer.appendChild(star);
    // }


    return (
        <div className="pt-44 pb-20 bg-[#0D0518]">
            <div class="star-container">
                <div className="md:flex md:justify-center md:items-center text-center md:pt-0 pt-5">
                    <div className='py-2'>
                        <h1 className="text-4xl text-white font-bold">Our mission is to help <br /> Bangladeshi students </h1>
                        <h1 className="text-6xl text-white font-bold">study abroad</h1>
                        <p className="text-md text-white py-2">We are Working for Bangladeshi Students Study Abroad</p>
                        <button className="btn text-primary px-16 mt-4">i’m a student who wants study abroad</button>
                    </div>
                </div>
                <img src="https://www.programming-hero.com/_next/image?url=%2Fbanner%2Fbottom-layer.png&w=1920&q=75" alt="" />
            </div>
        </div>
    );
};

export default HomePage;