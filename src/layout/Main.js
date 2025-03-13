import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import "../App.css";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;