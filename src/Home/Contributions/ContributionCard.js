import React, { useState } from 'react';
import { IoPaperPlane } from 'react-icons/io5';

const ContributionCard = ({ card }) => {
    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className={`rounded-sm group flex justify-center items-center text-black h-[415px] bg-[#F6F6F8]`} style={{ transition: 'all 0.5s ease', padding: "0px 25px 15px 20px", margin: "20px 10px", }}>
            <div className='text-left '>
                <div className="w-[100px] text-left h-[80px] z-50 -mb-16 p-2 text-white flex justify-left items-center absolute " style={{
                    backgroundColor : "rgba(37, 99, 235, 0.35)",
                    backdropFilter: "blur(4px)"
                }}>
                    <h1 className="text-lg font-semibold">{card?.date}</h1>
                </div>
                <div className='mb-[6px] -z-10'>
                    <img className='w-full max-w-full h-[160px] ' style={{ borderRadius: "5px 5px 5px 0px", boxShadow: "5px 5px 15px 0px #bababa" }} src={card?.img} alt="" />
                </div>
                <div className='ml-0 mb-0 mt-0 shadow-none static mr-0 p-0 text-left '>
                    <div className='w-full'>
                        <div className='mt-5'>
                            <h1 className='text-[23px] leading-[34px] mb-[15px] font-semibold group-hover:text-[#1E6DEB] transition-all'>
                                {card?.name}
                            </h1>
                            <p className="text-sm transition-all duration-500">
                                {card?.para}
                            </p>
                            <div className="w-44 my-4 text-[#1E6DEB] hover:scale-105 flex justify-center items-center transition-all">
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