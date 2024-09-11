import React from 'react';
import learningImage from "../../assets/graduation.png";

const SkillsPage = () => {
    const gridItems = [
        {},
        {},
        {},
        {},
        {},
    ]

    return (
        <div className='bg-[#173158] py-5'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

            </div>
            <div className='md:w-2/5 w-5/6'>
                <img className='w-full' src={learningImage} alt="" />
            </div>
        </div>
    );
};

export default SkillsPage;