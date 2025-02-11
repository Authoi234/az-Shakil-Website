import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerItem from './BannerItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
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
            title: "Step-by-Step Guidance for Visa Succes.",
            mainText: "Visa Consultation Services",
        },
        {
            image: "https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/sliderbg1.jpg",
            prev: 2,
            id: 3,
            next: 1,
            title: "Expert Guidance for Your Next Destination.",
            mainText: "WELCOME TO IMMIGWAY VISA AGENCY",
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
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "100%",
                        position: "relative"
                    }}
                >
                    <div style={{ position: "relative" }}>
                        <Swiper
                            modules={[Pagination, Navigation, Autoplay]}
                            spaceBetween={1}
                            slidesPerView={1}
                            navigation={{ enabled: true, nextEl: ".nextEl", prevEl: '.prevEl' }}
                            onSlideChange={(swiper) => updateProgressBar(swiper)}
                            pagination={{
                                el: ".custom-progress-bar",
                                type: "progressbar",
                            }}
                            loop={true}
                            autoplay={{
                                disableOnInteraction: false,
                                waitForTransition: true,
                            }}
                        >
                            {bannerData.map(item => (
                                <SwiperSlide key={item?.id}>
                                    <BannerItem item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Progress bar positioned at bottom */}
                        <div className="custom-progress-bar"  style={{ bottom: 0, top: 'auto', height: '5px', backgroundColor: '#1E6DEB', borderRadius: '10px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;