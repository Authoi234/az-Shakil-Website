import React from 'react';

const ContributionCard = ({ card }) => {
    return (
        <div className={`rounded-sm text-black flip-card before:content-[""] w-[370px] before:absolute before:left-0 before:top-[112px] before:right-0 before:bottom-0 before:bg-[#F6F6F8] before:transition-all before:duration-500 before:rounded-md bg-white shadow-xl`} style={{ transition: 'all 0.5s ease', padding: "0px 25px 15px 20px", margin: "20px 10px", }}>
            <div className='mb-[6px]  relative ml-[52px] -right-[38px] z-10'>
                <img className='w-[253px] max-w-full h-[160px]' style={{ borderRadius: "5px 5px 5px 0px" }} src={card?.img} alt="" />
            </div>
            <div className='ml-0 mb-0 mt-0 shadow-none static mr-0 p-0 text-left -translate-y-20'>
                <div className='w-full'>
                    <div className="w-[28%] text-center bg-blue-600 p-2 rounded-s-md text-white">
                        <h1 className="text-xl font-semibold">11 Feb <br /> 2025</h1>
                    </div>
                    <h1></h1>
                </div>
            </div>
        </div>
    );
};

export default ContributionCard;
// flip-3d