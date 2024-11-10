import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/router';
import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import preloader from './assets/earthpreloader.gif';

function App() {

  useEffect(() => {
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = '1.5s ease-in';
        setTimeout(() => {
          preloader.style.display = "none"
        }, 1100);
      }, 800);
    });
  }, [])

  return (
    <div className="">
      <div id='preloader' className='text-center' style={{ width: '100vw', height: '100vh', position: 'fixed', backgroundColor: 'rgb(0, 1, 46)', zIndex: 100 }}>
        <div className='flex justify-center items-center'>
          <div className='mx-auto my-0 text-center'>
            <div className='flex justify-center items-center'>
              <img className='bg-white p-1 rounded-lg w-80 mt-10' src={logo} alt="" />
            </div>
            <h2 className="text-4xl my-2 text-white">Loading...</h2>
            <div className="flex justify-center items-center">
              <img className='w-full' src={preloader} alt="" />
            </div>
          </div>
        </div>
      </div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
