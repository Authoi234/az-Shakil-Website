import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../../css/style.css";
import img1 from "../../assets/gallery-img- (1).jpg";
import img2 from "../../assets/gallery-img- (2).jpg";
import img3 from "../../assets/gallery-img- (3).jpg";
import img4 from "../../assets/gallery-img- (4).jpg";
import img5 from "../../assets/gallery-img- (5).jpg";
import img6 from "../../assets/gallery-img- (6).jpg";
import img7 from "../../assets/gallery-img- (7).jpg";
import img8 from "../../assets/gallery-img- (8).jpg";
import img9 from "../../assets/gallery-img- (9).jpg";
import img10 from "../../assets/gallery-img- (10).jpg";
import img11 from "../../assets/gallery-img- (11).jpg";
import img12 from "../../assets/gallery-img- (12).jpg";
import img13 from "../../assets/gallery-img- (13).jpg";
import img14 from "../../assets/gallery-img- (14).jpg";
import img15 from "../../assets/gallery-img- (15).jpg";
import img16 from "../../assets/gallery-img- (16).jpg";
import img17 from "../../assets/gallery-img- (17).jpg";
import img18 from "../../assets/gallery-img- (18).jpg";
import img19 from "../../assets/gallery-img- (19).jpg";
import img20 from "../../assets/gallery-img- (20).jpg";
import img21 from "../../assets/gallery-img- (21).jpg";
import img22 from "../../assets/gallery-img- (22).jpg";
import img23 from "../../assets/gallery-img- (23).jpg";
import img24 from "../../assets/gallery-img- (24).jpg";
import img25 from "../../assets/gallery-img- (25).jpg";

const Gallery = () => {
    const images = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        { img: img9 },
        { img: img10 },
        { img: img11 },
        { img: img12 },
        { img: img13 },
        { img: img14 },
        { img: img15 },
        { img: img16 },
        { img: img17 },
        { img: img18 },
        { img: img19 },
        { img: img20 },
        { img: img21 },
        { img: img22 },
        { img: img23 },
        { img: img24 },
        { img: img25 },
     
    ]

    return (
        <div className="w-full flex justify-center items-center">
            <div className="md:max-w-[1200px] sm:max-w-[650px] max-w-[400px] flex justify-center items-center">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    grabCursor={true}
                    centeredSlides={false}
                    freeMode={true}
                    breakpoints={{
                        440: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        660: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1150: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    loop={false}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                        waitForTransition: true,
                    }}
                    pagination={true}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper items-center md:items-start"
                >
                    {images.map((image) => <SwiperSlide className="max-w-[230px]" >
                        <div className=" w-full h-[200px] flex justify-center items-center md:items-start hover:scale-110 transition-all duration-500 object-cover overflow-hidden">
                            <img src={image.img} className="w-full h-full mask mask-square object-cover transition-all duration-500 overflow-hidden" alt="" />
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;
