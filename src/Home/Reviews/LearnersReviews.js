import React from 'react';
import introImg from '../../assets/peep1.f4841716.svg';

const LearnersReviews = () => {
    const reviewsData = [
        {}
    ]

    return (
        <div className='bg-[#173158] px-10 py-10'>
            <div className="bg-[#0f172a] py-5 px-10 text-center">
                <div>
                    <div className="flex justify-center items-center">
                        <div className="w-44">
                            <img src={introImg} alt="" />
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold text-white'><span className='text-[#36b7f0]'>লার্নাররা</span> আমাদের সম্পর্কে যা ভাবেন</h1>
                    <p className='text-md font-semibold text-[#8f9eb3]'>লার্নাররা সর্বদাই এপরেন্ট এর প্রতি তাদের ভালবাসা প্রকাশ করেছেন</p>
                </div>

            </div>
        </div>
    );
};

export default LearnersReviews;