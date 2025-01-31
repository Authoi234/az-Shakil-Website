import React, { useRef, useState } from 'react';
import '../../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerItem from './BannerItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
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
        <div className=""> 
            <div
                data-theme="dark"
                className="mt-20 h-auto md:min-h-[90vh] lg:min-h-[100vh]"
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
                    modules={[Pagination, Navigation]}
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span class="pagination-dot ${className}"></span>`;
                        },
                    }}
                    loop={true}
                >
                    {
                        bannerData.map(item => (
                            <SwiperSlide key={item?.id}>
                                <BannerItem item={item}></BannerItem>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default HomePage;