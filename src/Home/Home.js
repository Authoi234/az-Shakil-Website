import React from 'react';
import HomePage from './HomePage/HomePage';
import "../App.css"
import SkillsPage from './SkillsPage/SkillsPage';
import Contributions from './Contributions/Contributions';
import AboutUs from './AboutUs/AboutUs';
import LearnersReviews from './Reviews/LearnersReviews';
import '../css/style.css';
import Services from './Service/Services';
import Countries from './Countries/Countries';
import VisaCategories from './VisaCategories/VisaCategories';

const Home = () => {

    return (
        <div className=''>
            <HomePage></HomePage>
            <AboutUs></AboutUs>
            <Services></Services>
            <VisaCategories></VisaCategories>
            <Countries></Countries>
            <LearnersReviews></LearnersReviews>
            <Contributions></Contributions>
            <SkillsPage></SkillsPage>
        </div >
    );
};

export default Home;