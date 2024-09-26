import React from 'react';
import Img1 from '../../assets/aboutImg1.jpg';
import Img2 from '../../assets/aboutImg2.jpg';
import logo from '../../assets/logo.png';
import azShakilPortfolioImage from '../../assets/azShakilPortfolioImage.png';
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className='bg-[#0e2850] px-5 py-10 text-center'>
            <h1 className="text-3xl font-extrabold text-white mb-8" data-aos="fade-up">
                প্রতিষ্ঠাতা সম্পর্কে কিছু কথা
            </h1>
            <div className='lg:flex lg:justify-center lg:items-center text-center' data-aos="flip-right">
                <div
                    className='flex px-3'
                >
                    <div className='absolute' style={{ borderTop: "30px solid #0e2850", borderRight: "30px solid #7d9feb", borderBottom: "30px solid #7d9feb", borderLeft: "30px solid #0e2850", boxShadow: '1px 1px 0px black', borderEndEndRadius: "16px" }}></div>
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
                        আমি <span className='font-semibold'> মোঃ আশাদুজ্জামান শাকিল</span>, যিনি এ জেড শাকিল নামে পরিচিত। আমি সিভিল ইঞ্জিনিয়ারিংয়ে ডিপ্লোমা এবং ব্যাচেলর ডিগ্রি নিয়ে উচ্চতর যোগ্যতা সম্পন্ন ব্যক্তি। পাশাপাশি, আমি গ্রাফিক ডিজাইনার এবং আর্কিটেকচারাল ভিজুয়ালাইজার হিসেবে ৮ বছরেরও বেশি সময় ধরে পেশাদার হিসেবে কাজ করছি। <br />
                        আমার সবচেয়ে বড় শক্তি হলো, আমি দ্রুত স্বশিক্ষায়ন করতে পারি। আমি ডিজাইন করতে এবং স্ট্রাকচার সুপারভিশন করতে ভালোবাসি। আমি ১০ম শ্রেণিতে পড়ার সময় গ্রাফিক ডিজাইনার হিসেবে শুরু করি এবং থ্রিডি ডিজাইন এবং অ্যানিমেশনের দিকে অগ্রসর হই। ২০১৭ সালে পেশাদার আর্কিটেকচারাল ভিজুয়ালাইজার হিসেবে পুরস্কৃত হয়েছি এবং ২০১৯ সালে অ্যাডোবির পক্ষ থেকে UI/UX এর জন্য আর্লি বার্ড পুরস্কার অর্জন করেছি। আমি যুক্তরাষ্ট্র থেকে কন্সট্রাকশন প্রকল্প ব্যবস্থাপনা এবং খরচের মূল্যায়ন সম্পর্কে কোর্স সম্পন্ন করেছি। <br />
                        আমি রেভিট, টুইনমোশন এবং লুমিয়নে দক্ষ। ২০১৬ সাল থেকে লুমিয়ন এবং টুইনমোশন ব্যবহার করে বড় পরিসরের ল্যান্ডস্কেপ এবং অ্যানিমেশন তৈরির ক্ষেত্রে আমার বিশেষজ্ঞতা রয়েছে। আমি বাংলাদেশে বেশ কয়েকটি প্রকল্প সম্পন্ন করেছি এবং চীনে দুটি প্রকল্পও সম্পন্ন করেছি
                    </p>
                    <div className='text-white text-sm my-1 pl-3'><ul>
                        <li className='list-disc'>Former Vice-Chairman of ISC at Hebei University of Technology</li>
                        <li className='list-disc'>Studied Construction Project Management at Columbia University</li>
                        <li className='list-disc'>Studied Civil Engineering at National Institute of Engineering and Technology - NIET</li>
                        <li className='list-disc'>Studied Civil Engineering at Stamford University Bangladesh</li>
                    </ul></div>
                    <div className='text-white my-2'>
                        <h3 className='text-base' style={{ fontWeight: '550' }}>আশাদুজ্জামান শাকিল</h3>
                        <h3 className='text-base font-medium'>প্রতিষ্ঠাতা - আশাদুজ্জামান শাকিল</h3>
                    </div>
                    <div className='flex items-center'>
                        <div className='w-48 my-2'>
                            <img src={logo} className='w-full bg-white rounded-badge px-1.5 py-1' style={{ filter: "drop-shadow(2px 4px 6px #1e6deb)" }} alt="" />
                        </div>
                        <div className="divider divider-neutral divider-horizontal h-14 w-2"></div>
                        <div className='flex gap-3'>
                            <a href="https://www.facebook.com/infoAZS/" target="_blank" rel="noopener noreferrer"><FaFacebookF className='bg-gradient-to-r from-blue-400 to-blue-600 text-white p-0.5 rounded-full w-10 h-10' /></a>
                            <a href="https://www.youtube.com/@iAZShakil" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-red-500 bg-white rounded-badge p-0.5 w-10 h-10"/></a>
                            <a href="https://azshakil.com/" target="_blank" rel="noopener noreferrer"><img className='w-10 h-10' src={azShakilPortfolioImage} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;