import React from 'react';

const ContributionCard = ({card}) => {
    return (
        <div className={`rounded-3xl hover:scale-105 flip-card flex-shrink-0 w-11/12 mt-5 sm:w-80 md:w-96 lg:w-1/4 text-white bg-[#0c1222] shadow-xl`} style={{ transition: 'all 0.5s ease', }}>
            <figure>
                <img
                    className='w-full h-full rounded-t-2xl flip-3d'
                    src={card.img}
                    alt=''
                />
            </figure>
            <div className="card-body p-2 sm:p-4 text-center">
                <h2 className="md:text-3xl text-xl text-wrap">{card.name}</h2>
                <p className='text-sm md:text-lg my-4 text-wrap'>{card.para}</p>
                <div className="card-actions">
                    <button className="px-3 text-sm md:text-lg py-1 text-wrap rounded-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ContributionCard;