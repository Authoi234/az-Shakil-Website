import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaClock, FaCalendarAlt, FaCommentAlt, FaPhoneAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [visaType, setVisaType] = useState(null);
    const date = format(selectedDate, 'PP')
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const [currentVisaId, setCurrentVisaId] = useState(null);
    const [selectedVisaName, setSelectedVisaName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date, currentVisaId],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        },
    });

    useEffect(() => {
        if (appointmentOptions.length > 0 && !currentVisaId) {
            setCurrentVisaId(appointmentOptions[0]._id);
            setSelectedVisaName(appointmentOptions[0].name);
            setValue('type', appointmentOptions[0].name);
        }
    }, [appointmentOptions, currentVisaId, setValue]);

    const onSubmit = (data) => {
        const booking = {
            appointmentDate: date,
            client: data?.name,
            visa: data?.type,
            slot: data?.timeSlot,
            email: data?.email,
            phone: data?.phone,
            message: data?.message
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking Confirmed');
                    refetch();
                    reset();
                    navigate("/")
                }
                else {
                    toast.error(data.message);
                }
            })
    };

    return (
        <header className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        className="w-full flex py-10 justify-center mx-auto items-center md:w-11/12 rounded-lg shadow-lg p-6 bg-white"
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
                        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center" onClick={() => console.log(appointmentOptions?.find((opt) => opt?._id === currentVisaId))} >Book an Appointment</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="relative">
                                <FaUser className="absolute left-3 top-[17px] text-gray-400" />
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    type="text"
                                    placeholder="Your Name"
                                    className={`input input-bordered w-full pl-10 ${errors.name ? 'input-error' : ''}`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-[17px] text-gray-400" />
                                <input
                                    {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                                    type="email"
                                    placeholder="Your Email"
                                    className={`input input-bordered w-full pl-10 ${errors.email ? 'input-error' : ''}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            <div className="relative">
                                <FaPhoneAlt className="absolute left-3 top-[17px] text-gray-400" />
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
                                    <FaClock className="absolute left-3 top-[17px] text-gray-400" />
                                    <select
                                        {...register("timeSlot", { required: "Time Slot is required" })}
                                        className={`select select-bordered w-full pl-10 ${errors.timeSlot ? 'select-error' : ''}`}
                                    >
                                        <option value="" defaultChecked disabled>Select a Time Slot</option>
                                        {appointmentOptions
                                            .find((opt) => opt._id === currentVisaId)
                                            ?.slots?.map((slot, i) => (
                                                <option key={i} value={slot}>
                                                    {slot}
                                                </option>
                                            ))}
                                    </select>
                                    {errors.timeSlot && <p className="text-red-500 text-sm mt-1">{errors.timeSlot.message}</p>}
                                </div>

                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-4 top-[17px] text-gray-400" />
                                    <select
                                        value={selectedVisaName}
                                        {...register("type", { required: "Appointment Type is required" })}
                                        onChange={(e) => {
                                            const name = e.target.value;
                                            const selectedVisa = appointmentOptions.find(opt => opt.name === name);

                                            setCurrentVisaId(selectedVisa?._id);
                                            setSelectedVisaName(name);
                                            setValue('type', name);
                                        }}

                                        className={`select select-bordered w-full pl-10 ${errors.type ? 'select-error' : ''}`}
                                    >
                                        <option value="" defaultChecked disabled>Select Visa Type</option>
                                        {appointmentOptions?.map((opt) => (
                                            <option key={opt._id} value={opt.name}>
                                                {opt.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
                                </div>
                            </div>

                            <div className="relative">
                                <FaCommentAlt className="absolute left-3 top-[17px] text-gray-400" />
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