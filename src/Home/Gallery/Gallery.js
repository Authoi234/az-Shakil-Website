import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../../css/style.css"

const Gallery = () => {
    const images = [
        { img: "https://lh3.google.com/u/0/d/1ff0RCBKH2-AbOfjMCAT2qKt-y_C42qI7=w1366-h342-iv1", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/484882795_1103895068418859_8566227462070937063_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Vs9Q4yZDPW8Q7kNvgHwyPou&_nc_oc=AdkSmbxIwNKvuhwmO2XkHL9dAXQYKH4sXxQT7SLQbrMsIlKjfeujnuTdSSNtL5rVOi4&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=lBDT5GScUUd9C_zkk3BGtA&oh=00_AYHum2-ue_hMwii6Je9jE68vixwQnahXUc90Ku0CmM3TaA&oe=67E0FF87", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/474492431_1060311749443858_8628952054740049892_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Bkzip9JctP8Q7kNvgE8VAvh&_nc_oc=AdnXbV3AOAkM-X9HEcbglu-h-QO7tK2GAqm4ENwJgj_QAOfkWyaTKk5ct8M_Jf0fi5o&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=FD7h-OM57Ufk-kNaCiFQZQ&oh=00_AYFTECLw3KQFHBaSEr_rXVAmMVdBKkJFDxdmeV0AGQ5_Lg&oe=67E0DB56", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473627813_1054875579987475_444290335618930769_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cGqwxz22xjoQ7kNvgGJLIAi&_nc_oc=Adma011lW2tW6OnVtvibSqs8vbW7toSwHOq28DKeKINfU_oBu1a6v1J4_u3BHFCV3ak&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=n-tqKbMZUryUGBklIiML1Q&oh=00_AYELuis3H6PLXhQ1Hl_-fWoDwIDgFv45wrpVr2AwR3gU1A&oe=67E0EA3B", },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/372915154_716579217150448_8459710957527313208_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SOuSAda5qloQ7kNvgEhkfvS&_nc_oc=AdlNe1EWcKErzwe22_oBzcQBF-rDNTI5wx0z0tV-AuKLpH6KFQ9tpD5wU5EIHfn-qMg&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=xLacmzpgr0vYeylpLAlqlA&oh=00_AYErK5nrtFZb-LYi6Jtfa7f7Vv5zYa6oLqL-ZKglZSs90A&oe=67E0EAFE" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/474472912_1059587612849605_3594245439967958504_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WEZNGSxNa2EQ7kNvgFX49e9&_nc_oc=Adnjv74ym3Tb-QFmByUhWkvMmCyaXWB1WWkcdjqh01MZ4jNLG9nhz73Ej0kSkBIjibo&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=iWNjwWHileDcohDxesLVzA&oh=00_AYGOErTYqwPxW16x1929jwQ1m1zoqjWreWNNJlg2n3UjeQ&oe=67E0F657" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473642477_1054863266655373_219669289741817881_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6JVsN99D7qIQ7kNvgEM7zco&_nc_oc=Adn9XuIgCvEfh2RmDjbHKB4gAPJ0821DVWhiBEAIPNh-ilKkoDaYLtoPYsbtxkzLK3I&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=pDnSYYSlgxAfUIs8goEJPg&oh=00_AYEOcX1t8Hhq3q4eqv0MVj5FnFXfM98QLgXJfMTiQTRzMw&oe=67E0E2BA" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/439813494_861402892668079_7542442535015071628_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6MgFbUSv1TYQ7kNvgG7eQ2x&_nc_oc=Adlmm8Ls9SOn1jWZ8h_kdXhCUCe2ADOhXhs8CKlVpCElhkb2yD2Tp6Cj_vZ5lc8f2xM&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=L6BU1NZSB0FGUtSLFpWazQ&oh=00_AYH_Ygv0gM8myvOImoQPEHzbLIsGfsOFKzR7GGKV_y-uDQ&oe=67E1019A" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/439831762_861402886001413_1553987829147015479_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ILU_cijA5dkQ7kNvgGqEHCE&_nc_oc=AdmXMO4BVHrQCmgEHkuURMlxoGaDghj7mdk4zFT9r-xnkA2AuccW76po4NF0_tdS8EY&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=fnqNcDynmUO5WK2LVpJzPw&oh=00_AYHl9wZyiMOL53Z6zxvQr7eogJ6wBKlQEFEwW0hGLr8-Pw&oe=67E0E149" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/434397509_848215980653437_5516366474893417475_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pErK0ve5-o4Q7kNvgG9GCwi&_nc_oc=AdnnmATFFPXornak0oqhKIQlOb4Sv2O3qSmCl783vCqxWo_Qcmlxk4_iKGa71A7uxRo&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=Wvwni-97FPD2MC9-6j4eiw&oh=00_AYGKYG8QOiT6sOkRx4jje4m7LhcJXcOqm8uWgZv4xss01Q&oe=67E0F523" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473711963_1054863239988709_2796215924133302481_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=46sFUeKIifkQ7kNvgHxduRL&_nc_oc=AdnsQSA0bPoPqZei6GhRPomU1cXiXBHOZrO9pU23C59Otki6xpTfUM7h53dT1umB7tM&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=GnPpizspHIoNs_dQLn9tEw&oh=00_AYHX_lq1CwmsgHyi8u6w-s4t52-KujkJmZgPoG8eJA7N_w&oe=67E10EEB" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473727720_1054863206655379_362595527610621403_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6h-mIgCyaz0Q7kNvgGxy4vd&_nc_oc=AdkOSwVGGc9XlNpCiYvGFvgUXDZN8vWre71gFiDkZbECvGsNJyM7B3IULT1tq7XhEiQ&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=zj8RgjUcTN7ObDWcUi5f8A&oh=00_AYH9f9QvQnLJ7k4rmRTDtjWQN2DhAuMCIE_f3-b-004HWw&oe=67E10069" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/457727853_952866350188399_7648409034939060189_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=NbW5JOQfkiAQ7kNvgELtZCC&_nc_oc=Adn4mB6Au55cYqMrhFBouWqO-PgVPKX0jtZtdKjS63peNQXH0dp7CRXZArEzzz64UgY&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=2wm6WvLY2qewaOwb-9VUlw&oh=00_AYFk7y7SabuuTQJ6XKAZLf3wzqIlZWDk3N9mRX8W6VOkWA&oe=67E11493" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/440955930_876986544443047_9050031626867862098_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sTYCvBXYC-cQ7kNvgFlZvRI&_nc_oc=AdlcuKb2OgfyjZO86RinsVdE2Z_3g0fNYX52rFP9HIwDSpdVtb_ezVH07eCTJBAOpYE&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=N13Scm9nln2cvlcnUWo_XQ&oh=00_AYE4to0gtZ7LCRp9ndKNAAuDF5rpfv6a9HIl7zXKwYgGvg&oe=67E0EE11" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/473035118_1051883846953315_4793638933614900190_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NOb3tdNILuQQ7kNvgGIWxJT&_nc_oc=AdmNCqk8ThWOhS_U9JHmqR2ozvqLPiLWwmnxqrYBRRj1VPScWlZg1y4Y9MCVsEFdO6g&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=jW612gTyQEoy-fPtPQC6ww&oh=00_AYH6A5uwxbsnA8Bbm1n0aN-fRp_23t49AN0St9IwyhEC2w&oe=67E10EDB" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/457382950_950474393760928_6097518538766883570_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=VyfHiIeDQ5sQ7kNvgGb4S_M&_nc_oc=Adk-mjFkzeYbvLaCD2CdpslAvCgIWYgNp_RCrXE6WeTdSFrFEB_1SJa-PH5jAEq5tus&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=ttnLJqr9CR4VB7cLjrMCHQ&oh=00_AYGDY66rL6EB5BMpSEwR8c55XbERpr0vKTlX7b5ZiOG-vw&oe=67E0F0DC" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/440973379_868610535280648_8145020467141038607_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZBedgEfDJA4Q7kNvgGxoHqO&_nc_oc=AdkCHsbnsenJ9qd7cH-jeNzjFIQ4ou54eXurS5xLPWmh1-rmvSQJjsTnAdKkuTAX6tg&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=oTpN7GT_1I1r63rTiivh6g&oh=00_AYEqPLgUUpzN6VFWJbuBLSbbnTeJgaGFzkupPNAeMXg5yA&oe=67E0DEE9" },
        { img: "https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/484357611_1099341088874257_4043577945620330046_n.jpg?stp=c0.168.1336.1336a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_ohc=POrURJwXaqMQ7kNvgHBqk-p&_nc_oc=AdkLwiUdbQt4bRW-qACrJA02hg9AGavPBsm5PC8lGjqdQTJqGRnZ1AEpEv5wVQULI2E&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=2rpKoz3o5xUCT9QFHm2Txw&oh=00_AYHGwGQEphnlyp335LVYF6dVXW75aVROgsbPqgt0avTcPg&oe=67E0CF11", },
    ]

    return (
        <div className="w-full flex justify-center items-center">
            <div className="max-w-[1350px] flex justify-center items-center">
                <Swiper
                    slidesPerView={2}
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
