import React from 'react';
import learningImage from "../../assets/graduation.png";
import javascript from "../../assets/javascript.png"
import studyInChina from "../../assets/studyInChina.jpg"
import studyInJapan from "../../assets/studyInJapan.jpg"
import SkillsCards from './SkillsCards';

const SkillsPage = () => {
    const gridItems = [
        {
            image: javascript,
            title: 'জাভাস্ক্রিপ্ট ফর বিগিনার্স',
            discription: 'বিগিনার দের জন্য সম্পূর্ণ ফ্রি জাভাস্ক্রিপ্ট সিরিজ।',
            id:1
        },
        {
            image: javascript,
            title: 'মডার্ন জাভাস্ক্রিপ্ট ফর বিগিনার্স',
            discription: 'বিগিনার দের জন্য সম্পূর্ণ ফ্রি মডার্ন জাভাস্ক্রিপ্ট প্লেলিস্ট',
            id:2
        },
        {
            image: studyInChina,
            title: 'গাইডলাইন টুঁ স্টাডি ইন চায়না ',
            discription: 'চীন এ স্টাডি এর জন্য সম্পূর্ণ ফ্রী গাইডলাইন প্লেলিস্ট',   
            id: 3
        },
        {
            image: studyInJapan,
            title: 'গাইডলাইন টুঁ স্টাডি ইন জাপান',
            discription: 'জাপান এ স্টাডি এর জন্য সম্পূর্ণ ফ্রী গাইডলাইন',   
            id: 4
        },
    ]

    return (
        <div
         className='bg-[#173158] py-12 md:flex md:justify-center md:items-center px-6 text-center'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-10'>
                {gridItems.map(item => <div data-aos="fade-up"><SkillsCards card={item}></SkillsCards></div>)}
            </div>
            <div className='md:w-[50rem] w-5/6'  data-aos-duration="1000" data-aos="zoom-in">
                <img className='w-full' src={learningImage} alt="" />
            </div>
        </div>
    );
};

export default SkillsPage;