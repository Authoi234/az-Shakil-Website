import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { motion } from 'framer-motion';
import { MdCalendarMonth, MdOutlineMailOutline, } from "react-icons/md";
import { FiMessageSquare, FiPhone } from "react-icons/fi";
import toast from 'react-hot-toast';

const Appointments = () => {
    const { data: bookings, isLoading, isError, refetch } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`https://az-shakil-website-server.vercel.app/bookings?status=pending`);
            const data = await res.json();
            return data;
        },
    });

    const handleAppointmentConfirmed = (id) => {
        console.log(id);
        if(!id){
            return;
        }
        fetch(`https://az-shakil-website-server.vercel.app/bookings/${String(id)}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "confirmed" })
          })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Appointment Request Approved');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    
    const handleAppointmentCancelled = (id) => {
        if(!id){
            return;
        }
        fetch(`https://az-shakil-website-server.vercel.app/bookings/${String(id)}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "cancelled" })
          })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Appointment Request Cancelled');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

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
                    {bookings?.map((appointment, index) => (
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
                                    <div className="mt-3">
                                        <div className="collapse">
                                            <input type="checkbox" />
                                            <div className="collapse-title flex items-center gap-2">
                                                <FiMessageSquare className="w-4 h-4 mt-1" />
                                                <span className="line-clamp-2">
                                                    {appointment.message.length > 40
                                                        ? appointment.message.slice(0, 40) + '...'
                                                        : appointment.message}
                                                </span>
                                            </div>

                                            {/* Show full message only if longer than 40 */}
                                            {appointment.message.length > 40 && (
                                                <div className="collapse-content text-sm text-gray-600">
                                                    {appointment.message}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between items-center my-3">
                                <button className='btn hover:text-[#1E6DEB] btn-sm py-0 text-white hover:border hover:border-[#1E6DEB] bg-[#1E6DEB] hover:bg-white transition-all duration-500' onClick={() => handleAppointmentConfirmed(appointment?._id)}>Confirm</button>
                                <button className='btn btn-outline btn-error btn-sm' onClick={() => handleAppointmentCancelled(appointment?._id)}>Cancel</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Appointments;
