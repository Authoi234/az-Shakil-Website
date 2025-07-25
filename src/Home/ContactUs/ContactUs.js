import React, { useRef, useState } from 'react';
import logo from "../../assets/logoIcon-bgless.png";
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import useTitle from '../../hooks/useTitle';
import useMetaDiscription from '../../hooks/useMetaDiscription';
import { Helmet } from 'react-helmet-async';

const ContactUs = ({ id }) => {
    useTitle('Contact Us');
    useMetaDiscription("Have questions or need assistance? Contact us today! Our team is here to help with any inquiries, support requests, or feedback you may have. Reach out now and let's connect!");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message,
            reply_to: email,
        };

        emailjs.send('service_ly6tql4', 'template_bf8c17v', templateParams, 'aw3pzgj5My6EizDfE')
            .then((result) => {
                if (result.text === 'OK') {
                    toast.success('Form submitted successfully!');
                    setName("");
                    setEmail("");
                    setMessage("");
                } else {
                    toast.error('Failed to send email. Please try again.');
                }
            })
            .catch((err) => {
                toast.error('An error occurred while sending the message.');
                console.log(err)
                console.log(err.text)
            });

    }


    return (
        <motion.div className='bg-[#FEFEFE]' id="contact-us" >
            <Helmet>
                <link rel="canonical" href="https://apprent.azshakil.com/contact-us" />
            </Helmet>
            <div className="hero mt-36 mb-10 ">
                <div className="max-w-[768px] md:w-full w-11/12 md:max-w-3xl h-full relative md:flex-row-reverse mx-auto md:flex md:justify-center md:items-center pb-12 ">
                    <img src={logo} className='absolute w-32 md:top-10 -top-5 right-0 md:-right-20 hidden-special-on-small' alt="" />
                    <div className="w-full flex justify-center items-center">
                        <div className="md:w-full w-11/12 mx-auto">
                            <div className="bg-base-100 shrink-0 shadow-2xl pb-12">
                                <div className="flex justify-between">
                                    <h1 className="text-5xl font-bold ml-9 mb-5">Contact Us!</h1>
                                </div>
                                <form className="px-10" onSubmit={handleSubmit}>
                                    <label className="text-lg font-medium w-full">Full Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="h-12  input-bordered input px-4 text-base border w-full"
                                        required
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                    <label className="text-lg font-medium w-full">Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="h-12 px-4 text-base input-bordered input border w-full"
                                        required
                                        placeholder="Email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-lg font-medium">Your Message*</legend>
                                        <textarea
                                            name="message"
                                            className="textarea-lg sm:textarea-lg w-full mt-3 pt-3 text-md border textarea-bordered"
                                            value={message}
                                            rows={3}
                                            onChange={e => setMessage(e.target.value)}
                                            required
                                            placeholder="Enter Your Message">
                                        </textarea>
                                    </fieldset>
                                    <button type='submit' className="btn btn-neutral mt-4 w-full rounded-none">Contact</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 hidden md:flex md:h-full">
                        <img className='md:w-full md:h-full w-[15%] h-[12%]' src="https://img.freepik.com/free-photo/modern-empty-business-corporate-office-meeting-room-is-ready-businesspeople-late-night_482257-2168.jpg?t=st=1742023392~exp=1742026992~hmac=ac5b0cc47c19aefdf37ec5b159e74921d6619dd562882ed647987e54bfbbf7d1&w=740" alt="" />
                    </div>
                    <div className="md:absolute max-w-xs p-5 bg-base-200 md:-left-48 mt-5 md:mt-0 mx-auto">
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title font-semibold">China Office</div>
                            <div className="collapse-content text-sm">8 NO Guangdong Road, Hongqiao, Tianjin, China</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">Dhaka South</div>
                            <div className="collapse-content text-sm">35/7/1, Golapbag, Sayedabad,Dhaka-1203</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">Baridhara Office</div>
                            <div className="collapse-content text-sm">House no- 2, Road No- 7, Block- J, Baridhara, Dhaka, Bangladesh</div>
                        </div>
                        <div className="stats shadow w-full">
                            <div className="stat">
                                <div className="stat-title">Open</div>
                                <div className="font-bold text-xl leading-6">24 Hours</div>
                                <div className="stat-desc">All Day Service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUs;