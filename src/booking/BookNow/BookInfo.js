import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import BookBanner from './BookBanner';

const BookInfo = () => {
    useTitle('Booking');

    return (
     <div className='mt-20' >
        <BookBanner></BookBanner>
     </div>
    );
};

export default BookInfo;