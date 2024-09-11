import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import "../App.css"
import SkillsPage from './SkillsPage/SkillsPage';

const Home = () => {
    return (
        <div className=''>
            <div className='colorbg'>
                <div className='pt-8'>
                    <Navbar></Navbar>
                </div>
            </div>
            <HomePage></HomePage>
            <SkillsPage></SkillsPage>
        </div>
    );
};

export default Home;