import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { motion } from 'framer-motion';
import { MdCalendarMonth, MdOutlineMailOutline,  } from "react-icons/md";
import { FiMessageSquare, FiPhone } from "react-icons/fi";

const Appointments = () => {
    const { data: bookings, isLoading, isError } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings`);
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;
    if (isError) return <div className="text-center mt-10 text-red-500">Error loading appointments</div>;

    return (
        <motion.div
            className="container mx-auto py-10 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold mb-8 text-center">Appointments</h1>
            {bookings?.length === 0 ? (
                <motion.div
                    className="mt-6 p-6 bg-base-200 rounded-xl shadow-lg text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p className="text-lg font-medium text-gray-600">No appointments available yet.</p>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookings.map((appointment, index) => (
                        <motion.div
                            key={appointment.id}
                            className="bg-white dark:bg-base-200 rounded-2xl shadow-md p-6 border hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-xl font-semibold">{appointment.client}</div>
                                <span className="badge bg-[#1E6DEB] text-white text-sm px-3 py-1 rounded-md">
                                    {appointment.visa}
                                </span>
                            </div>

                            <div className="text-gray-600 flex items-center gap-2 mb-2">
                                <MdCalendarMonth className="w-4 h-4" />
                                <span className='text-base text-gray-800'>{appointment.appointmentDate}</span>
                            </div>

                            <div className="text-gray-500 mb-2">
                                <strong>Slot:</strong> <span className="text-base text-gray-800">{appointment.slot}</span>
                            </div>

                            <div className="text-sm flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-blue-600">
                                    <MdOutlineMailOutline className="w-4 h-4" />
                                    <a href={`mailto:${appointment.email}`} className="text-base font-medium">{appointment.email}</a>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FiPhone className="w-4 h-4" />
                                    <span className='text-base'>{appointment.phone}</span>
                                </div>
                                {appointment.message && (
                                    <div className="flex items-start gap-2 text-gray-600 mt-2">
                                        <FiMessageSquare className="w-4 h-4 mt-1" />
                                        <span className="line-clamp-2" title={appointment.message}>
                                            {appointment.message}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Appointments;
