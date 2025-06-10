import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css";
import toast from "react-hot-toast";

const WritePost = () => {
    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["link", "image", "video", "formula"],

            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],

            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],

            ["clean"],
        ],
    };

    const formats = ["bold", "italic", "underline", "strike", "blockquote", "code-block", "link", "image", "video", "formula", "header", "list", "bullet", "check", "script", "indent", "direction", "size", "color", "background", "font", "align"];

    const { register, handleSubmit, reset } = useForm();
    const [editorContent, setEditorContent] = useState("");

    const onSubmit = (data) => {
        const articleData = {
            ...data,
            message: editorContent,
            timestamp: new Date().getTime(),

        };
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(articleData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Blog Posted Sucessfully');
                    reset();
                }
                else {
                    toast.error(data.message);
                }
            })
        reset();
        setEditorContent(""); // Clear the editor after submission
    };

    return (
        <motion.div
            className="container mx-auto py-10 px-5 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold  mb-8 text-center">Whats on your mind?</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="w-full">
                    <label className="block text-lg font-medium mb-2">Title</label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        {...register("title", { required: true })}
                        className="input input-bordered text-base w-full"
                    />
                </div>
                <div className="md:flex md:w-full md:justify-evenly md:gap-8 md:items-center">
                    <div className="w-full">
                        <label className="block text-lg font-medium mb-2">Image Link</label>
                        <input
                            type="url"
                            placeholder="Enter image URL"
                            {...register("imgLink", { required: true })}
                            className="input input-bordered text-base w-full"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-lg font-medium mb-2">Blog Category</label>
                        <input
                            type="text"
                            placeholder="Enter Blog Type. eg Lifestyle, health etc."
                            {...register("blogType", { required: true })}
                            className="input input-bordered text-base w-full"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <label className="block text-lg font-medium mb-2">Short Paragraph</label>
                    <input
                        type="text"
                        placeholder="Enter a short paragraph which will be shown at the page under title"
                        {...register("blogPara", { required: true })}
                        className="input input-bordered text-base w-full"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium mb-2">Message</label>
                    <ReactQuill
                        theme="snow"
                        value={editorContent}
                        onChange={setEditorContent}
                        placeholder="Write your article here..."
                        modules={modules}
                        formats={formats}
                    />
                </div>

                <button type="submit" className="btn transition-all max-w-[100px] w-full bg-[#1E6DEB] text-white hover:bg-[#1E6DEB] hover:text-white hover:scale-105 active:scale-90 active:skew-x-12 ">
                    Post
                </button>
            </form>
        </motion.div>
    );
};

export default WritePost;