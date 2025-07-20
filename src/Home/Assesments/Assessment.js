import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import useTitle from '../../hooks/useTitle';
import useMetaDiscription from '../../hooks/useMetaDiscription';
import { Helmet } from 'react-helmet-async';

const Assessment = () => {
    useTitle('Assessment');
    useMetaDiscription("Take our free skills assessment to identify your strengths and growth areas. Get actionable insights to advance your career or business. Start now!")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Called when the form is submitted
    const onSubmit = (data) => {
        console.log(data);
        // Handle further submission logic here
    };

    // Framer Motion animation for the form container
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="min-h-screen mt-20 bg-gray-100">
            <Helmet>
                <link rel="canonical" href="https://apprent.azshakil.com/assessment" />
            </Helmet>
            {/* Header Section with background image and overlay */}
            <div className="relative h-96  w-full" style={{ backgroundImage: "url(https://ca-visa.com/wp-content/uploads/toronto-skyline.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex items-center justify-center h-full">
                    <h1 className="text-5xl font-extrabold text-white">Assessment</h1>
                </div>
            </div>
            <div className='px-28 py-16'>
                <p className='text-[#727272]'>This form is designed to collect essential information required for your travel arrangements. It includes sections that cover your personal details, travel history, immigration status, and purpose of travel. The data provided will help us gain a clear understanding of your travel needs. Please ensure that all information is accurate and complete to facilitate smooth communication from our end.</p>
            </div>
            {/* Form Container */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        {/* Travel Information Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Travel Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Choose the Country For Your Travel */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Choose the Country For Your Travel
                                    </label>
                                    <select
                                        {...register('travelCountry', {
                                            required: 'Travel country is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.travelCountry ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">Select Your Desired Country</option>
                                        <option value="USA">Canada</option>
                                        <option value="Canada">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Australia">Hungary</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    {errors.travelCountry && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.travelCountry.message}
                                        </p>
                                    )}
                                </div>

                                {/* Purpose of Your Travel */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Purpose of Your Travel
                                    </label>
                                    <select
                                        {...register('travelPurpose', {
                                            required: 'Travel purpose is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.travelPurpose ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">Select Purpose</option>
                                        <option value="USA">Study</option>
                                        <option value="Canada">Tourism</option>
                                        <option value="Australia">Bussiness</option>
                                        <option value="Australia">Immigration</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    {errors.travelPurpose && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.travelPurpose.message}
                                        </p>
                                    )}
                                </div>

                                {/* Share your travel history (if any) */}
                                <div className="md:col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Share your travel history (if any)
                                    </label>
                                    <textarea
                                        {...register('travelHistory', {
                                            required: "History is required"
                                        })}
                                        placeholder='Singapore, Malaysia, Dubai, Etc...'
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm  ${errors.travelPurpose ? 'border-red-500' : ''}`}
                                        rows={3}
                                    ></textarea>
                                    {errors.travelHistory && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.travelHistory.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Personal Information Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* First Name */}

                                {/* Your Age */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Your Age
                                    </label>
                                    <input
                                        type="number"
                                        {...register('age', {
                                            required: 'Age is required',
                                            min: { value: 1, message: 'Invalid age' },
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.age ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.age && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.age.message}
                                        </p>
                                    )}
                                </div>

                                {/* Current Country of Residence */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Current Country of Residence
                                    </label>
                                    <select
                                        {...register('residenceCountry', {
                                            required: 'Country is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.residenceCountry ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">Select Country</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UK">UK</option>
                                        <option value="Australia">Australia</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    {errors.residenceCountry && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.residenceCountry.message}
                                        </p>
                                    )}
                                </div>

                                {/* Current Immigration Status Where You Live */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Current Immigration Status Where You Live?
                                    </label>
                                    <select
                                        {...register('immigrationStatus', {
                                            required: 'Immigration status is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.immigrationStatus ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Citizen">Citizen</option>
                                        <option value="Permanent Resident">
                                            Permanent Resident
                                        </option>
                                        <option value="Visa Holder">Visa Holder</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.immigrationStatus && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.immigrationStatus.message}
                                        </p>
                                    )}
                                </div>

                                {/* Marital Status */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Marital Status
                                    </label>
                                    <select
                                        {...register('maritalStatus', {
                                            required: 'Marital status is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.maritalStatus ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="" >Select Status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </select>
                                    {errors.maritalStatus && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.maritalStatus.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register('firstName', {
                                            required: 'First name is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.firstName ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.firstName && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.firstName.message}
                                        </p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register('lastName', {
                                            required: 'Last name is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.lastName ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.lastName && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.lastName.message}
                                        </p>
                                    )}
                                </div>

                            </div>
                            <div className='gap-6'>
                                {/* Do You Have Any English Proficiency? */}
                                <div>
                                    <label className="py-6 block mb-2 text-sm font-medium text-gray-700">
                                        Do You Have Any English Proficiency?
                                    </label>
                                    <select
                                        {...register('englishProficiency', {
                                            required: 'This field is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.englishProficiency ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">Select Option</option>
                                        <option value="IELTS">IELTS</option>
                                        <option value="DUOLINGO">DUOLINGO</option>
                                        <option value="PTE">PTE</option>
                                        <option value="TOEFL">TOEFL</option>
                                        <option value="CPE">CPE</option>
                                        <option value="N/A">N/A</option>
                                    </select>
                                    {errors.englishProficiency && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.englishProficiency.message}
                                        </p>
                                    )}
                                </div>
                                {/* Your Highest Educational Background */}

                                <div className="py-6 w-full bg-white rounded-lg">
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Your Highest Educational Background
                                    </label>
                                    <div className="space-y-2 px-5 py-5 border border-gray-400">
                                        {["SSC", "HSC", "Diploma", "Bachelor's", "Master's", "MPhil", "PhD", "none"].map((level) => (
                                            <label key={level} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    value={level}
                                                    {...register("option", { required: "Please select an option" })}
                                                    className="radio bg-blue-100 border-blue-300 checked:bg-[#1E6DEB] checked:text-[#1E6DEB] checked:border-[#1E6DEB]"
                                                />
                                                {level}
                                            </label>
                                        ))}
                                    </div>
                                    {errors.option && <p className="text-red-500 text-sm mt-1">{errors.option.message}</p>}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {/* Phone Number */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('phone', {
                                            required: 'Phone number is required',
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.phone ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value:
                                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                        className={`w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm ${errors.email ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Additional Information (Optional) */}
                            <div>
                                <label className="block mb-2 mt-2 text-sm font-medium text-gray-700">
                                    Do you have anything to share? (Optional)
                                </label>
                                <textarea
                                    {...register('additionalInfo')}
                                    className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
                                    rows={3}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-52 py-6 mt-3 bg-blue-600 text-lg text-white rounded-lg hover:bg-blue-700 transition-transform duration-200 transform hover:scale-105 shadow-md"
                                >
                                    Submit Assessment
                                </button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Assessment;