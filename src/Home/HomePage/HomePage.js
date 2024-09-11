import React from 'react';
import homePageImage from "../../assets/studyAbordPage.png"

const HomePage = () => {
    return (
        <div className="bg-[#1e6deb] ">
            <div className="md:flex md:justify-evenly md:items-center text-center md:pt-0 pt-5">
                <div className=''>
                    <h1 className="text-4xl text-white font-bold">Our mission is to help <br /> Bangladeshi students </h1>
                    <h1 className="text-6xl text-white font-bold">study abroad</h1>
                    <button className="btn text-[#1e6deb] px-16 mt-4">i’m a student who wants study abroad</button>
                </div>
                <div className='md:w-2/5 w-5/6'>
                    <img className='w-full' src={homePageImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;