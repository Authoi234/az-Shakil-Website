import React from 'react';
import learningImage from "../../assets/Learning-rafiki.png";

const SkillsPage = () => {
    const gridItems = [
        {},
        {},
        {},
        {},
        {},
    ]

    return (
        <div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                
            </div>
            <div className='md:w-2/5 w-5/6'>
                <img className='w-full' src={learningImage} alt="" />
            </div>
        </div>
    );
};

export default SkillsPage;