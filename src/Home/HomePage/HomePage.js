import React from 'react';
import homePageImage from "../../assets/studyAbordPage.png"
import { useParallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';

const HomePage = () => {
    const parallax = useParallax({
        speed: -5,
    });
    const parallax2 = useParallax({
        speed: -2,
    });

    return (
        <div className="bg-primary bg-fixed">
            <div className="md:flex md:justify-center md:items-center text-center md:pt-0 pt-5">
                <div ref={parallax.ref} className='' data-aos="flip-left">
                    <h1 className="text-4xl text-white font-bold">Our mission is to help <br /> Bangladeshi students </h1>
                    <h1 className="text-6xl text-white font-bold">study abroad</h1>
                    <button className="btn text-primary px-16 mt-4">i’m a student who wants study abroad</button>
                </div>
                <div className='md:w-[36rem] w-5/6 mt-5 md:mt-1' data-aos="zoom-in" ref={parallax2.ref}>
                    <Tilt
                         perspective={800}
                         glareEnable={true}
                         glareMaxOpacity={0.03}
                    >
                        <img className='w-full' src={homePageImage} alt="" />
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default HomePage;