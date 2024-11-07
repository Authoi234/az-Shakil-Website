import React, { useState } from 'react';
import learningImage from "../../assets/graduation.png";
import SkillsCards from './SkillsCards';
import { useQuery } from '@tanstack/react-query';
import triangle3d from '../../assets/pyramid3dShape.png'
import cube3d from '../../assets/cube3dShape.png';

const SkillsPage = () => {

    const { isPending, error, data: skillsData = 0 } = useQuery({
        queryKey: ['skillsData'],
        queryFn: async () => {
            const res = await fetch("https://az-shakil-website-server.vercel.app/videos/");
            const data = await res.json();
            return data;
        }
    })

    return (
        <div 
        style={{
            clipPath: "polygon(100% 100%, 0% 100% , 0.00% 7.00%, 2.00% 6.94%, 4.00% 6.75%, 6.00% 6.46%, 8.00% 6.05%, 10.00% 5.56%, 12.00% 4.99%, 14.00% 4.37%, 16.00% 3.72%, 18.00% 3.06%, 20.00% 2.42%, 22.00% 1.81%, 24.00% 1.27%, 26.00% 0.80%, 28.00% 0.43%, 30.00% 0.17%, 32.00% 0.03%, 34.00% 0.01%, 36.00% 0.11%, 38.00% 0.33%, 40.00% 0.67%, 42.00% 1.10%, 44.00% 1.62%, 46.00% 2.21%, 48.00% 2.84%, 50.00% 3.50%, 52.00% 4.16%, 54.00% 4.79%, 56.00% 5.38%, 58.00% 5.90%, 60.00% 6.33%, 62.00% 6.67%, 64.00% 6.89%, 66.00% 6.99%, 68.00% 6.97%, 70.00% 6.83%, 72.00% 6.57%, 74.00% 6.20%, 76.00% 5.73%, 78.00% 5.19%, 80.00% 4.58%, 82.00% 3.94%, 84.00% 3.28%, 86.00% 2.63%, 88.00% 2.01%, 90.00% 1.44%, 92.00% 0.95%, 94.00% 0.54%, 96.00% 0.25%, 98.00% 0.06%, 100.00% 0.00%"
        }}
            className='bg-[#00001F] py-12 relative'>
            <img src={triangle3d} className='w-28 absolute top-0' alt="" />
            <div className='md:flex md:justify-center md:items-center px-6 text-center '>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mx-10'>
                    {
                        isPending === true ? <div><span className="loading loading-spinner text-primary"></span></div> : skillsData?.map(item => <div data-aos="fade-up"><SkillsCards card={item}></SkillsCards></div>)
                    }
                </div>
                <div className='lg:w-[50rem] h-[50%] w-5/6' data-aos-duration="1000" data-aos="zoom-in">
                    <img className='w-full' src={learningImage} alt="" />
                </div>
            </div>
            <img src={cube3d} className='w-28 absolute bottom-0 right-0' alt="" />
        </div>
    );
};

export default SkillsPage;