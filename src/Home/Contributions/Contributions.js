import React, { useCallback, useEffect, useRef, useState } from 'react';
import image from "../../assets/download.svg";
import '../../App.css';

const Contributions = () => {

  const scrollRef = useRef(null);
  const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);

  useEffect(() => {
    const div = scrollRef.current;

    const handleWheel = (event) => {
      const maxScrollLeft = div.scrollWidth - div.clientWidth;

      if (div.scrollLeft < maxScrollLeft) {
        event.preventDefault();
        div.scrollLeft += event.deltaY;
      }

      if (div.scrollLeft >= maxScrollLeft) {
        setAllowVerticalScroll(true);
      }
    };

    div.addEventListener('wheel', handleWheel);

    return () => {
      div.removeEventListener('wheel', handleWheel);
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
      window.removeEventListener('wheel', handleBodyScroll);
    };
  }, [allowVerticalScroll]);



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
    {
      img: "https://kingdompen.org/wp-content/uploads/2021/10/tom-holland-vs-andrew-garfield-vs-tobey-maguire-who-is-the-better-spider-man-1.jpg",
      name: "Spiderman",
      para: "If a dog chews shoes whose shoes does he choose"
    },
  ]


  return (
    <div className='px-5 py-10 bg-[#0e2850] mb-96'>
      <div data-aos="fade-up">
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
      </div>
      <div
        ref={scrollRef}
        className='special-scrolling p-10 flex gap-8 md:gap-16 whitespace-nowrap w-full px-2 md:px-4 py-2 overflow-x-scroll'
        style={{ scrollbarColor: 'transparent transparent', whiteSpace: 'nowrap' }}
      >
        {
          sectionData.map(data =>
            <div className={`rounded-3xl hover:scale-105 flip-card flex-shrink-0 w-11/12 mt-5 sm:w-80 md:w-96 lg:w-1/4 text-white bg-[#0c1222] shadow-xl`} style={{ transition: 'all 0.5s ease', }}>
              <figure>
                <img
                  className='w-full h-full rounded-t-2xl flip-3d'
                  src={data.img}
                  alt=''
                />
              </figure>
              <div className="card-body p-2 sm:p-4 text-center">
                <h2 className="md:text-3xl text-xl text-wrap">{data.name}</h2>
                <p className='text-sm md:text-lg my-4 text-wrap'>{data.para}</p>
                <div className="card-actions">
                  <button className="px-3 bg-primary text-sm md:text-lg py-1 text-wrap rounded-full">Buy Now</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Contributions;