import React, { useEffect, useRef, useState } from 'react';
import image from "../../assets/download.svg";
import '../../App.css';
import ContributionCard from './ContributionCard';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import contributionImg1 from '../../assets/contribution1.webp';
import contributionImg2 from '../../assets/contributionImg2.png';
import contributionImg3 from '../../assets/contributionImg3.jpg';
import contributionIcon from '../../assets/contributionIcon.png';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Contributions = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef(null);
  const [bgColor, setBgColor] = useState("rgb(0, 0, 31)");

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      const componentTop = componentRef.current.getBoundingClientRect().top;
      const maxScroll = 100;
      const scrollPercent = Math.min(Math.max(1 - componentTop / maxScroll, 0), 1);

      const startColor = [0, 0, 31];
      const endColor = [10, 0, 65];

      const currentColor = startColor.map((start, i) =>
        Math.round(start + (endColor[i] - start) * scrollPercent)
      );

      setBgColor(`rgb(${currentColor.join(",")})`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);



  useEffect(() => {
    const div = scrollRef.current;

    const handleWheel = (event) => {
      const maxScrollLeft = div.scrollWidth - div.clientWidth;

      // If horizontal scroll is not at the end, prevent default and scroll horizontally
      if (div.scrollLeft < maxScrollLeft) {
        event.preventDefault();
        const speedMultiplier = 2; // Increase this for faster scroll
        div.scrollLeft += event.deltaY * speedMultiplier; // Scroll horizontally with vertical scroll
      }

      // Once horizontal scroll is finished, allow vertical scroll
      if (div.scrollLeft >= maxScrollLeft) {
        setAllowVerticalScroll(true);
      }
    };

    div.addEventListener('wheel', handleWheel);

    return () => {
      div.removeEventListener('wheel', handleWheel); // Cleanup
    };
  }, []);

  useEffect(() => {
    const handleBodyScroll = (event) => {
      if (allowVerticalScroll) {
        window.scrollBy({ top: event.deltaY, behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleBodyScroll);

    return () => {
      window.removeEventListener('wheel', handleBodyScroll); // Cleanup
    };
  }, [allowVerticalScroll]);

  // Handle drag/swipe functionality
  const handleScrollLeft = () => {
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth;
    container.scrollLeft -= scrollAmount;

    // Infinite scrolling logic
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth;
    }
  };

  const handleScrollRight = () => {
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth;
    container.scrollLeft += scrollAmount;

    // Infinite scrolling logic
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    }
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };







  return (
    <div
      ref={componentRef}
      className='md:px-5 py-10 pb-5 px-1'
      style={{
        background: bgColor,
        transition: "background-color 0.5s ease-in-out"
      }} >

      <div className="w-24 h-24 -mb-8 p-0 box-content border-0 outline-none">
        <img className='w-full' src={contributionIcon} alt='' />
      </div>
      <div data-aos="fade-up" >
        <div className='flex items-center justify-center'>
          <div className='w-40'>
            <img src={image} className='w-full' alt="" />
          </div>
        </div>
        <div className='text-center mt-2'>
          <h1 className='text-3xl text-white'>কমিউনিটি <span className='font-semibold'> কন্ট্রিবিউশন</span></h1>
          <p className='text-[#1c65d8] font-bold'>
            কমিউনিটির জন্য আমাদের কিছু উল্লেখযোগ্য কাজ
          </p>
        </div>
      </div >
      <div className='flex items-center'>
        <button className="active:scale-90 transition-all text-[2.85rem] left-0 absolute rounded-full " onClick={handleScrollLeft}>
          <FaArrowAltCircleLeft className='bg-white text-blue-950 rounded-full'></FaArrowAltCircleLeft>
        </button>
        <button className="active:scale-90 transition-all text-[2.85rem] right-0 absolute rounded-full" onClick={handleScrollRight}>
          <FaArrowAltCircleRight className='bg-white text-blue-950 rounded-full'></FaArrowAltCircleRight>
        </button>
        <motion.div
          ref={scrollRef}
          className='special-scrolling p-1 md:p-10 flex gap-8 md:gap-10 whitespace-nowrap w-full px-1 md:px-4 py-1 overflow-x-scroll'
          style={{ scrollbarColor: 'transparent transparent', whiteSpace: 'nowrap', scrollBehavior: "smooth", }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {
            sectionData.map((data, i) =>
              <ContributionCard key={i} card={data}></ContributionCard>
            )
          }
        </motion.div>
      </div>
    </div >
  );
};

export default Contributions;
