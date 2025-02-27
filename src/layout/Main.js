import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import "../App.css";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;

                // Check if scrolled to the bottom
                if (scrollY + windowHeight >= documentHeight - 10) { // Adding a small buffer
                    setIsFooterVisible(true);
                } else {
                    setIsFooterVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar isFooterVisible={isFooterVisible} />
            <Outlet />
            <Footer isFooterVisible={isFooterVisible} />
        </div>
    );
};

export default Main;