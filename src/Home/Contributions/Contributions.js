import React from 'react';
import '../../App.css';
import contributionImg1 from '../../assets/contribution1.webp';
import contributionImg2 from '../../assets/contributionImg2.png';
import contributionImg3 from '../../assets/contributionImg3.jpg';
import { IoPaperPlane } from 'react-icons/io5';
import { BsGlobeAmericas } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ContributionCard from './ContributionCard';

const Contributions = () => {

  const sectionData = [
    {
      img: contributionImg1,
      name: "𝐐 & 𝐀 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐰𝐢𝐭𝐡 𝐇𝐨𝐧𝐨𝐫𝐚𝐛𝐥𝐞 𝐇𝐂 𝐃𝐫. 𝐊𝐡𝐚𝐥𝐢𝐥𝐮𝐫 𝐑𝐚𝐡𝐦𝐚𝐧 𝐒𝐢𝐫",
      para: "𝑯𝒊𝒈𝒉 𝑪𝒐𝒎𝒎𝒊𝒔𝒔𝒊𝒐𝒏𝒆𝒓 𝑺𝒊𝒓 answers most of the student's questions in this video. This is the 2nd part of the 𝟭𝟵𝘁𝗵 𝗝𝘂𝗻𝗲 𝗺𝗲𝗲𝘁𝗶𝗻𝗴, 𝘄𝗵𝗶𝗰𝗵 𝘄𝗮𝘀 𝗵𝗲𝗹𝗱 𝗼𝗻 𝗭𝗼𝗼𝗺",
      link: "https://www.facebook.com/watch/?v=768175584203625"
    },
    {
      img: contributionImg1,
      name: "SDS updates with Honorable HC Dr. Khalidur Rahman Sir",
      para: "𝑯𝒊𝒈𝒉 𝑪𝒐𝒎𝒎𝒊𝒔𝒔𝒊𝒐𝒏𝒆𝒓 𝑺𝒊𝒓 answered most hyped questions 𝒲𝒽𝑒𝓃 𝒮𝒟𝒮 𝓌𝒾𝓁𝓁 𝒶𝓋𝒶𝒾𝓁𝒶𝒷𝓁𝑒 𝒻𝑜𝓇 𝐵𝒶𝓃𝑔𝓁𝒶𝒹𝑒𝓈𝒽𝒾 𝒮𝓉𝓊𝒹𝑒𝓃𝓉𝓈 in this video. 𝗧𝗵𝗲 𝗺𝗲𝗲𝘁𝗶𝗻𝗴 𝘄𝗮𝘀 𝗵𝗲𝗹𝗱 𝗼𝗻 𝗭𝗼𝗼𝗺 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 𝗮𝘁 𝗦𝘂𝗻𝗱𝗮𝘆 𝟭𝟵𝘁𝗵 𝗝𝘂𝗻𝗲, 𝟮𝟬𝟮𝟮.",
      link: "https://www.facebook.com/watch/?v=776487500435395"
    },
    {
      img: contributionImg2,
      name: "Canadian Student Direct Stream for Bangladeshi Students was live — with Engr AZ Shakil.",
      para: "Canadian Student Direct Stream for Bangladeshi Students was live — with Engr AZ Shakil.",
      link: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=777927390091880"
    },
    {
      img: contributionImg3,
      name: " Canadian Student Direct Stream for Bangladeshi Students Discussion with 𝐂𝐒𝐃𝐒𝐁𝐒 𝐓𝐞𝐚𝐦 ",
      para: "AZ Shakil Canadian Student Direct Stream for Bangladeshi Students (CSDSBS), that is the third part",
      link: "https://www.facebook.com/csdsbsofficial/videos/440509444570773"
    },

  ]

  return (
    <div className='w-full bg-[#FEFEFE] py-10'>
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 text-center">
          <h2 className='flex text-xl items-center justify-center font-semibold text-[#1E6DEB]' ><IoPaperPlane className='rotate-45 mr-2' /> NEWS & UPDATES <BsGlobeAmericas className='ml-1' /></h2>
          <h2 className="text-[#262626] text-[2.7rem] leading-[50px] font-semibold mb-8">
            Latest News & Articles <br />ome From the Blog
          </h2>
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <div className='flex justify-center items-center max-w-[1200px]'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='flex justify-center items-center'
          >
            {
              sectionData?.map(item => <SwiperSlide>
                <ContributionCard card={item}></ContributionCard>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </div >
  );
};

export default Contributions;
