import React from 'react';

const MiddleBox = () => {
    return (
        <div className="absolute z-50 w-full max-w-screen-xl left-1/2 -translate-x-1/2 bottom-[-3%] ">
            <div className='flex justify-center items-center'>
                <div className="sm:p-2 w-4/5 flex bg-white  border-4 border-x-0 border-t-0 border-b-amber-300">
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='sm:text-4xl text-2xl font-bold'>5,000+</h1>
                        <p className='text-sm sm:text-xl'>Counselled</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='sm:text-4xl text-2xl font-bold'>500+</h1>
                        <p className='text-sm sm:text-xl'>Happy Students</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='sm:text-4xl text-2xl font-bold'>$50,000</h1>
                        <p className='text-sm sm:text-xl'>Scolarship Awards</p>
                    </div>
                    <div className='divider divider-vertical md:divider-horizontal'></div>
                    <div className='text-center inline-grid w-full ' style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                        <h1 className='sm:text-4xl text-2xl font-bold'>+10</h1>
                        <p className='text-sm sm:text-xl'>Countries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleBox;