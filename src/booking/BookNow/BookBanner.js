import React from 'react';
import { DayPicker } from 'react-day-picker';
import rafiki from "../../assets/bookInfoRafiki.png";
import 'react-day-picker/dist/style.css';

const BookBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className='relative my-6 h-full bg-cover bg-center' style={{ backgroundImage: `url(https://thepienews.b-cdn.net/wp-content/uploads/2017/12/Screen-Shot-2017-12-05-at-15.40.31.jpg)` }}>
            <div className="absolute inset-0 bg-black opacity-80 pointer-events-none"></div>

            <div className="hero backdrop-blur-[1px]">
                <div className="flex justify-center items-center gap-1 flex-col lg:flex-row-reverse">
                    <img src={rafiki} alt='rafiki' className="lg:max-w-md w-full rounded-lg backdrop-blur-sm" />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BookBanner;