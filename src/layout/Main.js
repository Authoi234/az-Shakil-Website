import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import "../App.css";
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;