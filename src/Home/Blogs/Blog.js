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
        <div className='container mt-24 pt-24 px-5 mx-5'>
            <div className="">
                <div className='max-w-2xl mt-5 pt-5'><img src={blog?.imgLink} alt="" className="w-full h-full mt-5" /></div>
                <div className="mb-5 text-center md:text-left md:flex md:justify-center items-center w-full">
                    <h1 className='text-3xl font-bold text-black my-5'>{blog?.title}</h1>
                    <h2 className="text-lg  font-medium text-gray-500">By Az Shakil (MD. Ashaduzzaman Shakil)</h2>
                    <h2 className='text-lg'><span className='font-medium' style={{ color: 'green' }}>{blog?.blogType}</span> • <span className='font-medium' style={{ color: "#7a7a7a" }}>Pubnished On {time}</span> </h2>
                </div>
                <div id='blog-content-detail' className='mx-auto '>

                </div>
            </div>
        </div>
    );
};

export default Blog;