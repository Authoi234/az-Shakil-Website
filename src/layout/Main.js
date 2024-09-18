import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import "../App.css";
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX: x, clientY: y } = event;
            setLightPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div className='glasseffect'>
            <div className='colorbg'>
                <div className='pt-8'>
                    <Navbar></Navbar>
                </div>
            </div>
                <Outlet></Outlet>
                <div className=' absolute transition-all w-64 h-64 top-1/2 left-1/2 rounded-full' style={{
                    left: `${lightPosition.x}px`,
                    top: `${lightPosition.y}px`,
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 80%)"
                }}></div>
            </div>
        </div>
    );
};

export default Main;