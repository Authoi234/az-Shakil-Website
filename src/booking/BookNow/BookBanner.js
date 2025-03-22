import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaClock, FaCalendarAlt, FaCommentAlt, FaPhoneAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BookBanner = ({ selectedDate, setSelectedDate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission here
    };

    return (
        <header className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        className="w-full flex justify-center mx-auto items-center md:w-11/12 mx-auto rounded-lg shadow-lg p-6 bg-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        data-aos="fade-right"
                    >
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="text-center"
                        />
                    </motion.div>

                    <div className="w-full md:w-11/12 mx-auto rounded-lg shadow-lg p-8 bg-white" data-aos="fade-left">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Book an Appointment</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    type="text"
                                    placeholder="Your Name"
                                    className={`input input-bordered w-full pl-10 ${errors.name ? 'input-error' : ''}`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                                    type="email"
                                    placeholder="Your Email"
                                    className={`input input-bordered w-full pl-10 ${errors.email ? 'input-error' : ''}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            <div className="relative">
                                <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    {...register("phone", { required: "Phone number is required", pattern: /^[0-9]+$/ })}
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    className={`input input-bordered w-full pl-10 ${errors.phone ? 'input-error' : ''}`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <FaClock className="absolute left-3 top-3 text-gray-400" />
                                    <select
                                        {...register("timeSlot", { required: "Time Slot is required" })}
                                        className={`select select-bordered w-full pl-10 ${errors.timeSlot ? 'select-error' : ''}`}
                                    >
                                        <option value="">Select a Time Slot</option>
                                        <option value="9-10 AM">9:00 AM - 10:00 AM</option>
                                        <option value="10-11 AM">10:00 AM - 11:00 AM</option>
                                        <option value="11-12 PM">11:00 AM - 12:00 PM</option>
                                    </select>
                                    {errors.timeSlot && <p className="text-red-500 text-sm mt-1">{errors.timeSlot.message}</p>}
                                </div>

                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                                    <select
                                        {...register("type", { required: "Appointment Type is required" })}
                                        className={`select select-bordered w-full pl-10 ${errors.type ? 'select-error' : ''}`}
                                    >
                                        <option value="">Select Appointment Type</option>
                                        <option value="General Checkup">General Checkup</option>
                                        <option value="Consultation">Consultation</option>
                                        <option value="Follow-up">Follow-up</option>
                                    </select>
                                    {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
                                </div>
                            </div>

                            <div className="relative">
                                <FaCommentAlt className="absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    {...register("message")}
                                    placeholder="Your Message"
                                    className="textarea textarea-bordered w-full pl-10 pt-3"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-full">Submit Appointment</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BookBanner;