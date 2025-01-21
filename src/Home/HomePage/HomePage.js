import React, { useRef, useState } from 'react';
import '../../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerItem from './BannerItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const HomePage = () => {
    const constraintsRef = useRef(null);
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
        <div
            className="mt-20"
            style={{
                backgroundImage: "url(https://wordpress.zozothemes.com/hegira/wp-content/uploads/sites/21/2024/05/shape-15.png)",
                backgroundSize: 'cover',
                position: 'relative',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh", // Ensures full height of the viewport
            }}
        >
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1.01}
                navigation
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                loop={true}
            >
                {
                    bannerData.map(item => <SwiperSlide key={item?.id}>
                        <BannerItem constraintsRef={constraintsRef} item={item}></BannerItem>
                    </SwiperSlide>)
                }
            </Swiper>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{currentIndex + 1}</span>
                {bannerData.map((_, index) => (
                    <div
                        key={index}
                        style={{
                            width: index === currentIndex ? '40px' : '20px', // Wide for active, small for others
                            height: '10px',
                            backgroundColor: index === currentIndex ? '#ff5722' : '#ddd',
                            margin: '0 5px',
                            borderRadius: '5px',
                            transition: 'width 0.3s',
                        }}
                    />
                ))}
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{bannerData.length}</span>
            </div>
        </div>
    );
};

export default HomePage;