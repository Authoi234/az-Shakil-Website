import React from 'react';

const Coaching = () => {
    return (
        <div id='coaching-sect'>
            <div className='bg-[#fefefe] pb-5'>
                <div className="w-full my-10 flex justify-center items-center text-center">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-[1200px]">
                        <div className="w-full md:w-1/2 text-center md:text-start">
                            <h2 className='flex text-xl items-center justify-center md:justify-start mb-1 font-semibold text-[#1E6DEB] -ml-1'>
                                <div className='overflow-hidden'>
                                    <img src={require('../../assets/logo.png')} className='mx-2' style={{ width: "25px", height: "25px", objectFit: "cover", objectPosition: "0% 25%" }} alt="" />
                                </div>
                                COACHING WE OFFER
                            </h2>
                            <h2 className="text-[#262626] text-[2.7rem] leading-[50px] font-semibold mb-8">
                                Get the <span className='text-[#1E6DEB] uppercase'>Trainings <br /> You Deserve</span>.
                            </h2>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-start flex flex-col justify-center">
                            <p className='text-[#929293] font-normal text-justify'>
                                Achieve Excellence with Focused Coaching Our expert immigration coaching empowers you to excel in interviews and language tests, ensuring a smooth journey toward your global goals.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full items-center text-center">
                    <div className='max-w-[1200px] flex-row md:flex md:justify-center gap-4 md:items-center'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 content-between mb-10  md:mb-1 justify-between">
                            {/* grid Item */}
                            <div className='grid-item bg-[#FFFFFF] w-[396px] group transition-all duration-500' style={{ padding: "24px 34px 30px 33px" }}>
                                <div className='mb-6 flex items-start'>
                                    <div className="mr-2">
                                        <h1 className="text-[24px] leading-[45px] font-bold text-[#1E6DEB]">01</h1>
                                    </div>
                                    <div className='text-start ml-2' style={{ alignSelf: "center !important" }}>
                                        <h1 className='text-[#000000] text-[28px] leading-[36px] font-bold'>Interview Grooming</h1>
                                    </div>
                                </div>
                                <div className='text-[#929293] font-normal text-justify'>
                                    Master the art of presenting yourself with confidence.
                                    Our expert coaching prepares you
                                    for success in any immigration-related interview
                                </div>
                            </div>
                            {/* grid Item */}
                            <div className='grid-item bg-[#FFFFFF] w-[396px] group transition-all duration-500' style={{ padding: "24px 34px 30px 33px" }}>
                                <div className='mb-6 flex items-start'>
                                    <div className="mr-2">
                                        <h1 className="text-[24px] leading-[45px] font-bold text-[#1E6DEB]">02</h1>
                                    </div>
                                    <div className='text-start ml-2 ' style={{ alignSelf: "center !important" }}>
                                        <h1 className='text-[#000000] text-[28px] leading-[36px] font-bold'>Professor Outreach Guidance</h1>
                                    </div>
                                </div>
                                <div className='text-[#929293] font-normal text-justify'>
                                    Craft the Perfect Acceptance Letter! Get expert
                                    support to draft compelling emails
                                    and documents to effectively communicate with professors and secure your spot in
                                    their programs.
                                </div>
                            </div>
                            {/* grid Item */}
                            <div className='grid-item bg-[#FFFFFF] w-[396px] group transition-all duration-500' style={{ padding: "24px 34px 30px 33px" }}>
                                <div className='mb-6 flex items-start'>
                                    <div className="mr-2">
                                        <h1 className="text-[24px] leading-[45px] font-bold text-[#1E6DEB]">03</h1>
                                    </div>
                                    <div className='text-start ml-2 ' style={{ alignSelf: "center !important" }}>
                                        <h1 className='text-[#000000] text-[28px] leading-[36px] font-bold'>PTE Coaching</h1>
                                    </div>
                                </div>
                                <div className='text-[#929293] font-normal text-justify'>
                                    Unlock opportunities worldwide with our expert guidance for the
                                    Pearson Test of English. Learn
                                    strategies to excel and stand out
                                </div>
                            </div>
                            {/* grid Item */}
                            <div className='grid-item bg-[#FFFFFF] w-[396px] group transition-all duration-500' style={{ padding: "24px 34px 30px 33px" }}>
                                <div className='mb-6 flex items-start'>
                                    <div className="mr-2">
                                        <h1 className="text-[24px] leading-[45px] font-bold text-[#1E6DEB]">04</h1>
                                    </div>
                                    <div className='text-start ml-2 ' style={{ alignSelf: "center !important" }}>
                                        <h1 className='text-[#000000] text-[28px] leading-[36px] font-bold'>Duolingo Coaching</h1>
                                    </div>
                                </div>
                                <div className='text-[#929293] font-normal text-justify'>
                                    Quick, effective, and tailored to your goals. Our Duolingo
                                    coaching simplifies your journey to
                                    language mastery.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center  gap-4 px-4 ml-4 w-[300px]">
                            <img src="https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/couching-qnlooc8tvo3z28b3nl8y75jl6srjhq55dbpx9bj78o.jpg" className='w-full rounded-md' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coaching;