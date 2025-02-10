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
import "../../index.css";

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
    };
    const updateProgressBar = (swiper) => {
        const progressBar = document.querySelector('.custom-progress-bar');
        const progressWidth = (swiper.realIndex + 1) / swiper.slides.length * 100;
        progressBar.style.width = `${progressWidth}%`;
    };
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
                        onSlideChange={(swiper) => updateProgressBar(swiper)}
                        pagination={{
                            el: ".custom-progress-bar", 
                            type: "progressbar", 
                            render: () => '', 
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
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
                    <div className="custom-progress-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;