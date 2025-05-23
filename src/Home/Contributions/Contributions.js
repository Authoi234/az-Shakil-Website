import React, { useEffect, useRef } from 'react';
import '../../App.css';
import contributionImg1 from '../../assets/contribution1.webp';
import contributionImg2 from '../../assets/contributionImg2.png';
import contributionImg3 from '../../assets/contributionImg3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ContributionCard from './ContributionCard';
import { Navigation } from 'swiper/modules';
import contributionHead from "../../assets/ContributionHeading.png";

const Contributions = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.update();  // Force update Swiper on resize
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionData = [
    {
      img: contributionImg1,
      name: "𝐐 & 𝐀 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐰𝐢𝐭𝐡 𝐇𝐨𝐧𝐨𝐫𝐚𝐛𝐥𝐞 𝐇𝐂 𝐃𝐫. 𝐊𝐡𝐚𝐥𝐢𝐥𝐮𝐫 𝐑𝐚𝐡𝐦𝐚𝐧 𝐒𝐢𝐫",
      para: "𝑯𝒊𝒈𝒉 𝑪𝒐𝒎𝒎𝒊𝒔𝒔𝒊𝒐𝒏𝒆𝒓 𝑺𝒊𝒓 answers most of the student's questions in this video. This is the 2nd part of the 𝟭𝟵𝘁𝗵 𝗝𝘂𝗻𝗲 𝗺𝗲𝗲𝘁𝗶𝗻𝗴, 𝘄𝗵𝗶𝗰𝗵 𝘄𝗮𝘀 𝗵𝗲𝗹𝗱 𝗼𝗻 𝗭𝗼𝗼𝗺",
      link: "https://www.facebook.com/watch/?v=768175584203625",
      date: "19th June, 2022"
    },
    {
      img: contributionImg1,
      name: "SDS updates with Honorable HC Dr. Khalidur Rahman Sir",
      para: "𝑯𝒊𝒈𝒉 𝑪𝒐𝒎𝒎𝒊𝒔𝒔𝒊𝒐𝒏𝒆𝒓 𝑺𝒊𝒓 answered most hyped questions 𝒲𝒽𝑒𝓃 𝒮𝒟𝒮 𝓌𝒾𝓁𝓁 𝒶𝓋𝒶𝒾𝓁𝒶𝒷𝓁𝑒 𝒻𝑜𝓇 𝐵𝒶𝓃𝑔𝓁𝒶𝒹𝑒𝓈𝒽𝒾 𝒮𝓉𝓊𝒹𝑒𝓃𝓉𝓈 in this video. 𝗧𝗵𝗲 𝗺𝗲𝗲𝘁𝗶𝗻𝗴 𝘄𝗮𝘀 𝗵𝗲𝗹𝗱 𝗼𝗻 𝗭𝗼𝗼𝗺 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 𝗮𝘁 𝗦𝘂𝗻𝗱𝗮𝘆 𝟭𝟵𝘁𝗵 𝗝𝘂𝗻𝗲, 𝟮𝟬𝟮𝟮.",
      link: "https://www.facebook.com/watch/?v=776487500435395",
      date: "19th June, 2022"
    },
    {
      img: contributionImg2,
      name: "Canadian Student Direct Stream for Bangladeshi Students was live — with Engr AZ Shakil.",
      para: "Canadian Student Direct Stream for Bangladeshi Students was live — with Engr AZ Shakil.",
      link: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=777927390091880",
      date: "12th Feb, 2025"
    },
    {
      img: contributionImg3,
      name: " Canadian Student Direct Stream for Bangladeshi Students Discussion with 𝐂𝐒𝐃𝐒𝐁𝐒 𝐓𝐞𝐚𝐦 ",
      para: "AZ Shakil Canadian Student Direct Stream for Bangladeshi Students (CSDSBS), that is the third part",
      link: "https://www.facebook.com/csdsbsofficial/videos/440509444570773",
      date: "12th Feb, 2022"
    },

  ]

  return (
    <div className='w-full bg-[#FEFEFE] py-10' id='contributions-sect'>
      <div className="w-full flex justify-center items-center">
        <div className="w-2/3 text-center">
          <h2 className='flex text-xl items-center justify-center font-semibold text-[#1E6DEB]' >  <div className='overflow-hidden'>
            <img src={require('../../assets/logo.png')} className='mx-2' style={{
              width: "25px",
              height: "25px",
              objectFit: "cover",
              objectPosition: "0% 20%",
            }} alt="" />
          </div> OUR CONTRIBUTIONS</h2>
          <div className="flex justify-center items-start w-full">
            <div className="w-[350px] mb-4">
              <img src={contributionHead} className='w-full' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center w-full max-w-[1200px]">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            navigation={{ enabled: true }}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1150: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
              },
            }}
            resizeObserver={true}
          >
            {sectionData?.map((item, index) => (
              <SwiperSlide key={index}>
                {/* Removed max-w-[100px] from here */}
                <ContributionCard card={item} className="flex justify-center items-center my-0" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div >
  );
};

export default Contributions;
