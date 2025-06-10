import React from 'react';
import { IoIosPlay } from "react-icons/io";

const ContributionCard = ({ card }) => {
    return (
        <div className="flex justify-center items-center w-full">
            <div
                className={`rounded-sm group flex justify-center items-center text-black h-[415px] bg-[#F6F6F8] w-full md:max-w-[500px] max-w-[350px]`}
                style={{
                    transition: 'all 0.5s ease',
                    padding: '0px 25px 15px 20px',
                    margin: '20px 10px',
                }}
            >
                <div className="w-full relative">
                    {/* Date Container */}
                    <div className="absolute top-4 left-8 md:left-4 z-50 p-2 text-white bg-gradient-to-r from-[#1E6DEB] to-[#3F84F2] rounded-sm backdrop-blur-sm">
                        <h1 className="text-lg font-semibold">{card?.date}</h1>
                    </div>

                    {/* Image */}
                    <div
                        className="mb-4 w-[300px] h-[200px] min-h-[300px] bg-gray-200 overflow-hidden rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] shadow-lg"
                        style={{
                            backgroundImage: card?.img ? `url(${card.img})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                    </div>

                    {/* Content */}
                    <div className="w-full text-left">
                        <div className="w-[70%] md:w-full md:mx-0 mx-auto">
                            <h1 className="text-[23px] leading-[34px] mb-[15px] font-semibold group-hover:text-[#1E6DEB] transition-all">
                                {card?.name}
                            </h1>
                            <p className="text-sm transition-all duration-500">{card?.para}</p>
                            <div className="w-44 my-4 text-[#1E6DEB] hover:scale-105 flex justify-center items-center transition-all">
                                <a
                                    href={card?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                    <button className="w-full flex no-underline text-lg hover:no-underline items-center">
                                        <IoIosPlay className="text-3xl -ml-1" />
                                        Watch Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributionCard;