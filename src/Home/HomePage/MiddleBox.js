import React from 'react';
import useNumReacher from '../../hooks/useNumReacher';

const MiddleBox = () => {

    return (
        <div className="relative translate-y-8 min-w-fit bg-[#3f84f2] -top-10  py-20 " style={{
            boxShadow: "0px 10px 30px white"
        }}>
            <div className='flex justify-center items-center'>
                <div className="sm:p-2 w-4/5 flex text-white border-0">
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>{useNumReacher(0, 2000, 1, 10)}+</h1>
                        <p className='text-sm sm:text-base md:text-xl'>Counselled</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal divider-accent'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>{useNumReacher(0, 200, 5, 1)}+</h1>
                        <p className='text-sm sm:text-base md:text-xl'>Happy Students</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal divider-accent'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>${useNumReacher(0, 20000, 1, 50)}+</h1>
                        <p className='text-sm sm:text-base md:text-xl'>Scolarship Awards</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal divider-accent'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>+{useNumReacher(0, 6, 120, 1)}</h1>
                        <p className='text-sm sm:text-base md:text-xl'>Countries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleBox;