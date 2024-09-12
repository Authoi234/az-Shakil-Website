import React from 'react';
import homePageImage from "../../assets/studyAbordPage.png"
import { Parallax, useParallax } from 'react-scroll-parallax';

const HomePage = () => {
    const parallax = useParallax({
        speed: -10,
      });
    const parallax2 = useParallax({
        speed: -5,
        scale: [1,1.1]
      });

    return (
        <div className="bg-[#1e6deb] bg-fixed">
            <div className="md:flex md:justify-center md:items-center text-center md:pt-0 pt-5">
                    <div ref={parallax.ref} className='' data-aos="flip-left">
                        <h1 className="text-4xl text-white font-bold">Our mission is to help <br /> Bangladeshi students </h1>
                        <h1 className="text-6xl text-white font-bold">study abroad</h1>
                        <button className="btn text-[#1e6deb] px-16 mt-4">i’m a student who wants study abroad</button>
                    </div>
                <div className='md:w-[36rem] w-5/6 -mt-5' data-aos="zoom-in"  ref={parallax2.ref}>
                    <img className='w-full' src={homePageImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;