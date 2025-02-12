import React from 'react';
import { BsGlobeAmericas } from 'react-icons/bs';
import { IoPaperPlane } from 'react-icons/io5';

const Coaching = () => {
    return (
        <div className='bg-[#fefefe]'>
            <div className="w-full my-10 flex justify-center items-center">
                <div className="flex justify-center items-center gap-4 max-w-[1200px]">
                    <div className="w-1/2 text-start">
                        <h2 className='flex text-xl items-center justify-start mb-1 font-semibold text-[#1E6DEB]' ><IoPaperPlane className='rotate-45 mr-2' /> COACHING WE OFFER
                            <BsGlobeAmericas className='ml-1' /></h2>
                        <h2 className="text-[#262626] text-[2.7rem] leading-[50px] font-semibold mb-8">
                            Get The Immigration <b></b> Trainings You Deserve.
                        </h2>
                    </div>
                    <div className="w-1/2 text-start flex flex-col justify-center">
                        <p className='text-[#929293] font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center items-center'>
                <div className='w-[1200px] flex-row flex justify-center gap-4 items-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 content-between justify-between">
                        {/* grid Item */}
                        <div className='grid-item bg-[#FFFFFF] w-[396px] group transition-all duration-500' style={{ padding: "24px 34px 30px 33px" }}>
                            <div className='mb-6 flex items-center'>
                                <div className="mr-2">
                                    <h1 className="text-[24px] leading-[45px] font-bold text-[#1E6DEB]">01</h1>
                                </div>
                                <div className='text-center ml-2' style={{ alignSelf: "center !important" }}>
                                    <h1 className='text-[#000000] text-[28px] leading-[36px] font-bold'>Citizenship Test</h1>
                                </div>
                            </div>
                            <div className='text-start text-[#929293] font-normal'>
                                Lorem Ipsum is not simply random text. It <br /> has roots in a piece of classical Latin <br /> literature from 45 BC, making
                            </div>
                        </div>
                        {/* grid Item */}
                        <div className='grid-item bg-[#FFFFFF] w-[396px] group transition-all duration-500' style={{ padding: "24px 34px 30px 33px" }}>
                            <div className='mb-6 flex items-center'>
                                <div className="mr-2">
                                    <h1 className="text-[24px] leading-[45px] font-bold text-[#1E6DEB]">02</h1>
                                </div>
                                <div className='text-center ml-2 ' style={{ alignSelf: "center !important" }}>
                                    <h1 className='text-[#000000] text-[28px] leading-[36px] font-bold'>TOEFL Coaching</h1>
                                </div>
                            </div>
                            <div className='text-start text-[#929293] font-normal'>
                                Lorem Ipsum is not simply random text. It <br /> has roots in a piece of classical Latin <br /> literature from 45 BC, making
                            </div>
                        </div>
                        {/* grid Item */}
                        <div className='grid-item bg-[#FFFFFF] w-[396px] group transition-all duration-500' style={{ padding: "24px 34px 30px 33px" }}>
                            <div className='mb-6 flex items-center'>
                                <div className="mr-2">
                                    <h1 className="text-[24px] leading-[45px] font-bold text-[#1E6DEB]">03</h1>
                                </div>
                                <div className='text-center ml-2 ' style={{ alignSelf: "center !important" }}>
                                    <h1 className='text-[#000000] text-[28px] leading-[36px] font-bold'>PTE Coaching</h1>
                                </div>
                            </div>
                            <div className='text-start text-[#929293] font-normal'>
                                Lorem Ipsum is not simply random text. It <br /> has roots in a piece of classical Latin <br /> literature from 45 BC, making
                            </div>
                        </div>
                        {/* grid Item */}
                        <div className='grid-item bg-[#FFFFFF] w-[396px] group transition-all duration-500' style={{ padding: "24px 34px 30px 33px" }}>
                            <div className='mb-6 flex items-center'>
                                <div className="mr-2">
                                    <h1 className="text-[24px] leading-[45px] font-bold text-[#1E6DEB]">04</h1>
                                </div>
                                <div className='text-center ml-2 ' style={{ alignSelf: "center !important" }}>
                                    <h1 className='text-[#000000] text-[28px] leading-[36px] font-bold'>SAT Coaching</h1>
                                </div>
                            </div>
                            <div className='text-start text-[#929293] font-normal'>
                                Lorem Ipsum is not simply random text. It <br /> has roots in a piece of classical Latin <br /> literature from 45 BC, making
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center  gap-4 px-4 ml-4 w-[297px]">
                        <img src="https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/elementor/thumbs/couching-qnlooc8tvo3z28b3nl8y75jl6srjhq55dbpx9bj78o.jpg" className='w-full rounded-md' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coaching;