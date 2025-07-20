import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import BookBanner from './BookBanner';
import { InlineWidget } from 'react-calendly';
import useMetaDiscription from '../../hooks/useMetaDiscription';
import { Helmet } from 'react-helmet-async';

const BookInfo = () => {
    useTitle('Book Appointment');
    useMetaDiscription("Book a consultation appoinment with our experts today! Boost your potential with personalized coaching, career guidance, or business strategy sessions. Secure your slot now!");

    return (
        <div className='mt-20' >
            <Helmet>
                <link rel="canonical" href="https://apprent.azshakil.com/book/booking" />
            </Helmet>
            <BookBanner></BookBanner>
        </div>
    );
};

export default BookInfo;