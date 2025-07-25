import React from 'react';
import HomePage from './HomePage/HomePage';
import "../App.css"
import Contributions from './Contributions/Contributions';
import AboutUs from './AboutUs/AboutUs';
import LearnersReviews from './Reviews/LearnersReviews';
import '../css/style.css';
import Services from './Service/Services';
import Countries from './Countries/Countries';
import VisaCategories from './VisaCategories/VisaCategories';
import Coaching from './Coaching/Coaching';
import MiddleBox from './HomePage/MiddleBox';
import ContactUs from './ContactUs/ContactUs';
import Faq from './Faq/Faq';
import Gallery from './Gallery/Gallery';
import OurBlogs from './Blogs/OurBlogs';
import useTitle from '../hooks/useTitle';
import useMetaDiscription from '../hooks/useMetaDiscription';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    useTitle();
    useMetaDiscription();

    return (
        <div className=''>
            <Helmet>
                <link rel="canonical" href="https://apprent.azshakil.com/" />
            </Helmet>
            <HomePage></HomePage>
            <Services></Services>
            <VisaCategories></VisaCategories>
            <Countries></Countries>
            <Coaching></Coaching>
            <AboutUs></AboutUs>
            <MiddleBox></MiddleBox>
            <LearnersReviews></LearnersReviews>
            <OurBlogs></OurBlogs>
            <Contributions ></Contributions>
            <ContactUs ></ContactUs>
            <Gallery></Gallery>
            <Faq></Faq>
        </div >
    );
};

export default Home;