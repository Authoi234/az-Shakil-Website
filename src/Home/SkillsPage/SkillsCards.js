import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { PiVideoFill } from "react-icons/pi";

const SkillsCards = ({ card }) => {
    console.log(card)
    return (
        <div  data-aos-duration="700" className='text-center shadow-2xl border p-2 border-gray-800 rounded-lg'>
            <div className='flex justify-center items-center my-3'>
                <img className='rounded-full w-20' src={card.image} alt="" />
            </div>
            <h1 className='text-white text-base'>{card.title}</h1>
            <p className='text-[#bab8b8] text-sm'>{card.discription}</p>
            <Link to={`/video/${card.id}`} className=' my-2 py-1.5 px-2 text-center rounded-3xl bg-blue-700 text-white border-2 hover:border-2 text-sm hover:border-blue-700 border-blue-700 hover:bg-white hover:text-primary flex justify-center items-center'> <PiVideoFill className='text-xl'></PiVideoFill>  ভিডিও দেখুন</Link>
        </div>
    );
};

export default SkillsCards; 