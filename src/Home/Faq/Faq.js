import React from 'react';
import img from "../../assets/faqs.jpg";

const Faq = () => {
    return (
        <div className="w-full flex mt-5 justify-center items-center">
            <div className="max-w-[1350px] mx-10 p-6 bg-white text-[#173158]">
                <div className="w-full flex justify-center items-center">
                    <div className="w-2/3 text-center">
                        <h2 className='flex text-xl items-center justify-center font-semibold text-[#1E6DEB]' >  <div className='overflow-hidden'>
                            <img src={require('../../assets/logo.png')} className='  mx-2' style={{
                                width: "25px",
                                height: "25px",
                                objectFit: "cover",
                                objectPosition: "0% 25%",
                            }} alt="" />
                        </div> FAQ </h2>
                        <h2 className="text-[#262626] text-[2.7rem] leading-[50px] font-[600] mb-8">
                            Frequently Asked Questions
                        </h2>
                    </div>
                </div>
                <div className="md:flex md:justify-center md:items-center">
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <img src={img} className='w-[90%]' alt="" />
                    </div>
                    <div className="join join-vertical bg-base-100 md:w-1/2">
                        <div className="collapse collapse-arrow join-item border-base-300 border transition-all hover:border-[#1E6DEB]">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-2xl font-semibold">1. How much to pay? </div>
                            <div className="collapse-content text-base">At apprent global, we kep our charges affordable and fair compared to others in
                                the market. Plus, some of our services
                                are completely free, because we’re committed to helping you achieve your goals
                                without added stress.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border transition-all hover:border-[#1E6DEB]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold"> 2. How can i contact with you?</div>
                            <div className="collapse-content text-base">Fill out the contact form above and submit it. We'll do our best to assist you.
                                At apprent, we support students in study
                                abroad and turn their dreams into reality for a brighter future.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border transition-all hover:border-[#1E6DEB]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">3. What we offer? </div>
                            <div className="collapse-content text-base">We provides: <br /> - Pre-Departure Briefing: Essential guidance before your journey. <br />   - Airport Pickup and Drop: Reliable transportation services. <br /> - SOP and LOR Writing: Expert help for strong documents. <br /> - One-on-One Guidance: Personalized support for students and parents to make the
                                best decisions. <br /> - Achieving Scholarships in multiple countries with a monthly stipend</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border transition-all hover:border-[#1E6DEB]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">4. Study in China</div>
                            <div className="collapse-content text-base"> We apprent is proud to be authorized agents of over 150 universities and the
                                sole global representatives
                                of 5 renowned institutions.We offer admissions in China for Diploma, Bachelor,
                                Masters, and PhD programs,
                                along with 100% scholarships to make education accessible and affordable for
                                aspiring students.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border transition-all hover:border-[#1E6DEB]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">5. Study in UK?</div>
                            <div className="collapse-content text-base">Leading universities in the UK to help students achieve their education goals. 
We offer admissions for a 
wide range of programs including Bachelor's, Master's, and PhD degrees. With 
personalized support and guidance,
 we ensure a smooth and successful application process for students aspiring to 
study in the UK.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;