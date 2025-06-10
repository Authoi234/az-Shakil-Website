import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdAccountCircle, MdDelete } from 'react-icons/md';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { FcInfo } from 'react-icons/fc';
import toast from 'react-hot-toast';

const AppointmentsHistory = () => {
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings`);
            const data = await res.json();
            return data;
        },
    });

    const handleAppointmentDelete = (id) => {
        if (!id) {
            return;
        }
        fetch(`http://localhost:5000/bookings/${String(id)}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Appointment from History Deleted Successfully');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <motion.div
            className="container mx-auto py-10 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold mb-8 text-center">Appointments History</h1>
            <div className="tabs tabs-lifted w-full">
                <input
                    type="radio"
                    name="appointment-history-radio-1"
                    className="tab text-[#1E6DEB] font-medium w-1/2 text-base"
                    style={{ padding: "10px 35px", display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: "100%" }}
                    aria-label="Approved"
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" disabled />
                                        </label>
                                    </th>
                                    <th><p className="flex items-center gap-1"> <MdAccountCircle></MdAccountCircle> Name </p></th>
                                    <th><p className="flex items-center gap-1"> <FaPhoneAlt></FaPhoneAlt>  Contact </p> </th>
                                    <th><p className="flex items-center gap-1"> <FaCalendarAlt></FaCalendarAlt>  Time </p> </th>
                                    <th><p className="flex items-center gap-1"> <BsFillInfoSquareFill></BsFillInfoSquareFill>  Info </p> </th>
                                    <th><p className="flex items-center gap-1"> <MdDelete></MdDelete>  Action </p> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings?.filter(booking => booking.status === "confirmed")?.map(booking => <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold">{booking?.client}</div>
                                                <div className="text-sm opacity-80">{booking?.visa}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {booking?.email}
                                        <br />
                                        <span className="text-sm bg-[#f1fdff] px-1 mt-2">{booking?.phone}</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold">{booking?.appointmentDate}</div>
                                                <div className="text-sm">{booking?.slot}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <div className="tooltip" data-tip={`${booking?.message}`}>
                                            <button className=""><FcInfo className='text-2xl'></FcInfo></button>
                                        </div>
                                    </th>
                                    <th>
                                        <button onClick={() => handleAppointmentDelete(booking?._id)} className="btn rounded-none bg-red-600 btn-sm text-white transition-all hover:bg-white hover:text-red-600 hover:border hover:border-red-600">Delete</button>
                                    </th>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>

                <input
                    type="radio"
                    style={{ padding: "10px 35px", display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: "100%" }}
                    name="appointment-history-radio-1"
                    className="tab text-[#1E6DEB] font-medium w-1/2 text-base"
                    aria-label="Cancelled"
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" disabled />
                                    </label>
                                </th>
                                <th><p className="flex items-center gap-1"> <MdAccountCircle></MdAccountCircle> Name </p></th>
                                <th><p className="flex items-center gap-1"> <FaPhoneAlt></FaPhoneAlt>  Contact </p> </th>
                                <th><p className="flex items-center gap-1"> <FaCalendarAlt></FaCalendarAlt>  Time </p> </th>
                                <th><p className="flex items-center gap-1"> <BsFillInfoSquareFill></BsFillInfoSquareFill>  Info </p> </th>
                                <th><p className="flex items-center gap-1"> <MdDelete></MdDelete>  Action </p> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.filter(booking => booking.status === "cancelled")?.map(booking => <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{booking?.client}</div>
                                            <div className="text-sm opacity-80">{booking?.visa}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking?.email}
                                    <br />
                                    <span className="text-sm bg-[#f1fdff] px-1 mt-2">{booking?.phone}</span>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{booking?.appointmentDate}</div>
                                            <div className="text-sm">{booking?.slot}</div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <div className="tooltip" data-tip={`${booking?.message}`}>
                                        <button className=""><FcInfo className='text-2xl'></FcInfo></button>
                                    </div>
                                </th>
                                <th>
                                    <button onClick={() => handleAppointmentDelete(booking?._id)} className="btn rounded-none bg-red-600 btn-sm text-white transition-all hover:bg-white hover:text-red-600 hover:border hover:border-red-600">Delete</button>
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};

export default AppointmentsHistory;