import React, { useEffect, useRef, useState } from 'react';
import introImg from '../../assets/peep1.f4841716.svg';
import { IoPaperPlane } from 'react-icons/io5';
import { BsChatSquareQuote, BsGlobeAmericas } from 'react-icons/bs';
import image from "../../assets/erasebg-transformed.webp";
import ReactParallaxTilt from 'react-parallax-tilt';

const LearnersReviews = () => {
    const [showAll, setShowAll] = useState(false);


    return (
        <div className='px-5 md:px-20 py-12 -mt-5 flex justify-center items-center text-white' id='reviews-sect' style={{
            backgroundColor: "#FFEBEB",
        }}>
            <div className='w-full'>
                <div className="pb-0 text-center relative max-w-[1300px]">
                    <div>
                        <div className="flex justify-center items-center" data-aos="fade-up">
                            <div className="w-40 -mb-5" style={{
                            }}>
                                <img style={{
                                    clipPath: "polygon(0 0, 100% 1%, 100% 76%, 0 77%)",
                                }} src={image} alt="" />
                            </div>
                        </div>
                        <h2 className='flex text-xl items-center justify-center font-semibold text-black' >  <div className='overflow-hidden'>
                            <img src={require('../../assets/logo.png')} className='  mx-2' style={{
                                width: "25px",
                                height: "25px",
                                objectFit: "cover",
                                objectPosition: "0% 25%",
                            }} alt="" />
                        </div> OUR TESTIMONIALS
                        </h2>
                    </div>
                </div>
                <div class="elfsight-app-2fe45f6b-7267-4998-a3b3-b1b4357bf9f4 w-full" data-elfsight-app-lazy></div>
            </div>
        </div >
    );
};

export default LearnersReviews;