import React from 'react';

const MiddleBox = () => {
    return (
        <div className="absolute z-40 w-full max-w-screen-xl left-1/2 -translate-x-1/2 sm:bottom-[-3%] bottom-[-6%] ">
            <div className='flex justify-center items-center'>
                <div className="sm:p-2 w-4/5 flex bg-white  border-4 border-x-0 border-t-0 border-b-amber-300">
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>2,000+</h1>
                        <p className='text-sm sm:text-base md:text-xl'>Counselled</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>200+</h1>
                        <p className='text-sm sm:text-base md:text-xl'>Happy Students</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>$20,000+</h1>
                        <p className='text-sm sm:text-base md:text-xl'>Scolarship Awards</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>+6</h1>
                        <p className='text-sm sm:text-base md:text-xl'>Countries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleBox;