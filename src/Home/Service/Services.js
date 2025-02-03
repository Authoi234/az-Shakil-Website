import React from 'react';
import { BsGlobeAmericas } from 'react-icons/bs';
import { IoPaperPlane } from 'react-icons/io5';
import Tilt from 'react-parallax-tilt';
import { BsFillGrid3X3GapFill } from "react-icons/bs";


const Services = () => {
    const servicesData = [
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-1-1-qna20z2ttiq4n7byyd2yls6g6nxcf8oilmxctruvdk.png",
            special: false,
            text: "Career Counseling"
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-3-1-qna212u6kuv9xn6icepgvr8ak7eta13fy5jaqvpaoo.png",
            special: false,
            text: "Financial Planning"
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-2-1-qna210yi76spaf98ndw7qrpddfo2umvz9w8bsbs314.png",
            special: false,
            text: "Business Guidance"
        },
        {
            special: true,
            feature: "grid",
            text: "Easy Study Abroad"
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-5-1-qna216ljc70f8311qgbz5qa4xqwa4tidao58nzjpzs.png",
            special: false,
            text: "Document Preparation"

        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-4-1-qna214puyixukv3s1fiq0qr7qz5jpfawmeu9pfmic8.png",
            special: false,
            text: "Application Assistance"
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-6-1-qna218h7pv2zvaybfh58apt24in0k7ptyxg7mjgxnc.png",
            special: false,
            text: "Health Insurance"
        },
        {
            special: true,
            feature: "img",
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/Cta-img-qnb8sx2bzheg5fu0x7wuepw588vq4be0p12k4mjcq0.jpg",
        },
    ];

    return (
        <div className='px-10 py-5 bg-[#020614]'>
            <div className="w-full flex justify-center items-center">
                <div className="w-1/2 text-center">
                    <h2 className='flex text-xl items-center justify-center font-semibold text-[#1E6DEB]' ><IoPaperPlane className='rotate-45 mr-2' /> Services <BsGlobeAmericas className='ml-1' /></h2>
                    <h2 className="text-white text-[2.7rem] leading-[50px] font-semibold mb-5">
                        Empowering Newcomers A Handbook on Immigration
                    </h2>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <div className='container grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10 w-full mb-20'>
                    {
                        servicesData.map(item => {
                            if (item.special && item.feature === "img") {
                                return <div className='w-full bg-white rounded-lg shadow-xl shadow-white'>
                                    <img src={item?.img} className='w-full rounded-lg' alt="" />
                                </div>
                            }
                            else if (item.special && item.feature === "grid") {
                                return (
                                    <Tilt scale={1.09} glareEnable={true} glareMaxOpacity={0.9} glareColor="white" glarePosition="all" glareBorderRadius="20px" className="background-stripes parallax-effect rounded-lg" perspective={700}>
                                        <div className='p-10 w-full bg-[#1E6DEB] rounded-lg transition-all duration-700 group hover:bg-black group-hover:bg-black shadow-xl shadow-white'>
                                            <BsFillGrid3X3GapFill className='text-white bg-black p-3 text-[3.5rem] rounded-xl group-hover:bg-[#1E6DEB]' />
                                            <h1 className='mt-10 text-3xl font-[700] text-white group-hover:text-[#1E6DEB]'>
                                                Easy Study Abroad
                                            </h1>
                                        </div>
                                    </Tilt>
                                )
                            }
                            else if (!item.special) {
                                return (
                                    <Tilt scale={0.95} glareEnable={true} glareMaxOpacity={0.9} glareColor="white" glarePosition="all" glareBorderRadius="20px" className="background-stripes rounded-lg parallax-effect " perspective={700}>
                                        <div className='p-10 w-full bg-white rounded-lg transition-all duration-700 group shadow-xl shadow-white'>
                                            <div className='w-14'><img src={item?.img} className='w-full' alt="" /></div>
                                            <h1 className='mt-10 text-3xl font-[700] text-[#262626] group-hover:text-[#1E6DEB]'>
                                                {item?.text}
                                            </h1>
                                        </div>
                                    </Tilt>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;