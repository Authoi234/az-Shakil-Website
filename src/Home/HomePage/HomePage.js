import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerItem from './BannerItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { RxArrowBottomLeft, RxArrowTopRight } from "react-icons/rx";
import '../../App.css';
import "../../css/style.css";

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerData = [
        {
            image: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/sliderbg.jpg",
            prev: 3,
            id: 1,
            next: 2,
            title: "Navigate Your Visa Process With Confidence.",
            mainText: "Step-by-Step Guidance",
        },
        {
            image: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/08/friends-travel-1.jpg",
            prev: 1,
            id: 2,
            next: 3,
            title: "Navigate Your Visa Process With Confidence.",
            mainText: "Step-by-Step Guidance",
        },
        {
            image: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/sliderbg1.jpg",
            prev: 2,
            id: 3,
            next: 1,
            title: "Navigate Your Visa Process With Confidence.",
            mainText: "Step-by-Step Guidance",
        }
    ];

    return (
        <div className="" >
            <div className='mt-20  md:min-h-[90vh] lg:min-h-[100vh]' >
                <div
                    data-theme="dark"
                    style={{
                        backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/shape-15.png)",
                        backgroundSize: 'cover',
                        position: 'relative',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "100%",
                    }}
                >
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation={{ enabled: true, nextEl: ".nextEl", prevEl: '.prevEl' }}
                        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination'
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            waitForTransition: true
                        }}
                    >
                        {
                            bannerData.map(item => (
                                <SwiperSlide key={item?.id}>
                                    <BannerItem item={item}></BannerItem>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="flex w-full md:justify-between items-center px-6">
                        <div className="flex items-center w-full md:justify-start justify-between ">
                            <div className="prevEl btn my-6 ml-6 mr-2 hover:bg-[#1E6DEB] bg-white group border-0 outline-none rounded-md w-14 h-14">
                                <RxArrowBottomLeft className='group-hover:text-white text-black text-2xl'></RxArrowBottomLeft>
                            </div>
                            <div className="nextEl btn my-6 ml-4 mr-2 hover:bg-[#1E6DEB] bg-white group border-0 outline-none rounded-md w-14 h-14">
                                <RxArrowTopRight className='group-hover:text-white text-black text-2xl'></RxArrowTopRight>
                            </div>
                        </div>

                        <div className="md:flex md:items-center md:justify-end md:mx-5 md:z-20 hidden-special-on-small">
                            {/* Prev Slide Image */}
                            <img
                                src={bannerData[currentIndex]?.prev ? bannerData[bannerData[currentIndex]?.prev - 1]?.image : ''}
                                alt="Previous Slide"
                                className="w-40 h-32 object-cover rounded-lg hover:scale-110 mx-6"
                                style={{ transition: "opacity 0.3s, transform 0.3s" }}
                            />
                            <h1 className="text-2xl text-white">{currentIndex + 1}</h1>

                            {/* Pagination Dots */}
                            <div className="custom-pagination flex gap-2 z-20"></div>

                            {/* Next Slide Image */}
                            <h1 className="text-2xl text-white">{bannerData.length}</h1>
                            <img
                                src={bannerData[currentIndex]?.next ? bannerData[bannerData[currentIndex]?.next - 1]?.image : ''}
                                alt="Next Slide"
                                className="w-40 h-32 object-cover rounded-lg hover:scale-110 mx-3"
                                style={{ transition: "opacity 0.3s, transform 0.3s" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;