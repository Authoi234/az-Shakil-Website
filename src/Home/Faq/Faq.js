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
                            <div className="collapse-title text-2xl font-semibold">Do we need to pay??</div>
                            <div className="collapse-content text-base">No, you dont need to pay. We are a dedicated voluntary service organization empowering students to study abroad. Together, we can turn dreams into reality and inspire a brighter future!</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border transition-all hover:border-[#1E6DEB]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">How can I contact with you?</div>
                            <div className="collapse-content text-sm">To contact fill up the contact form above then click, we will try our best. We empower students to study abroad. Together, we can turn dreams into reality and inspire a brighter future! </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border transition-all hover:border-[#1E6DEB]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">Is it free?</div>
                            <div className="collapse-content text-sm">No, you dont need to pay its Free! We are a dedicated voluntary service organization empowering students to study abroad. Together, we can turn dreams into reality and inspire a brighter future!</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border transition-all hover:border-[#1E6DEB]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">Can I trust you?</div>
                            <div className="collapse-content text-sm">Yes, you have to <trust></trust> us. We are a dedicated voluntary service organization empowering students to study abroad. Together, we can turn dreams into reality and inspire a brighter future!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;