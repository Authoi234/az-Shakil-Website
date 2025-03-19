import React, { useEffect, useRef, useState } from 'react';
import learningImage from "../../assets/graduation.png";
import SkillsCards from './SkillsCards';
import { useQuery } from '@tanstack/react-query';
import triangle3d from '../../assets/pyramid3dShape.png'
import cube3d from '../../assets/cube3dShape.png';

const SkillsPage = () => {
    const [bgColor, setBgColor] = useState("rgb(32,22,88)");
    const [isInView, setIsInView] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const handleScroll = () => {
            const componentTop = componentRef.current.getBoundingClientRect().top;
            const maxScroll = 50;
            const scrollPercent = Math.min(Math.max(1 - componentTop / maxScroll, 0), 1);

            const startColor = [32, 22, 88];
            const endColor = [0, 0, 31];

            const currentColor = startColor.map((start, i) =>
                Math.round(start + (endColor[i] - start) * scrollPercent)
            );

            setBgColor(`rgb(${currentColor.join(",")})`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isInView]); 

    const { isPending, error, data: skillsData = 0 } = useQuery({
        queryKey: ['skillsData'],
        queryFn: async () => {
            const res = await fetch("https://az-shakil-website-server-kwe1eyc20-authoi234s-projects.vercel.app/videos/");
            const data = await res.json();
            return data;
        }
    })

    return (
        <div
            ref={componentRef}
            className={`py-12 relative bg-[#00001f]`}>
            <img src={triangle3d} className='w-28 absolute top-0' alt="" />
            <div className='md:flex md:justify-center md:items-center px-6 text-center '>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mx-4 md:mx-10'>
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