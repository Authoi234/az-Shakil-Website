import React from 'react';
import HomePage from './HomePage/HomePage';
import MiddleBox from './HomePage/MiddleBox';
import "../App.css"
import SkillsPage from './SkillsPage/SkillsPage';
import Contributions from './Contributions/Contributions';
import AboutUs from './AboutUs/AboutUs';
import LearnersReviews from './Reviews/LearnersReviews';

const Home = () => {

    return (
        <div className=''>
            <HomePage></HomePage>
            <MiddleBox></MiddleBox>
            <SkillsPage></SkillsPage>
            <Contributions></Contributions>
            <AboutUs></AboutUs>
            <LearnersReviews></LearnersReviews>
        </div >
    );
};

export default Home;