import React, { useEffect, useRef, useState } from 'react';
import Img1 from '../../assets/aboutImg1.jpg';
import Img2 from '../../assets/aboutImg2.jpg';
import logo from '../../assets/logo.png';
import azShakilPortfolioImage from '../../assets/azShakilPortfolioImage.png';
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const AboutUs = () => {

    const [bgColor, setBgColor] = useState("rgb(10, 0, 65)");
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

            const startColor = [10, 0, 65];
            const endColor = [14,40,80];

            const currentColor = startColor.map((start, i) =>
                Math.round(start + (endColor[i] - start) * scrollPercent)
            );

            setBgColor(`rgb(${currentColor.join(",")})`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isInView]);

    return (
        <div className='px-5 py-5 text-center' ref={componentRef} style={{
            background: bgColor
        }}>
            <h1 className="text-3xl font-extrabold text-white mb-3" data-aos="fade-up">
                প্রতিষ্ঠাতা সম্পর্কে কিছু কথা
            </h1>
            <div className='lg:flex lg:justify-center lg:items-center text-center' data-aos="flip-right">
                <div
                    className='flex px-3'
                >
                    <div className='absolute' style={{ borderTop: "30px solid #0E2850", borderRight: "30px solid pink", borderBottom: "30px solid pink", borderLeft: "30px solid #0E2850", boxShadow: '1px 1px 0px black', borderEndEndRadius: "16px" }}></div>
                    <img className='lg:w-1/2 lg:h-96 w-1/2 flex justify-center items-center rounded-s-2xl' src={Img1} alt="" />
                    <img className='lg:w-1/2 lg:h-96 w-1/2 flex justify-center items-center rounded-e-2xl' src={Img2} alt="" />
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
                    <div className='text-white my-2'>
                        <h3 className='text-base' style={{ fontWeight: '550' }}>Ashaduzzaman Shakil</h3>
                        <h3 className='text-lg font-medium'>Founder - Ashaduzzaman Shakil</h3>
                    </div>
                    <div className='flex items-center'>
                        <div className='w-48 my-2'>
                            <img src={logo} className='w-full bg-white rounded-badge px-1.5 py-1' style={{ filter: "drop-shadow(2px 4px 6px #1e6deb)" }} alt="" />
                        </div>
                        <div className="divider divider-neutral divider-horizontal h-14 w-2"></div>
                        <div className='flex gap-3'>
                            <a href="https://www.facebook.com/infoAZS/" target="_blank" rel="noopener noreferrer"><FaFacebookF className='bg-gradient-to-r from-blue-400 to-blue-600 text-white p-0.5 rounded-full w-10 h-10' /></a>
                            <a href="https://www.youtube.com/@iAZShakil" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-red-500 bg-white rounded-badge p-0.5 w-10 h-10" /></a>
                            <a href="https://azshakil.com/" target="_blank" rel="noopener noreferrer"><img className='w-10 h-10' src={azShakilPortfolioImage} alt="" /></a>
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
    );
};

export default AboutUs;