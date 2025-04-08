import React from 'react';
import { motion } from 'framer-motion';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
} from 'recharts';
import { FiUsers, FiTrendingUp, FiCheckCircle, FiClock, FiXCircle, FiLink } from 'react-icons/fi';

const Dahsboard = () => {
    const pieData = [
        { name: 'Approved', value: 400, color: '#4CAF50' }, // Green
        { name: 'Pending', value: 300, color: '#FFC107' }, // Amber
        { name: 'Rejected', value: 200, color: '#F44336' }, // Red
    ];

    const lineData = [
        { day: 'Mon', users: 100, revenue: 300 },
        { day: 'Tue', users: 150, revenue: 450 },
        { day: 'Wed', users: 120, revenue: 350 },
        { day: 'Thu', users: 170, revenue: 500 },
        { day: 'Fri', users: 200, revenue: 600 },
    ];

    return (
        <motion.div
            className="bg-gray-100 min-h-screen p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Stats Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                    <div className="bg-blue-100 text-blue-500 rounded-full p-3 mr-4">
                        <FiUsers size={24} />
                    </div>
                    <div>
                        <div className="text-lg font-semibold text-gray-700">Total Users</div>
                        <div className="text-2xl text-gray-900">1,200</div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                    <div className="bg-green-100 text-green-500 rounded-full p-3 mr-4">
                        <FiTrendingUp size={24} />
                    </div>
                    <div>
                        <div className="text-lg font-semibold text-gray-700">Total Revenue</div>
                        <div className="text-2xl text-gray-900">$45,000</div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                    <div className="bg-yellow-100 text-yellow-500 rounded-full p-3 mr-4">
                        <FiClock size={24} />
                    </div>
                    <div>
                        <div className="text-lg font-semibold text-gray-700">Active Sessions</div>
                        <div className="text-2xl text-gray-900">300</div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                    <div className="bg-purple-100 text-purple-500 rounded-full p-3 mr-4">
                        <FiCheckCircle size={24} />
                    </div>
                    <div>
                        <div className="text-lg font-semibold text-gray-700">New Registrations</div>
                        <div className="text-2xl text-gray-900">75</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Pie Chart Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Approval Status Overview</h2>
                    <ResponsiveContainer width="100%" height={280}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {
                                    pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))
                                }
                            </Pie>
                            <Tooltip />
                            {/* You could add more interactive features here, like onClick to filter data */}
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Line Chart Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">User Growth & Revenue</h2>
                    <ResponsiveContainer width="100%" height={320}>
                        <LineChart data={lineData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis yAxisId="left" label={{ value: 'Users', angle: -90, position: 'insideLeft', offset: -25 }} />
                            <YAxis yAxisId="right" orientation="right" label={{ value: 'Revenue ($)', angle: -90, position: 'insideRight', offset: 25 }} />
                            <Tooltip />
                            <Line yAxisId="left" type="monotone" dataKey="users" stroke="#60A5FA" strokeWidth={2} name="Users" />
                            <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#81CF87" strokeWidth={2} name="Revenue" />
                            {/* You could add interactive elements like dot hover effects or data point selection */}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 rounded-md p-3 text-gray-700 flex items-center">
                        <FiUsers className="mr-2" size={18} /> Manage Users
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 rounded-md p-3 text-gray-700 flex items-center">
                        <FiTrendingUp className="mr-2" size={18} /> Revenue Insights
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 rounded-md p-3 text-gray-700 flex items-center">
                        <FiLink className="mr-2" size={18} /> System Logs
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 rounded-md p-3 text-gray-700 flex items-center">
                        <FiCheckCircle className="mr-2" size={18} /> Reports
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 rounded-md p-3 text-gray-700 flex items-center">
                        <FiXCircle className="mr-2" size={18} /> Error Tracking
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 rounded-md p-3 text-gray-700 flex items-center">
                        <FiClock className="mr-2" size={18} /> Scheduled Tasks
                    </a>
                    {/* Add more quick links as needed */}
                </div>
            </div>

            <footer className="text-center text-gray-500 mt-8">
                <p>&copy; {new Date().getFullYear()} Admin Dashboard</p>
            </footer>
        </motion.div>
    );
};

const Cell = ({ fill, i }) => (
    <motion.path
        d={Pie.getArcPath({ cx: 100, cy: 100, outerRadius: 80, innerRadius: 0, startAngle: i * 360 / 3, endAngle: (i + 1) * 360 / 3 })}
        fill={fill}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
    />
);

export default Dahsboard;