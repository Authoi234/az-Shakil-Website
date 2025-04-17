import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const PartnerRequestForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        // In a real application, you would send this data to your backend
        // to process the partnership request.
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 } },
    };

    const inputVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className="min-h-screen bg-gray-100 py-12 flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
                variants={inputVariants}
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Partnership Request</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Organization Details */}
                    <div>
                        <label htmlFor="organizationName" className="block text-gray-700 text-sm font-bold mb-2">
                            Organization Name
                        </label>
                        <input
                            type="text"
                            id="organizationName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('organizationName', { required: 'Organization Name is required' })}
                        />
                        {errors.organizationName && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.organizationName.message}</span>
                            </label>
                        )}
                    </div>

                    <div>
                        <label htmlFor="website" className="block text-gray-700 text-sm font-bold mb-2">
                            Website (Optional)
                        </label>
                        <input
                            type="url"
                            id="website"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('website')}
                        />
                    </div>

                    {/* Contact Person Details */}
                    <div>
                        <label htmlFor="contactPerson" className="block text-gray-700 text-sm font-bold mb-2">
                            Contact Person Name
                        </label>
                        <input
                            type="text"
                            id="contactPerson"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('contactPerson', { required: 'Contact Person Name is required' })}
                        />
                        {errors.contactPerson && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.contactPerson.message}</span>
                            </label>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email format',
                                },
                            })}
                        />
                        {errors.email && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.email.message}</span>
                            </label>
                        )}
                    </div>

                    <div>
                        <label htmlFor="futurePassword" className="block text-gray-700 text-sm font-bold mb-2">
                            Future Password (for your partner portal)
                        </label>
                        <input
                            type="password"
                            id="futurePassword"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('futurePassword', { required: 'Please set a future password' })}
                        />
                        {errors.futurePassword && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.futurePassword.message}</span>
                            </label>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('phoneNumber', { required: 'Phone Number is required' })}
                        />
                        {errors.phoneNumber && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.phoneNumber.message}</span>
                            </label>
                        )}
                    </div>

                    <div>
                        <label htmlFor="whatsapp" className="block text-gray-700 text-sm font-bold mb-2">
                            WhatsApp Number (Optional)
                        </label>
                        <input
                            type="tel"
                            id="whatsapp"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('whatsapp')}
                        />
                    </div>

                    {/* Partnership Details */}
                    <div>
                        <label htmlFor="organizationType" className="block text-gray-700 text-sm font-bold mb-2">
                            Type of Organization
                        </label>
                        <select
                            id="organizationType"
                            className="select select-bordered w-full"
                            {...register('organizationType', { required: 'Please select your organization type' })}
                        >
                            <option disabled value="">
                                Select Type
                            </option>
                            <option value="school">School</option>
                            <option value="university">University/College</option>
                            <option value="educationAgency">Education Agency</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.organizationType && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.organizationType.message}</span>
                            </label>
                        )}
                    </div>

                    <div>
                        <label htmlFor="studentCount" className="block text-gray-700 text-sm font-bold mb-2">
                            Approximate Number of Students Interested in Studying Abroad (per year)
                        </label>
                        <input
                            type="number"
                            id="studentCount"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('studentCount', { required: 'Please estimate the number of students', min: 0 })}
                        />
                        {errors.studentCount && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.studentCount.message}</span>
                            </label>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message / Brief Introduction
                        </label>
                        <textarea
                            id="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline textarea textarea-bordered w-full h-24"
                            {...register('message', { required: 'Please provide a brief introduction' })}
                        ></textarea>
                        {errors.message && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.message.message}</span>
                            </label>
                        )}
                    </div>

                    {/* Additional Fields (as requested) */}
                    <div>
                        <label htmlFor="primaryContactMethod" className="block text-gray-700 text-sm font-bold mb-2">
                            Preferred Primary Contact Method
                        </label>
                        <select
                            id="primaryContactMethod"
                            className="select select-bordered w-full"
                            {...register('primaryContactMethod')}
                        >
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="whatsapp">WhatsApp</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="howDidYouHear" className="block text-gray-700 text-sm font-bold mb-2">
                            How did you hear about us? (Optional)
                        </label>
                        <input
                            type="text"
                            id="howDidYouHear"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input input-bordered w-full"
                            {...register('howDidYouHear')}
                        />
                    </div>

                    <motion.button
                        type="submit"
                        className="btn btn-primary w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Submit Partnership Request
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default PartnerRequestForm;