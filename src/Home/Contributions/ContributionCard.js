import React, { useState } from 'react';
import { IoPaperPlane } from 'react-icons/io5';

const ContributionCard = ({ card }) => {
    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className={`rounded-sm card1000translate group flex justify-center items-center text-black flip-card before:content-[""] w-[370px] before:absolute before:left-[50%] before:top-[112px] before:right-[50%] before:bottom-0 before:bg-[#F6F6F8] before:transition-all before:duration-500 before:rounded-md bg-[#F6F6F8]`} style={{ transition: 'all 0.5s ease', padding: "0px 25px 15px 20px", margin: "20px 10px", }}>
            <div className='text-center'>
                <div className='mb-[6px]  relative ml-[52px] -right-[14%] z-10'>
                    <img className='w-[253px] max-w-full h-[160px]' style={{ borderRadius: "5px 5px 5px 0px" }} src={card?.img} alt="" />
                </div>
                <div className='ml-0 mb-0 mt-0 shadow-none static mr-0 p-0 text-left -translate-y-20'>
                    <div className='w-full'>
                        <div className="w-[30%] text-center p-2 bg-blue-600 rounded-s-md text-white">
                            <h1 className="text-lg font-semibold">{card?.date}</h1>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-[23px] leading-[34px] mb-[15px] font-semibold group-hover:text-[#1E6DEB] transition-all'>
                                {card?.name}
                            </h1>
                            <p className="text-sm transition-all duration-500">
                                {!seeMore && card?.para.slice(0, 87) + "..."}
                                {!seeMore && <span className='pl-2 text-[#1E6DEB] cursor-pointer' onClick={() => setSeeMore(true)}>See More</span>}
                                {seeMore && card?.para}
                                {seeMore && <span className='pl-2 text-[#1E6DEB] cursor-pointer' onClick={() => setSeeMore(false)}>See Less</span>}
                            </p>
                            <div className="w-44 mt-4 -mb-4 text-[#1E6DEB] hover:scale-105 flex justify-center items-center transition-all">
                                <a href={card?.link} target="_blank" rel="noopener noreferrer" className='w-full'><button className="w-full flex no-underline text-lg hover:no-underline items-center">Watch Now <IoPaperPlane></IoPaperPlane></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContributionCard;
// flip-3d