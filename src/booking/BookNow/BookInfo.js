import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import BookBanner from './BookBanner';

const BookInfo = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    useTitle('Booking');

    return (
     <div className='mt-20' >
        <BookBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></BookBanner>
     </div>
    );
};

export default BookInfo;