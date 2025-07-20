import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { format } from 'date-fns';
import { FaArrowRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/autoplay';


const OurBlogs = () => {
    const swiperRef = useRef(null);
    const { data: blogs, isLoading, isError, refetch } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await fetch(`https://az-shakil-website-server.vercel.app/blogs`);
            const data = await res.json();
            return data;
        },
    });

    useEffect(() => {
        const handleResize = () => {
            if (swiperRef.current) {
                swiperRef.current.swiper.update();  // Force update Swiper on resize
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='my-20 container mx-auto'>
            <div className="flex justify-center  items-center">

                <Swiper
                    ref={swiperRef}
                    modules={[Autoplay ,Pagination] }
                    slidesPerView={1}
                    centerInsufficientSlides={true}
                    speed={1000}
                    autoplay={{
                        delay: 1,
                        // reverseDirection: ,
                        disableOnInteraction: false,
                        waitForTransition: true,
                        stopOnLastSlide: false,
                        pauseOnMouseEnter: false
                    }}
                    loop={true}
                    spaceBetween={1}
                    breakpoints={{
                        740: {
                            slidesPerView: 2,
                            spaceBetween: 1,
                        },

                        1241: {
                            slidesPerView: 3,
                            spaceBetween: 1,
                        },
                    }}
                >
                    {blogs?.map((blog, i) => (
                        <SwiperSlide key={blog._id}>
                            {
                                i % 2 === 0 ? (<div className="card bg-base-100 border max-w-[370px] w-[370px] shadow-sm ">
                                    <figure className='max-w-[370px] max-h-[260px] relative overflow-visible'>
                                        <img className='w-[370px] h-[260px] rounded-xl' src={blog?.imgLink} alt='' />
                                        <div className="absolute -bottom-8 right-8">
                                            <div className="avatar">
                                                <div className='w-12 rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIR_1ZteURrPfg-Tfghr-GeZtP7R728ScaQ&s" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className='text-base'><span className='font-medium' style={{ color: 'green' }}>{blog?.blogType}</span> • <span className='font-medium' style={{ color: "#7a7a7a" }}>{format(new Date(blog?.timestamp), "MMM d, yyyy")}</span> </h2>
                                        <h2 className="text-xl font-medium ">{blog?.title}</h2>
                                        <p className='text-[#424242]'>
                                            {blog?.blogPara}
                                        </p>
                                        <div className="card-action">
                                            <a target='_blank' rel='noreferrer' href={`/blog/${blog?._id}`}>
                                                <button className="btn btn-link no-underline font-medium text-blue-600">Read Article <FaArrowRight className='text-xl text-blue-600'></FaArrowRight></button>
                                            </a>
                                        </div>
                                    </div>
                                </div>) :
                                    <div className="card border  max-w-[370] w-[370px] shadow-sm " style={{
                                        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${blog?.imgLink}) center/cover no-repeat`
                                    }}>
                                        <div className="card-body" style={{ paddingTop: "230px" }}>
                                            <div className="avatar">
                                                <div className='w-12 rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIR_1ZteURrPfg-Tfghr-GeZtP7R728ScaQ&s" alt="" />
                                                </div>
                                            </div>
                                             <a target='_blank' rel='noreferrer' href={`/blog/${blog?._id}`}><h2 className="transition-all duratin-500 hover:underline hover:decoration-white text-xl text-white font-medium ">{blog?.title}</h2></a>
                                            <p className='text-[#c0c0c0]'>
                                                {blog?.blogPara}
                                            </p>
                                            <h2 className='text-base'><span className='font-medium' style={{ color: 'green' }}>{blog?.blogType}</span> • <span className='font-medium' style={{ color: "#c0c0c0" }}>{format(new Date(blog?.timestamp), "MMM d, yyyy")}</span> </h2>
                                        </div>
                                    </div>
                            }
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default OurBlogs;