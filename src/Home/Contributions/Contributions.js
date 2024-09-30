import React, { useEffect, useRef, useState } from 'react';
import image from "../../assets/download.svg";
import '../../App.css';
import ContributionCard from './ContributionCard';
import contributionImg from '../../assets/bgContributionImg.jpg';

const Contributions = () => {

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);

  useEffect(() => {
    const div = scrollRef.current;

    const handleWheel = (event) => {
      const maxScrollLeft = div.scrollWidth - div.clientWidth;

      // If horizontal scroll is not at the end, prevent default and scroll horizontally
      if (div.scrollLeft < maxScrollLeft) {
        event.preventDefault();
        div.scrollLeft += event.deltaY; // Scroll horizontally with vertical scroll
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
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return; // Only run this if dragging is true
    event.preventDefault();
    const x = event.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 to make scrolling faster
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };



  const sectionData = [
    {
      img: "https://kingdompen.org/wp-content/uploads/2021/10/tom-holland-vs-andrew-garfield-vs-tobey-maguire-who-is-the-better-spider-man-1.jpg",
      name: "Spiderman",
      para: "If a dog chews shoes whose shoes does he choose"
    },
    {
      img: "https://kingdompen.org/wp-content/uploads/2021/10/tom-holland-vs-andrew-garfield-vs-tobey-maguire-who-is-the-better-spider-man-1.jpg",
      name: "Spiderman",
      para: "If a dog chews shoes whose shoes does he choose"
    },
    {
      img: "https://kingdompen.org/wp-content/uploads/2021/10/tom-holland-vs-andrew-garfield-vs-tobey-maguire-who-is-the-better-spider-man-1.jpg",
      name: "Spiderman",
      para: "If a dog chews shoes whose shoes does he choose"
    },
    {
      img: "https://kingdompen.org/wp-content/uploads/2021/10/tom-holland-vs-andrew-garfield-vs-tobey-maguire-who-is-the-better-spider-man-1.jpg",
      name: "Spiderman",
      para: "If a dog chews shoes whose shoes does he choose"
    },
  ]


  return (
    <div className='px-5 py-10 pb-5' style={{
      backgroundImage: `linear-gradient(45deg, #00001f 35%,#7621af 84%,#f5c4ff 88%,#7621af 91%,#271628 95%), url(${contributionImg})`,backgroundSize : 'cover', backgroundPosition: "center",  }}>
        <div data- aos="fade-up" >
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
  <div
    ref={scrollRef}
    className='special-scrolling p-10 flex gap-8 md:gap-16 whitespace-nowrap w-full px-2 md:px-4 py-2 overflow-x-scroll'
    style={{ scrollbarColor: 'transparent transparent', whiteSpace: 'nowrap' }}
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
  </div>
    </div >
  );
};

export default Contributions;