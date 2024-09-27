import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VideoSect = () => {
    const video = useLoaderData();

    return (
        <div className='py-20 px-10'>
            <div className="md:flex md:justify-center md:items-center">
                <div  className='md:w-2/3 w-full mx-3' style={{ height: 'calc((100vh/3)*2)' }}>
                    <iframe src={video.link} className='w-full h-full' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='mx-3'>
                    <h1 className='text-5xl text-white my-1'>
                        {video.title}
                    </h1>
                    <p className='text-xl text-white my-1'>{video.discription}</p>
                    <p className='underline decoration-dashed decoration-blue-400 text-white text-lg'>{video.isOwner ? "This Is Special cause a Owner of website made it" : ""}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoSect;