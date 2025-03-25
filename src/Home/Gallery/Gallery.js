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
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/459183511_957506639724370_2670257539004084077_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DhFYh27ud6AQ7kNvgHPujzQ&_nc_oc=Adk3f5fgqiGK1EuxlMHb1dP3ynDx86j2cERfDVVInpG-4s4WD0MVthHDLc3LYbHYK2o&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=JwDZ4p7hSDVP9vCSDMMTjw&oh=00_AYHl_d_qu883bJSUN8XvhCywrwJpZZ7IgwW_wd6dGuNrkg&oe=67E8CA45" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/484882795_1103895068418859_8566227462070937063_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ZHFLT20E-GwQ7kNvgE5SPw-&_nc_oc=AdlaT0xlroavVgo6FvGwewgS8tACgk-OZB6W_Ijhfe70u0KhWe1YvXO36rWeULOq1Wg&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=HWspFitWOeZUcsKr_JWQSQ&oh=00_AYFqjjGR-wCkodmhVxBVEFV1qQ96e15Tcvl_wlkhf-2RqA&oe=67E8E887" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/456529154_946482800826754_2096498988205357766_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=dRp1Pyi92qAQ7kNvgG85AFl&_nc_oc=AdlLTB5Z8fXDQc9ariH7CTYgWyN9SME6JQp_TEhnIEin7j00WCDwI7h_OGXgXqHig1o&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=vRU3PHfO5u2SgFtGk-YSlg&oh=00_AYGzHN1TAEsgvHL7fFO0u-GbzNk5HngocZudvubhyr7kBg&oe=67E8E392" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/455817007_940838114724556_3591654214242517022_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=kC8x008murUQ7kNvgHAcH0c&_nc_oc=AdlMev7hk36cNqq8xBthYXhH8Q3Qd-li2Yf96O59IDHIH2iKcOTAS8-M90dhKJM-to8&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=jJQxDWC4L5mevm9XFjf47w&oh=00_AYGFSgcO_WYSSBE0amwFx9NA4ngMAVQ5L7xSdMwZlL8hMw&oe=67E8C87E" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/457727853_952866350188399_7648409034939060189_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=DfldrPopMM4Q7kNvgEcDjUI&_nc_oc=AdkGIYH_lEaYnOPHfmksTcGKoLA8c6nX-TX39v4DQFsktKDZGuLjonEyrn0Y0zK2GCU&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=qCU_a5ouPp2HWm04tv4MSg&oh=00_AYEQyu19U0filc_CHsIe2KAv85TTWG5idQNG7UaFdadOeA&oe=67E8C553" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/434669859_850807947060907_4833460172137994289_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wTyNouU-F2sQ7kNvgE0aYID&_nc_oc=AdkIHIFxkv-N1yTalHGbe1QVCNV-XrLFbtsl38egHoz4rWaZj98ZYK3uKWiIZCfWUe8&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=UpeWW-cpX3Srw5W2iO5Qhw&oh=00_AYFlSlMUn4MW1YxP9tUdDy20DlA3WNF3OkMvh9u7VA9ZWw&oe=67E8D914" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/434723329_847400117401690_342383959094713879_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s3T81xKeie0Q7kNvgH8h6rN&_nc_oc=AdkbkLg0IsCujQbRfyZKIx1NdEJRntJZADTa_rHh_5_fyfxSfKFJSfaQnDQp4p6C2jg&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=2AQ4nanaDdSI9xEUfuK17A&oh=00_AYGN8g3JRu3o4BBYTtV0T11PKNZL0J0ds5UgH_GT6IxZog&oe=67E8DCE8" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/434715016_847395124068856_1179402919730470301_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UJgFJ3Nk2mIQ7kNvgEze2pC&_nc_oc=AdmsQBkWjTbfzDYNUtRSOCr72SfPTsfqmGGaVJLEELdjQvOes3fRQRQzD-jyt2Gy5WI&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=pXkp6xDu_BtG5D0bCgLepg&oh=00_AYHFM20bTW5vSX53Wad2iYNq2D2o2ezmwS-fnAdsmiNovQ&oe=67E8DA77" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/427667325_817195180422184_2608576929517730803_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zQCC_EBcXUsQ7kNvgHk85MF&_nc_oc=AdlJVqPKSxeMR5SB2eciD42Jl-WpJ6ASshXS5nyo-WO5V-Vt_weLveYw97kijOgE75c&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=li-AlpF4wGmh50gBTnqODg&oh=00_AYFw7dvJF39Z0HI98GgTopv76ebQ5ONeY026GF1MUtQCXw&oe=67E8EB79" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/427886715_816884773786558_8617536359036991913_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tfRnDpnx4soQ7kNvgGv32s2&_nc_oc=AdnsRKc2xa6UklWTvLkHJ8iBGthtXwrA-e5ZaRm3BQzEw3GTLgf5n4KWs_9PQk29P5o&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=GwMORK3ynHtwJ9FaZurJ8w&oh=00_AYFPa_rhmGcjfUIDEIlfn-0QsfSIwJ7DBRq9obctDmvVOg&oe=67E8CB34" },
    ]

    return (
        <div className="w-full flex justify-center items-center">
            <div className="md:max-w-[1350px] sm:max-w-[768px] max-w-[600px] flex justify-center items-center">
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
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        waitForTransition: true,
                    }}
                    pagination={true}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper items-start"
                >
                    {images.map((image) => <SwiperSlide >
                        <div className="w-[230px] h-[200px] flex justify-center items-start hover:scale-110 transition-all duration-500 object-cover overflow-hidden">
                            <img src={image.img} className="w-full h-full mask mask-square object-cover transition-all duration-500 overflow-hidden" alt="" />
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div >
        </div>
    );
};

export default Gallery;
