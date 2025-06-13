import React, { useContext } from 'react';
import { BsGlobeAmericas } from 'react-icons/bs';
import { IoPaperPlane } from 'react-icons/io5';
import Tilt from 'react-parallax-tilt';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import servicesHeading from "../../assets/Services.png";
import { AuthContext } from '../../context/AuthProvider';

const Services = () => {
    const servicesData = [
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-1-1-qna20z2ttiq4n7byyd2yls6g6nxcf8oilmxctruvdk.png",
            special: false,
            text: "Career Counseling",
            isOdd: true
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-3-1-qna212u6kuv9xn6icepgvr8ak7eta13fy5jaqvpaoo.png",
            special: false,
            text: "Financial Planning",
            parallax: false
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-2-1-qna210yi76spaf98ndw7qrpddfo2umvz9w8bsbs314.png",
            special: false,
            text: "Business Guidance",
            isOdd: true
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
            text: "Application Assistance",
            isOdd: true
        },
        {
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/services-6-1-qna218h7pv2zvaybfh58apt24in0k7ptyxg7mjgxnc.png",
            special: false,
            text: `Health Insurance`
        },
        {
            special: true,
            feature: "img",
            img: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/Cta-img-qnb8sx2bzheg5fu0x7wuepw588vq4be0p12k4mjcq0.jpg",
        },
    ];

    return (
        <div className='services-bg pt-5 ' id='services-sect'>
            <div className='px-10 py-5 '>
                <div className="w-full flex justify-center items-center">
                    <div className="w-1/2 text-center">
                        <h2 className='flex text-lg items-center mb-[10px] justify-center font-semibold text-[#1E6DEB]' >  <img src={require('../../assets/logo.png')} className='  mx-2' style={{
                            width: "25px",
                            height: "25px",
                            objectFit: "cover",
                            objectPosition: "0% 25%",
                        }} alt="" /> OUR SERVICES </h2>
                        <div className="flex justify-center items-center w-full">
                            <div className="w-[400px] md:w-[300px] my-4">
                                <img src={servicesHeading} className='w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full ">
                    <div className='container grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10 w-full mb-20 max-w-[1200px]'>
                        {
                            servicesData.map(item => {
                                if (item.special && item.feature === "img") {
                                    return <div className='w-[100%] mt-1 rounded-md'>
                                        <img src={item?.img} className='w-full rounded-lg' alt="" />
                                    </div>
                                }
                                else if (item.special && item.feature === "grid") {
                                    return (
                                        <Tilt scale={0.95} glareEnable={false} className="background-stripes parallax-effect rounded-md" perspective={900}>
                                            <div className='p-11 w-full bg-[#1E6DEB] rounded-lg transition-all duration-700 group hover:bg-black group-hover:bg-black'>
                                                <BsFillGrid3X3GapFill className='text-white p-3 mb-10 bg-black text-5xl rounded-[10px] group-hover:bg-[#1E6DEB]' />
                                                <h1 className='font-urbanist text-[28px] leading-9 font-[700] text-white group-hover:text-[#1E6DEB]'>
                                                    Easy Study Abroad
                                                </h1>
                                            </div>
                                        </Tilt>
                                    )
                                }
                                else if (!item.special && item?.isOdd === true) {
                                    return (
                                        <Tilt scale={0.9} glareEnable={false} className="background-stripes rounded-md parallax-effect shadow-md" perspective={1300}>
                                            <div className='p-11 w-full bg-white rounded-md transition-all duration-700 group ' style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/black.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                                <figure className='mb-9'><img src={item?.img} className='w-auto max-w-full' alt="" /></figure>
                                                <h1 className='font-urbanist text-[28px] leading-9 font-[700] text-[#262626] group-hover:text-[#1E6DEB]'>
                                                    {item?.text}
                                                </h1>
                                            </div>
                                        </Tilt>
                                    )
                                }
                                else if (!item.special) {
                                    return (
                                        <Tilt scale={0.9} glareEnable={false} className="background-stripes rounded-md parallax-effect shadow-md" perspective={1300}>
                                            <div className='p-11 w-full bg-white rounded-md transition-all duration-700 group '>
                                                <figure className='mb-9'><img src={item?.img} className='w-auto max-w-full' alt="" /></figure>
                                                <h1 className='font-urbanist text-[28px] leading-9 font-[700] text-[#262626] group-hover:text-[#1E6DEB]'>
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
        </div>
    );
};

export default Services;