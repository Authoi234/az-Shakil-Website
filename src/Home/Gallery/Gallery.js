import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../../css/style.css"

const Gallery = () => {
    const images = [
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/474472912_1059587612849605_3594245439967958504_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WEZNGSxNa2EQ7kNvgFX49e9&_nc_oc=Adnjv74ym3Tb-QFmByUhWkvMmCyaXWB1WWkcdjqh01MZ4jNLG9nhz73Ej0kSkBIjibo&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=7XyXOVZjq-1t6ma4MmQ-CA&oh=00_AYHl8rPWkI1T4iIsV3_VkQlZcMjcZB7iw6nwE17JyXgeyQ&oe=67E1D757", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/474005043_1054871589987874_5628363166718657282_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wBrimMlKdrUQ7kNvgFThzbh&_nc_oc=AdnK8S9kRzbQUvYZKx7TukaHdf5NRQEOr3HXxX4COju47tbyLcZAZhTy0jQ8b0cioLU&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=hBGnGbcqHcbtwu0aD7G3mg&oh=00_AYFtshNaJHrKPlHtXM5lDT2k5Zpj3J9IFzqMy_b__Kzv4Q&oe=67E1DCD6", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473627813_1054875579987475_444290335618930769_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k1-3tblOS04Q7kNvgEaVdyO&_nc_oc=AdlRSCOOKqlfMEzQ4GDc2XgpDqkAw7uWRznAbrq1DkJXmN4OWRvg3WmNbBuIKF3aIzM&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=9xMKvQ-b-Hd-RT0Sp1okdA&oh=00_AYE53KKKLgyKg3edMbMddHY-SVehw0MU9ELYbslj8RUYGg&oe=67E2037B", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473684817_1054875523320814_8467239318664933318_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9Ar3eH3enwsQ7kNvgG1hcmT&_nc_oc=AdmJ2Mszo5Dmivcr4WKFJBkCHx2igkbO6ejwduOReNDaZwwQ3F1lN-StPDU8aOwOgL8&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=TnX6qHvYlkGWzOgdbNjUTA&oh=00_AYFPT3o20zwXOgDqU7xEJV1Ea-F0cVj9KvetoqjETTX1pg&oe=67E1EADD", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473818645_1054875559987477_7523429432068515664_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Im01Ippv1P4Q7kNvgG9jduz&_nc_oc=AdlWzab4V064s9qvk9MuosM3ijNFCNOYVl7IsUPk2M6WBNM3efyur5pRegb5__98Ft4&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=xrvnoPM2BYslauz-7xs9mg&oh=00_AYGDHSi38MRzlsF6k-lUHt1YgrhZ3WfVgd7RGTB3ewF5Xg&oe=67E1F73B", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473035118_1051883846953315_4793638933614900190_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8LMgjVts0poQ7kNvgF7CTxa&_nc_oc=AdkYfepsfVduERN-9P-QZ7w6OJx0b1CUa1BRV8YyJalNtGGC5RqiKJ36XMDXjmzjW1c&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=AGff0Uz9pABQteIYNB3Yrg&oh=00_AYF3O2-6EpKQwvsxRbaagbziPtQ78iAcRfci7lXigMjm6w&oe=67E1EFDB", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473727720_1054863206655379_362595527610621403_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6h-mIgCyaz0Q7kNvgGxy4vd&_nc_oc=AdkOSwVGGc9XlNpCiYvGFvgUXDZN8vWre71gFiDkZbECvGsNJyM7B3IULT1tq7XhEiQ&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=J1kBnlB3AxYyq4QEVSnnHQ&oh=00_AYGZ9jMBgkFM_wVFnO5jUvILsFQ5X-qjZHVSm9YPP03Cjg&oe=67E1E169", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473711963_1054863239988709_2796215924133302481_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=46sFUeKIifkQ7kNvgHxduRL&_nc_oc=AdnsQSA0bPoPqZei6GhRPomU1cXiXBHOZrO9pU23C59Otki6xpTfUM7h53dT1umB7tM&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=TT8If_QZhzy_PBPb2kYStQ&oh=00_AYHLR59vCrLS6o6bzWTK9yoynyJuYRPp_MAid2NKNUDByA&oe=67E1EFEB", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473642477_1054863266655373_219669289741817881_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6JVsN99D7qIQ7kNvgEM7zco&_nc_oc=Adn9XuIgCvEfh2RmDjbHKB4gAPJ0821DVWhiBEAIPNh-ilKkoDaYLtoPYsbtxkzLK3I&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=PIGex2arzF4hG8Q5WNp1GQ&oh=00_AYEIrl3X5yLXQfx9hVv0ScH5uOJPULqnZvkOLno3XrZNxQ&oe=67E1FBFA", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/361258456_690478143093889_707631799737443753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=SUI9vbDdrDQQ7kNvgFjfIQK&_nc_oc=Adk-2tOxl_xu-10FwsP4lqmTxEk1FwkEQjhxhCPjgaE_2LJCZI1lEdai5eiiaAAV580&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=-xtoBCC3esqVbiPViw8S3A&oh=00_AYGQK3MlOYN8EH01Vzsj8mnYc3o_zIYWbCYSol_iBdp-Ww&oe=67E2021B", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/481161220_1088736059934760_1600283044729720782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=JFlayEqmlV8Q7kNvgFtNAXD&_nc_oc=AdkpNRmL3d4RtSqwRFKfYj6HeRt71qrAcEHq2neUWxsCTc0Hk-VCiNbuUJ4e12QtHEw&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=e5giOBxzcySPhqy6O04Ezg&oh=00_AYE357jCO2dRQpcyyneYDfA5OvpQgGCammG8jjhR1KgMkw&oe=67E1DDFF", },
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
