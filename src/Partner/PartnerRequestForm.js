import React from 'react';
import { useForm } from 'react-hook-form';
import logo from "../assets/logoIcon-bgless.png"
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PartnerRequestForm = () => {
    const navigate = useNavigate();
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const request = { ...data, timestamp: new Date().getTime() }
        fetch("http://localhost:5000/partnerRequest", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Request Send Successfully');
                    toast.success('We will let you know if your request Approved');
                    reset();
                }
                else {
                    toast.error(data.message);
                }
            })
        reset();
        navigate("/")
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 } },
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="bg-white shadow-xl rounded-2xl px-8 md:p-10 lg:px-12 w-full max-w-screen-lg xl:max-w-screen-xl border border-gray-200"
                variants={sectionVariants}
            >
                <Link to="/">
                    <img className='w-24 cursor-pointer absolute right-16 z-40 top-10' src={logo} alt="" />
                </Link>
                <div className='backdrop-blur-[7px] w-full h-full' style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('https://www.n-able.com/wp-content/uploads/2021/04/Blog-Merger_header.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div className='backdrop-blur-[7px] p-16 w-full h-full  m-0'>
                        <h2 className="text-4xl font-extrabold mb-8 text-center text-white">
                            Join Our Partnership Program
                        </h2>
                        <p className="text-center text-white mb-10 max-w-2xl mx-auto">
                            We're excited to partner with organizations like yours. Please fill out the form below to
                            submit your partnership request.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Organization Details Section */}
                    <motion.div
                        className="p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-100"
                        variants={sectionVariants}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-3 border-blue-200">
                            <i className="fas fa-building mr-2 text-blue-600"></i> Organization Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="organizationName" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Organization Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="organizationName"
                                    className={`input input-bordered w-full transition duration-200 ease-in-out ${errors.organizationName ? 'input-error border-red-500' : 'focus:border-blue-500 focus:ring-blue-500'}`}
                                    {...register('organizationName', { required: 'Organization Name is required' })}
                                    placeholder="e.g., Global Edu Solutions"
                                />
                                {errors.organizationName && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.organizationName.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="website" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Website (Optional)
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    className="input input-bordered w-full transition duration-200 ease-in-out focus:border-blue-500 focus:ring-blue-500"
                                    {...register('website', {
                                        pattern: {
                                            value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                                            message: 'Invalid URL format',
                                        },
                                    })}
                                    placeholder="https://www.your-organization.com"
                                />
                                {errors.website && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.website.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Person Details Section */}
                    <motion.div
                        className="p-6 bg-purple-50 rounded-lg shadow-sm border border-purple-100"
                        variants={sectionVariants}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-purple-800 border-b pb-3 border-purple-200">
                            <i className="fas fa-user-tie mr-2 text-purple-600"></i> Contact Person Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label htmlFor="contactPerson" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Contact Person Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="contactPerson"
                                    className={`input input-bordered w-full transition duration-200 ease-in-out ${errors.contactPerson ? 'input-error border-red-500' : 'focus:border-purple-500 focus:ring-purple-500'}`}
                                    {...register('contactPerson', { required: 'Contact Person Name is required' })}
                                    placeholder="Full Name"
                                />
                                {errors.contactPerson && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.contactPerson.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`input input-bordered w-full transition duration-200 ease-in-out ${errors.email ? 'input-error border-red-500' : 'focus:border-purple-500 focus:ring-purple-500'}`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Invalid email format',
                                        },
                                    })}
                                    placeholder="name@example.com"
                                />
                                {errors.email && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    className={`input input-bordered w-full transition duration-200 ease-in-out ${errors.phoneNumber ? 'input-error border-red-500' : 'focus:border-purple-500 focus:ring-purple-500'}`}
                                    {...register('phoneNumber', { required: 'Phone Number is required' })}
                                    placeholder="+1 (123) 456-7890"
                                />
                                {errors.phoneNumber && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.phoneNumber.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="whatsapp" className="block text-gray-700 text-sm font-semibold mb-2">
                                    WhatsApp Number (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    className="input input-bordered w-full transition duration-200 ease-in-out focus:border-purple-500 focus:ring-purple-500"
                                    {...register('whatsapp')}
                                    placeholder="+1 (123) 456-7890"
                                />
                            </div>

                            <div>
                                <label htmlFor="futurePassword" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Future Password (for your partner portal) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="futurePassword"
                                    className={`input input-bordered w-full transition duration-200 ease-in-out ${errors.futurePassword ? 'input-error border-red-500' : 'focus:border-purple-500 focus:ring-purple-500'}`}
                                    {...register('futurePassword', {
                                        required: 'Please set a future password',
                                        minLength: {
                                            value: 8,
                                            message: 'Password must be at least 8 characters long',
                                        },
                                    })}
                                    placeholder="Set a strong password"
                                />
                                {errors.futurePassword && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.futurePassword.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Partnership Details Section */}
                    <motion.div
                        className="p-6 bg-green-50 rounded-lg shadow-sm border border-green-100"
                        variants={sectionVariants}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-green-800 border-b pb-3 border-green-200">
                            <i className="fas fa-handshake mr-2 text-green-600"></i> Partnership Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="organizationType" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Type of Organization <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="organizationType"
                                    className={`select select-bordered w-full transition duration-200 ease-in-out ${errors.organizationType ? 'select-error border-red-500' : 'focus:border-green-500 focus:ring-green-500'}`}
                                    {...register('organizationType', { required: 'Please select your organization type' })}
                                >
                                    <option value="">Select Type</option>
                                    <option value="school">School</option>
                                    <option value="university">University/College</option>
                                    <option value="educationAgency">Education Agency</option>
                                    <option value="ngo">Personal Organization (PO)</option>
                                    <option value="corporate">Corporate Entity</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.organizationType && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.organizationType.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="studentCount" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Approximate Number of Students Interested in Studying Abroad (per year) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    min={10}
                                    defaultValue={10}
                                    type="number"
                                    id="studentCount"
                                    className={`input input-bordered w-full transition duration-200 ease-in-out ${errors.studentCount ? 'input-error border-red-500' : 'focus:border-green-500 focus:ring-green-500'}`}
                                    {...register('studentCount', {
                                        required: 'Please estimate the number of students',
                                        min: { value: 10 },
                                    })}
                                    placeholder="e.g., 50"
                                />
                                {errors.studentCount && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.studentCount.message}
                                    </span>
                                )}
                            </div>

                            <div className="md:col-span-2"> {/* Make message take full width on md screens */}
                                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Message / Brief Introduction <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    className={`textarea textarea-bordered w-full h-32 transition duration-200 ease-in-out ${errors.message ? 'textarea-error border-red-500' : 'focus:border-green-500 focus:ring-green-500'}`}
                                    {...register('message', { required: 'Please provide a brief introduction' })}
                                    placeholder="Tell us about your organization and why you're interested in partnering."
                                ></textarea>
                                {errors.message && (
                                    <span className="label-text-alt text-error text-sm mt-1 block">
                                        {errors.message.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* How Did You Hear About Us & Contact Method */}
                    <motion.div
                        className="p-6 bg-yellow-50 rounded-lg shadow-sm border border-yellow-100"
                        variants={sectionVariants}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-yellow-800 border-b pb-3 border-yellow-200">
                            <i className="fas fa-info-circle mr-2 text-yellow-600"></i> Additional Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="primaryContactMethod" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Preferred Primary Contact Method
                                </label>
                                <select
                                    id="primaryContactMethod"
                                    className="select select-bordered w-full transition duration-200 ease-in-out focus:border-yellow-500 focus:ring-yellow-500"
                                    {...register('primaryContactMethod')}
                                >
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
                                    <option value="whatsapp">WhatsApp</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="howDidYouHear" className="block text-gray-700 text-sm font-semibold mb-2">
                                    How did you hear about us? (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="howDidYouHear"
                                    className="input input-bordered w-full transition duration-200 ease-in-out focus:border-yellow-500 focus:ring-yellow-500"
                                    {...register('howDidYouHear')}
                                    placeholder="e.g., Social Media, Referral"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="btn btn-primary btn-lg w-full mt-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <i className="fas fa-paper-plane mr-2"></i> Submit Partnership Request
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};
export default PartnerRequestForm;