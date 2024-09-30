import React from 'react';
import learningImage from "../../assets/graduation.png";
import SkillsCards from './SkillsCards';
import { useQuery } from '@tanstack/react-query';
import triangle3d from '../../assets/pyramid3dShape.png'
import cube3d from '../../assets/cube3dShape.png'

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
            className='bg-[#00001F] py-12 relative'>
            <img src={triangle3d} className='w-28 absolute top-0' alt="" />
            <div className='md:flex md:justify-center md:items-center px-6 text-center'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-10'>
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