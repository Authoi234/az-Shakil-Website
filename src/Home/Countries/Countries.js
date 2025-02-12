import React from 'react';
import { BsGlobeAmericas } from 'react-icons/bs';
import { IoPaperPlane } from 'react-icons/io5';
import "../../css/style.css";
import "../../App.css";

const Countries = () => {
    const countriesData = [
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/Canada.webp",
            title: "Canada",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua enim ad minim veniam.",
            side: "left",
            id: 1,
            icon: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/Canada.png"
        },
        {
            img: "https://www.state.gov/wp-content/uploads/2024/11/shutterstock_2435838255-scaled.jpg",
            title: "USA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua enim ad minim veniam.",
            side: "left",
            id: 2,
            icon: "https://png.pngtree.com/png-vector/20240109/ourmid/pngtree-usa-round-flag-glossy-glass-effect-vector-transparent-background-png-image_11431008.png"
        },
        {
            img: "https://static.independent.co.uk/2024/05/17/11/iStock-1438004339.jpg",
            title: "UK",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua enim ad minim veniam.",
            side: "right",
            id: 3,
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKokEnkW3y-qnUOOiWbGjRcPgaWwUIvYzqAQ&s"
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/Australia.webp",
            title: "Australia",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua enim ad minim veniam.",
            side: "right",
            id: 4,
            icon: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/Australia.png"
        }
    ];

    return (
        <div className='w-full bg-[#FEFEFE]'>
            <div className="w-full flex justify-center items-center">
                <div className="w-1/2 text-center">
                    <h2 className='flex text-xl items-center justify-center font-semibold text-[#1E6DEB]' ><IoPaperPlane className='rotate-45 mr-2' /> COUNTRIES <BsGlobeAmericas className='ml-1' /></h2>
                    <h2 className="text-[#262626] text-[2.7rem] leading-[50px] font-semibold mb-8">
                        Countries We Support for <br /> Immigration.
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                {
                    countriesData.map((item) => {
                        if (item?.side === "left") {
                            return (
                                <div className='h-screen md:h-full' style={{
                                    backgroundImage: `url(${item?.img})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% 100%"
                                }}>
                                    <div className='w-full md:w-1/2 h-1/2 flex justify-start items-center mt-[45%] md:mt-0 md:items-center bg-[#084fc2] hover:bg-[#111111] transition-all md:h-[440px] duration-500 py-1'>
                                        <div className="absolute text-[10rem] font-semibold opacity-45 pl-5">0{item?.id}</div>
                                        <div className='flex justify-center items-center lg:-translate-y-10'>
                                            <div className='px-14 pt-0 md:pt-16 py-auto z-20 '>
                                                <div className='my-5 w-12 h-12 rounded-full'>
                                                    <img className='w-full py-5' src={item?.icon} alt="" />
                                                </div>
                                                <h1 className='text-2xl py-2 font-styled text-white font-semibold'>
                                                    {item?.title}
                                                </h1>
                                                <p className="py-2 text-[1.08rem] text-white leading-8">{item?.text}</p>
                                                <button className={`btn mb-5 bg-transparent border-none text-white px-0 hover:bg-transparent outline-none text-lg hover:scale-105 group transition-all duration-500`}>
                                                    <BsGlobeAmericas className='hidden group-hover:inline transition-all duration-1000'></BsGlobeAmericas> Read More <IoPaperPlane className=' group-hover:translate-x-0.5 transition-translate duration-500'></IoPaperPlane>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else if (item?.side === "right") {
                            return (
                                <div className=' h-screen md:h-full ' style={{
                                    backgroundImage: `url(${item?.img})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% 100%"
                                }}> 
                                    <div className='w-full md:w-1/2 ml-auto h-1/2  flex justify-end items-center mt-[45%] md:mt-0 md:items-center bg-[#111111] hover:bg-[#084fc2] transition-all md:h-[440px] duration-500 py-1'>
                                        <div className="absolute text-[10rem] font-semibold opacity-45 pl-5">0{item?.id}</div>
                                        <div className='flex justify-center items-center lg:-translate-y-10'>
                                            <div className='px-14 md:pt-16 p-0 py-auto z-20'>
                                                <div className='py-2 w-12 h-12 rounded-full'>
                                                    <img className='w-full rounded-full' src={item?.icon} alt="" />
                                                </div>
                                                <h1 className='text-2xl py-2 font-styled text-white font-semibold'>
                                                    {item?.title}
                                                </h1>
                                                <p className="py-2 text-[1.08rem] text-white leading-8">{item?.text}</p>
                                                <button className={`btn mb-5 bg-transparent border-none text-white px-0 hover:bg-transparent outline-none text-lg hover:scale-105 group transition-all duration-500`}>
                                                    <BsGlobeAmericas className='hidden group-hover:inline transition-all duration-1000'></BsGlobeAmericas> Read More <IoPaperPlane className=' group-hover:translate-x-0.5 transition-translate duration-500'></IoPaperPlane>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Countries;