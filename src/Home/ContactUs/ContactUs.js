import React, { useState } from 'react';
import logo from "../../assets/logoIcon-bgless.png";
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message
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
        <div className='bg-[#FEFEFE]' id="contact-us">
            <div className="hero mt-36 mb-10 ">
                <div className="w-full max-w-3xl h-full relative flex-row-reverse mx-auto flex justify-center items-center pb-12 ">
                    <img src={logo} className='absolute w-32 top-10 -right-20' alt="" />
                    <div className="w-full">
                        <div className="bg-base-100 shrink-0 shadow-2xl pb-12">
                            <div className="flex justify-between">
                                <h1 className="text-5xl font-bold ml-9 mb-5">Contact Us!</h1>
                            </div>
                            <form className="px-10" onSubmit={handleSubmit}>
                                <label className="text-lg font-medium w-full">Full Name*</label>
                                <input
                                    type="text"
                                    name="name"  // Add this
                                    className="h-12 px-4 text-base border w-full"
                                    required
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <label className="text-lg font-medium w-full">Email*</label>
                                <input
                                    type="email"
                                    name="email"  // Add this
                                    className="h-12 px-4 text-base border w-full"
                                    required
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-lg font-medium">Your Message*</legend>
                                    <textarea
                                        name="message"  // Add this
                                        className="textarea mt-3 pt-3 text-md border textarea-bordered"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        required
                                        rows={5}
                                        cols={60}
                                        placeholder="Enter Your Message">
                                    </textarea>
                                </fieldset>
                                <button type='submit' className="btn btn-neutral mt-4 w-full rounded-none">Contact</button>
                            </form>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <img className='w-full h-full' src="https://img.freepik.com/free-photo/modern-empty-business-corporate-office-meeting-room-is-ready-businesspeople-late-night_482257-2168.jpg?t=st=1742023392~exp=1742026992~hmac=ac5b0cc47c19aefdf37ec5b159e74921d6619dd562882ed647987e54bfbbf7d1&w=740" alt="" />
                    </div>
                    <div className="absolute max-w-xs p-5 bg-base-200 -left-48">
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
        </div>
    );
};

export default ContactUs;