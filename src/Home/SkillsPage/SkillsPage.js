import React from 'react';
import learningImage from "../../assets/graduation.png";
import SkillsCards from './SkillsCards';
import Tilt from 'react-parallax-tilt';
import { useQuery } from '@tanstack/react-query';

const SkillsPage = () => {
    const { isPending, error, data: skillsData = 0 } = useQuery({
        queryKey: ['skillsData'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/videos/");
            const data = await res.json();
            return data;
        }
    })

    return (
        <div
            className='bg-[#173158] py-12 md:flex md:justify-center md:items-center px-6 text-center'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-10'>
                {
                    isPending === false ? skillsData?.map(item => <div data-aos="fade-up"><SkillsCards card={item}></SkillsCards></div>) :  <div><span className="loading loading-spinner text-primary"></span></div>
                }
            </div>
            <div className='md:w-[50rem] w-5/6' data-aos-duration="1000" data-aos="zoom-in">
                <Tilt>
                    <img className='w-full' src={learningImage} alt="" />
                </Tilt>
            </div>
        </div>
    );
};

export default SkillsPage;