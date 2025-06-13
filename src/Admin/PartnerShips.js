import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { FaCalendarAlt, FaNetworkWired, FaPhoneAlt, FaSitemap, FaWhatsapp } from 'react-icons/fa';
import { MdAccountCircle, MdAppShortcut, MdDelete, MdOutlineMailOutline, MdVerified } from 'react-icons/md';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { FcInfo } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { ImCancelCircle } from 'react-icons/im';
import { PiStudentFill } from "react-icons/pi";
import { GiConversation } from 'react-icons/gi';
import { FiMessageSquare, FiPhone } from 'react-icons/fi';

const PartnerShips = () => {
    const { data: agents = [], refetch } = useQuery({
        queryKey: ["agents"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/partnerRequest`);
            const data = await res.json();
            return data;
        },
    });

    const handleDelete = (id) => {
        if (!id) {
            return;
        }
        fetch(`http://localhost:5000/partnerRequest/${String(id)}`, {
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

    const handleUpdatedStatus = ({ id, status }) => {
        console.log(id);
        if (!id) {
            return;
        }
        fetch(`http://localhost:5000/partnerRequest/${String(id)}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`Appointment Request ${status}`);
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    // cancelled
    // approved
    console.log(agents)
    return (
        <motion.div
            className="container mx-auto py-10 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold mb-8 text-left md:ml-5">Apprentship</h1>
            <div role="tablist" className="tabs tabs-bordered w-full">
                <input
                    type="radio"
                    style={{ padding: "10px 35px", display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: "100%" }}
                    name="appointment-history-radio-1"
                    className="tab text-[#1E6DEB] font-medium w-1/2 text-base"
                    aria-label="Pending"
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th><p className="flex items-center gap-0"> <MdAccountCircle></MdAccountCircle> Name </p></th>
                                <th><p className="flex items-center gap-0"> <FaPhoneAlt></FaPhoneAlt>  Contact </p> </th>
                                <th><p className="flex items-center gap-0"> <FaNetworkWired />  Organization </p> </th>
                                <th><p className="flex items-center gap-0"> <PiStudentFill />  Student/year </p> </th>
                                <th><p className="flex items-center gap-0"> <GiConversation></GiConversation>  Message </p> </th>
                                <th><p className="flex items-center gap-0"> <MdVerified></MdVerified>  Approve </p> </th>
                                <th><p className="flex items-center gap-0"> <ImCancelCircle></ImCancelCircle>  Cancel </p> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {agents?.filter(agent => agent.status === "pending")?.map(agent => <tr>
                                <td>
                                    <div className="flex items-center gap-0">
                                        <div>
                                            <div className="font-bold">{agent?.contactPerson}</div>
                                            <div className="text-sm opacity-80">
                                                {agent?.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-0">
                                        <div>
                                            <div className="font-medium">{agent?.phoneNumber}</div>
                                            <div className="text-sm opacity-80">
                                                <span className="flex justify-center items-center"><FaWhatsapp /> {agent?.whatsapp}</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-0">
                                        <div>
                                            <div className="font-medium">{agent?.organizationName}</div>
                                            <div className="text-sm opacity-80">
                                                <span className="flex justify-left items-center">{agent?.website}</span>
                                                <span className="flex justify-left items-center"> • {agent?.organizationType}</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-0">
                                        <div>
                                            <div className="font-medium">{agent?.studentCount} Students</div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <div className="tooltip flex items-center" data-tip={`${agent?.message}`}>
                                        <button className=""><FcInfo className='text-2xl'></FcInfo></button>
                                    </div>
                                </th>
                                <th>
                                    <button onClick={() => handleUpdatedStatus({ id: agent?._id, status: "approved" })} className="btn btn-sm rounded-none text-xs font-normal bg-[#006A4D] text-white transition-all hover:bg-white hover:text-[#006A4D] hover:border hover:border-[#006A4D]">Approve</button>
                                </th>
                                <th>
                                    <button onClick={() => handleUpdatedStatus({ id: agent?._id, status: "cancelled" })} className="btn btn-sm rounded-none text-xs font-normal bg-red-600 text-white transition-all hover:bg-white hover:text-red-600 hover:border hover:border-red-600">Cancel</button>
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <input
                    type="radio"
                    name="appointment-history-radio-1"
                    className="tab text-[#1E6DEB] font-medium w-1/2 text-base"
                    style={{ padding: "10px 35px", display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: "100%" }}
                    aria-label="Approved"
                    defaultChecked
                />
                <div className="tab-content  bg-base-100 border-base-300 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {agents?.filter(agent => agent.status === "approved")?.map((agent, i) => <div>
                            <motion.div
                                key={agent._id}
                                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.05, ease: "backOut" }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full filter blur-xl"></div>

                                {/* Header with improved typography */}
                                <div className="relative z-10 flex flex-col space-y-3 mb-4">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                                        {agent.contactPerson}
                                    </h2>

                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <FaSitemap className="text-blue-600 dark:text-blue-400 text-xl" />
                                        </div>
                                        <span className="font-medium">{agent.organizationName}</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                            <MdAppShortcut className="text-purple-600 dark:text-purple-400 text-xl" />
                                        </div>
                                        <a href={agent.website} target="_blank" rel="noopener noreferrer"
                                            className="font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                                            {agent.website.replace(/^https?:\/\//, '')}
                                        </a>
                                    </div>
                                </div>

                                {/* Details with modern chip-style elements */}
                                <div className="relative z-10 grid grid-cols-2 gap-3 mb-5">
                                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded-xl">
                                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">PRIMARY CONTACT</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-100">{agent.primaryContactMethod}</p>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded-xl">
                                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">REFERRAL SOURCE</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-100">{agent.howDidYouHear}</p>
                                    </div>
                                </div>

                                {/* Stats with animated progress indicator */}
                                <div className="relative z-10 flex items-center gap-3 mb-5 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                                        <PiStudentFill className="text-blue-600 dark:text-blue-300 text-2xl" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between text-sm font-medium mb-1">
                                            <span className="text-gray-700 dark:text-gray-300">Student Volume</span>
                                            <span className="text-blue-600 dark:text-blue-400">{agent.studentCount}/year</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${Math.min(agent.studentCount, 100)}%` }}
                                                transition={{ delay: 0.3, duration: 0.8 }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Info with interactive elements */}
                                <div className="relative z-10 space-y-3">
                                    <a href={`mailto:${agent.email}`} className="flex items-center gap-3 group">
                                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                                            <MdOutlineMailOutline className="text-green-600 dark:text-green-400 text-xl" />
                                        </div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                            {agent.email}
                                        </span>
                                    </a>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                                            <FiPhone className="text-amber-600 dark:text-amber-400 text-xl" />
                                        </div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{agent.phoneNumber}</span>
                                    </div>
                                </div>
                                {/* Message (if any) */}
                                {agent.message && (
                                    <div className="mt-3">
                                        <div className="collapse">
                                            <input type="checkbox" />
                                            <div className="collapse-title flex items-center gap-2">
                                                <FiMessageSquare className="text-4xl mt-1" />
                                                <span className="line-clamp-2">
                                                    {agent.message.length > 40
                                                        ? agent.message.slice(0, 40) + '...'
                                                        : agent.message}
                                                </span>
                                            </div>

                                            {/* Show full message only if longer than 40 */}
                                            {agent.message.length > 40 && (
                                                <div className="collapse-content text-sm text-gray-600">
                                                    {agent.message}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>)}
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
                                <th><p className="flex items-center gap-0"> <MdAccountCircle></MdAccountCircle> Name </p></th>
                                <th><p className="flex items-center gap-0"> <FaPhoneAlt></FaPhoneAlt>  Contact </p> </th>
                                <th><p className="flex items-center gap-0"> <FaNetworkWired />  Organization </p> </th>
                                <th><p className="flex items-center gap-0"> <PiStudentFill />  Student/year </p> </th>
                                <th><p className="flex items-center gap-0"> <GiConversation></GiConversation>  Message </p> </th>
                                <th><p className="flex items-center gap-0"> <MdDelete></MdDelete>  Delete </p> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {agents?.filter(agent => agent.status === "cancelled")?.map(agent => <tr>
                                <td>
                                    <div className="flex items-center gap-0">
                                        <div>
                                            <div className="font-bold">{agent?.contactPerson}</div>
                                            <div className="text-sm opacity-80">
                                                {agent?.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-0">
                                        <div>
                                            <div className="font-medium">{agent?.phoneNumber}</div>
                                            <div className="text-sm opacity-80">
                                                <span className="flex justify-center items-center"><FaWhatsapp /> {agent?.whatsapp}</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-0">
                                        <div>
                                            <div className="font-medium">{agent?.organizationName}</div>
                                            <div className="text-sm opacity-80">
                                                <span className="flex justify-left items-center">{agent?.website}</span>
                                                <span className="flex justify-left items-center"> • {agent?.organizationType}</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-0">
                                        <div>
                                            <div className="font-medium">{agent?.studentCount} Students</div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <div className="tooltip flex items-center" data-tip={`${agent?.message}`}>
                                        <button className=""><FcInfo className='text-2xl'></FcInfo></button>
                                    </div>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(agent?._id)} className="btn btn-sm rounded-none text-xs font-normal bg-red-600 text-white transition-all hover:bg-white hover:text-red-600 hover:border hover:border-red-600">Delete</button>
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    )
};

export default PartnerShips;