import React from 'react';
import HomePage from './HomePage/HomePage';
import "../App.css"
import SkillsPage from './SkillsPage/SkillsPage';
import Contributions from './Contributions/Contributions';

const Home = () => {
    return (
        <div className=''>
            <HomePage></HomePage>
            <SkillsPage></SkillsPage>
            <Contributions></Contributions>
        </div>
    );
};

export default Home;