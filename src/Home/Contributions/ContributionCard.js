import React from 'react';
import { IoIosPlay } from "react-icons/io";

const ContributionCard = ({ card }) => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className={`rounded-sm group flex justify-center items-center  text-black h-[415px] bg-[#F6F6F8] w-full md:max-w-[500px] max-w-[350px]`} style={{ transition: 'all 0.5s ease', padding: "0px 25px 15px 20px", margin: "20px 10px", }}>
                <div className='w-full'>
                    <div className='z-50'>
                        <div className="w-[100px] top-0 text-left h-[80px] z-50 -mb-16 p-2 text-white md:flex justify-center md:justify-left md:items-center absolute gradient-container-card-date backdrop-blur-sm">
                            <h1 className="text-lg font-semibold z-45">{card?.date}</h1>
                        </div>
                    </div>
                    <div className='mb-[6px] -z-10 w-[70%] md:w-full md:mx-0 mx-auto'>
                        <img className='h-[150px]' style={{ borderRadius: "5px 5px 5px 0px", boxShadow: "5px 5px 15px 0px #bababa" }} src={card?.img} alt="" />
                    </div>
                    <div className='w-full text-left'>
                        <div className='w-[70%] md:w-full md:mx-0 mx-auto'>
                            <h1 className='text-[23px] leading-[34px] mb-[15px] font-semibold group-hover:text-[#1E6DEB] transition-all'>
                                {card?.name}
                            </h1>
                            <p className="text-sm transition-all duration-500">
                                {card?.para}
                            </p>
                            <div className="w-44 my-4 text-[#1E6DEB] hover:scale-105 flex justify-center items-center transition-all">
                                <a href={card?.link} target="_blank" rel="noopener noreferrer" className='w-full'><button className="w-full flex no-underline text-lg hover:no-underline items-center"> <IoIosPlay className='text-3xl -ml-1'></IoIosPlay> Watch Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributionCard;