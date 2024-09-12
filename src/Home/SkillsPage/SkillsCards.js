import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const SkillsCards = ({ card }) => {
    return (
        <div  data-aos-duration="700" className='text-center shadow-2xl border p-2 awesome-3d-card border-gray-500 rounded-3xl'>
            <div className='flex justify-center items-center my-3'>
                <img className='rounded-full w-20' src={card.image} alt="" />
            </div>
            <h1 className='text-white text-lg'>{card.title}</h1>
            <p className='text-[#bab8b8] text-md'>{card.discription}</p>
            <Link to={`/video/${card.id}`} className='btn my-1 py-0.5 px-2 rounded-3xl btn-outline bg-[#1e6deb] text-white border-2 hover:border-2  hover:border-blue-700 border-blue-700 hover:bg-white hover:text-[#1e6deb]'>ভিডিও দেখুন</Link>
        </div>
    );
};

export default SkillsCards;