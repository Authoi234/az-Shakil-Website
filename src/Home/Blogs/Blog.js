import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {

    const { id } = useParams();
    console.log(id)
    const { data: blog, isSuccess } = useQuery({
        queryKey: ["blog"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/blogs/${id}`);
            const data = await res.json();
            return data;
        },
    });

    let time = "Invalid date";
    if (!isNaN(Number(blog?.timestamp))) {
        const date = new Date(Number(blog.timestamp));
        if (!isNaN(date.getTime())) {
            time = format(date, "MMM d, yyyy");
        }
    }

    useEffect(() => {
        document.body.scrollTop = 0;
    }, [])

    useEffect(() => {
        if (isSuccess || blog) {
            const a = document.getElementById("blog-content-detail");
            a.innerHTML = `${blog?.message}`;
        }
    }, [isSuccess, blog])

    return (
       <div className="flex justify-center items-center">
         <div className='container mt-16 mb-16 pt-24 px-5 mx-5 max-w-6xl '>
            <div className="">
                <div className="mb-5 text-center md:text-left md:flex md:justify-center items-center w-full">
                    <div className=''>
                        <h1 className='text-3xl font-bold text-black my-5'>{blog?.title}</h1>
                        <p className=" text-lg">
                            <span className="pr-1  font-medium text-gray-500">Author: <span className="text-[#1E6DEB]"> Team Apprent</span></span>
                            |
                            <span className='px-1 font-medium ' style={{ color: 'green' }}>{blog?.blogType}</span>
                            |
                            <span className='px-1 text-lg'> <span className='font-medium' style={{ color: "#7a7a7a" }}>Pubnished On {time}</span> </span>
                        </p>
                    </div>
                </div>
                <div id='blog-content-detail' className='mx-auto '>

                </div>
            </div>
        </div>
       </div>
    );
};

export default Blog;