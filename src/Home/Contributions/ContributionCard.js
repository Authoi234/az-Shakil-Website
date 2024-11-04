import React from 'react';

const ContributionCard = ({card}) => {
    return (
        <div className={`rounded-3xl flip-card flex-shrink-0 w-11/12 mt-5 sm:w-80 md:w-96 lg:w-1/4 text-white bg-[#0c1222] shadow-xl`} style={{ transition: 'all 0.5s ease', }}>
            <figure className='flex justify-center items-center'>
                <img
                    className=' w-full max-w-[600px] h-full p-2 rounded-t-2xl flip-3d'
                    src={card.img}
                    alt=''
                />
            </figure>
            <div className="card-body p-2 sm:p-1 text-center">
                <h2 className="text-lg text-wrap font-mono" >{card.name}</h2>
                <p className='text-sm md:text-md text-wrap'>{card.para}</p>
                <div className="card-actions justify-center">
                    <button className="bg-[#24148b] mb-1 px-3 text-sm md:text-base py-1 text-wrap rounded-lg shadow-sm shadow-white "><a target='_blank' rel="noreferrer"  href={card.link}>ভিডিও দেখুন</a></button>
                </div>
            </div>
        </div>
    );
};

export default ContributionCard;