import React from 'react';
import { BsGlobeAmericas } from 'react-icons/bs';
import { IoPaperPlane } from 'react-icons/io5';
import "../../css/style.css";
import "../../App.css";

const Countries = () => {
    const countriesData = [
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/Australia.webp",
            title: "Australia",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua enim ad minim veniam.",
            side: "left",
            id: 1,
            icon: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/Australia.png"
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/Canada.webp",
            title: "Canada",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua enim ad minim veniam.",
            side: "left",
            id: 2,
            icon: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/Canada.png"
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/France.webp",
            title: "France",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua enim ad minim veniam.",
            side: "right",
            id: 3,
            icon: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/France.png"
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/German.webp",
            title: "Germany",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua enim ad minim veniam.",
            side: "right",
            id: 4,
            icon: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/Germany.png"
        }
    ];

    return (
        <div className='w-full py-5 bg-[#020614]'>
            <div className="w-full flex justify-center items-center">
                <div className="w-1/2 text-center">
                    <h2 className='flex text-xl items-center justify-center font-semibold text-[#1E6DEB]' ><IoPaperPlane className='rotate-45 mr-2' /> Countries <BsGlobeAmericas className='ml-1' /></h2>
                    <h2 className="text-white text-[2.7rem] leading-[50px] font-semibold mb-5">
                        Countries We Support for Immigration.
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                {
                    countriesData.map((item) => {
                        if (item?.side === "left") {
                            return (
                                <div className=' ' style={{
                                    backgroundImage: `url(${item?.img})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100%"
                                }}>
                                    <div className='w-1/2 flex justify-start  bg-[#084fc2] hover:bg-[#111111] transition-all duration-500 py-0'>
                                        <div className="absolute text-[10rem] font-semibold opacity-45 pl-5">0{item?.id}</div>
                                        <div className='px-14 pt-16 py-auto z-20'>
                                            <div className='py-2 '>
                                                <img src={item?.icon} alt="" />
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
                            )
                        }
                        else if (item?.side === "right") {
                            return (
                                <div className=' ' style={{
                                    backgroundImage: `url(${item?.img})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100%"
                                }}>
                                    <div className='w-1/2 ml-auto relative flex justify-end bg-[#111111] hover:bg-[#084fc2] transition-all duration-500 py-0'>
                                        <div className="absolute text-[10rem] font-semibold opacity-45 pl-5">0{item?.id}</div>
                                        <div className='px-14 pt-16 py-auto z-20'>
                                            <div className='py-2 '>
                                                <img src={item?.icon} alt="" />
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
                            )
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Countries;