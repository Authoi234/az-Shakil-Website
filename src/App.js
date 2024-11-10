import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/router';
import { useEffect, useState } from 'react';
import logo from './assets/logo.png';

function App() {

  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsComplete(false)
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100
          setIsComplete(true);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust this delay for faster or slower animation

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = '1.5s ease-in';
        setTimeout(() => {
          preloader.style.display = "none"
        }, 1100);
      }, 1000);
    });
  }, [isComplete, progress])

  return (
    <div className="">
      <div id='preloader' className='text-center' style={{ width: '100vw', height: '100vh', position: 'fixed', backgroundColor: 'rgb(0, 1, 46)', zIndex: 100 }}>
        <div className='flex justify-center items-center'>
          <div className='mx-auto my-0 text-center'>
            <div className='flex justify-center items-center'>
              <img className='bg-white p-1 rounded-lg w-80 mt-10' src={logo} alt="" />
            </div>
            <h2 className="text-4xl my-2 text-white">{isComplete ? "Completed" : "Loading..."}</h2>
            <div
              className="radial-progress bg-black text-white border-black border-8 shadow-white sahdow shadow-xl text-3xl"
              style={{ "--value": progress, "--size": '12rem', "--thickness": '1rem' }}
              role="progressbar">
              {progress}%
            </div>
          </div>
        </div>
      </div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
