import React, { useEffect, useRef, useState } from 'react';
import Img1 from '../../assets/aboutImg1.jpg';
import Img2 from '../../assets/aboutImg2.jpg';
import logo from '../../assets/logo.png';
import azShakilPortfolioImage from '../../assets/azShakilPortfolioImage.png';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import logoIcon from "../../assets/logoIcon-bgless.png";

const AboutUs = () => {

    return (
        <div className='bg-[#000130] min-h-screen h-auto'>
            <div data-theme="light" className='px-5 py-16 text-center' style={{
                background: "#000130"
            }}>
                <h1 className="text-3xl font-extrabold text-white mb-3 font-styled" data-aos="fade-up">
                    A talk About Founder
                </h1>
                <div className='lg:flex lg:justify-center lg:items-center text-center' data-aos="flip-right">
                    <div
                        className='justify-around flex px-3'
                    >
                        <div className="w-1/2">
                            <img className='w-full  border-8 border-[#000130] flex justify-center items-center rounded-s-2xl' src={Img1} alt="" />
                            <div className="text-white p-2 border-8 border-[#000130] " style={{ backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/04/testi-section-vector.png)", backgroundColor: "#111111", backgroundRepeat: "no-repeat", backgroundPosition: 'top' }}>
                                <h1 className="text-5xl font-medium">100%</h1>
                                <span className="text-lg font-styled">Successful Visa <br /> Process Rate</span>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img className='ml-2 w-3/4 border-8 border-[#000130] opacity-50 animation-updown' src={logoIcon} alt="" />
                            <img className=' w-full mt-10 flex justify-center items-center rounded-e-2xl border-8 border-[#000130]' src={Img2} alt="" />
                        </div>
                    </div>
                    <div className="divider divider-primary divider-horizontal"></div>
                    <div
                        className='lg:w-1/2 text-left'
                    >
                        <p className='text-gray-300 py-1' style={{
                            fontSize: "17px",
                            lineHeight: "22px "
                        }}>
                            I am <span className='font-semibold'> Md. Ashaduzzaman Shakil </span>, Who is known as AZ Shakil. I am highly qualified person with diploma and bachelor degree in civil engineering . As well as, I have been working as a graphic designer and architectural visualizer for over 8 years as a professional.<br />
                            My greatest power is I can do self-study very fast. I love to Design and doing Stuctural Super Vision. When I was in Class 10, I started Grafic Design and proceeded to The ThreeD Design and Animation । In 2017 I have been Awarded as professional architectural visualizer and in 2019 I have won the "Early Bird" award for UI/UX from Adobe. From United States, I have completed course about Construction Project Management and Cost Assessment .<br />
                            I am expert in Revit, TwinMotion and Lumion. Since 2016 I specialize in creating large scale landscapes and animations using Lumion and TwinMotion. I have completed several projects in Bangladesh and also completed two projects in China
                        </p>
                        <div className='text-white text-sm my-1 pl-3'><ul>
                            <li className='list-disc'>Former Vice-Chairman of ISC at Hebei University of Technology</li>
                            <li className='list-disc'>Studied Construction Project Management at Columbia University</li>
                            <li className='list-disc'>Studied Civil Engineering at National Institute of Engineering and Technology - NIET</li>
                            <li className='list-disc'>Studied Civil Engineering at Stamford University Bangladesh</li>
                        </ul></div>
                        <div className="md:flex justify-start items-center">
                            <div>
                                <div className='text-white my-2'>
                                    <h3 className='text-base' style={{ fontWeight: '550' }}>Ashaduzzaman Shakil</h3>
                                    <h3 className='text-lg font-medium'>Founder - Ashaduzzaman Shakil</h3>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-44 my-2'>
                                        <img src={logo} className='w-full bg-white rounded-badge px-1.5 py-1' style={{ filter: "drop-shadow(3px 5px 3px #1e6deb)" }} alt="" />
                                    </div>
                                    <div className="divider divider-neutral divider-horizontal h-14 w-2"></div>
                                    <div className='flex gap-3'>
                                        <a href="https://www.facebook.com/infoAZS/" target="_blank" rel="noopener noreferrer"><FaFacebookF className='bg-gradient-to-r from-blue-400 to-blue-600 text-white p-0.5 rounded-full w-9 h-9' /></a>
                                        <a href="https://www.youtube.com/@iAZShakil" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-red-500 bg-white rounded-badge p-0.5 w-9 h-9" /></a>
                                        <a href="https://azshakil.com/" target="_blank" rel="noopener noreferrer"><img className='w-9 h-9' src={azShakilPortfolioImage} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="md:flex divider hidden divider-accent divider-horizontal h-28 w-1 "></div>
                            </div>
                            <div className='bg-white px-4 py-5 text-black flex justify-center items-center'>
                                <FaTelegram className='mr-2 w-9 h-9 text-[#1E6DEB] border border-white rounded-full'></FaTelegram>
                                <div>
                                    <p className="text-sm">
                                        Message Me Any time
                                    </p>
                                    <a href='https://t.me/iazshakil' className='font-medium text-[15px] text-[#1E6DEB]' target='_blank' rel='noreferrer'>https://t.me/iazshakil</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-2xl text-white'>VISA Success Story</h4>
                            <p className='text-base text-white'>
                                STUDENTS Wing by AZ যা এখন 𝗮𝗽𝗽𝗿𝗲𝗻𝘁 𝗴𝗹𝗼𝗯𝗮𝗹 এর সামান্য কিছু সফলতা যা শুরু করেছিলাম একা, এখন আলহামদুলিল্লাহ বলার মত একটা টিম আছে। যারা আপনাদের কে ডেডিকেটেটলি গাইড, সাজেশন এবং হেল্প করার জন্য প্রস্তুত । আমি এবং আমার টীম কোন কোয়ালিটি তে বিশ্বাসী কোয়ানটিটি, লাইক, কমেন্টে বিশ্বাসী নয়, কাজে বিশ্বাসী ।
                            </p>
                            <span className='text-white'>See Visa Success story, Link</span><p className='text-white '><a className='underline decoration-[#fffbc2] underline-offset-2' href="https://www.facebook.com/media/set/?set=a.690482626426774&type=3" rel='noreferrer' target='_blank'>Click Here</a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;