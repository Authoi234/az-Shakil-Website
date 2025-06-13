import React, { useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { AuthContext } from '../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import logo from "../assets/logo.png"
import { useQuery } from '@tanstack/react-query';
import useUserProfile from '../hooks/useUserProfile';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Destructure directly from AuthContext as it now has a default value
    const { signInUser, sendForgetPasswordEmail, loading, user, logOut } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
                navigate("/");
        }
    }, [user, navigate]);

    const handlePasswordShow = () => {
        setPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
    };

    const handleLogin = async (data) => {
        setLoginError('');
        console.log("Login attempt with:", data);
        try {
            console.log("trying to log in ")
            const result = await signInUser(data?.email, data?.password);
            console.log("Logged in user:", result.user);
            console.log("userLogged In")
            navigate("/");
            
        } catch (err) {
            setLoginError(err.message);
            console.error("Error during login:", err.message);
        }
        console.log("Loading state:", loading);
    };

    const handleForgetPasswordCall = () => {
        const modal = document.getElementById('resetPasswordModal');
        if (modal) {
            modal.showModal();
        }
    };

    const handleResetPassword = async (event) => {
        event.preventDefault();
        const resetPasswordEmail = event.target.resetPasswordEmail.value;
        console.log("Reset password email:", resetPasswordEmail);
        try {
            await sendForgetPasswordEmail(resetPasswordEmail);
            toast.success('We sent an email to reset your password.');
        } catch (error) {
            toast.error(`Failed to send reset email: ${error.message}`);
        } finally {
            const modal = document.getElementById('resetPasswordModal');
            if (modal) {
                modal.close();
            }
        }
    };

    return (
        <div className="font-sans min-h-screen flex items-center justify-center bg-[#f0f4f8] p-4 sm:p-0">
            {/* Main Container for Login Form and Illustration */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full">

                {/* Left Column: Login Form */}
                <motion.div
                    className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
                    data-aos="fade-up" // This will only work if AOS library is initialized
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8 text-center md:text-left">
                        {/* ApplyBoard Logo - Placeholder */}
                        <img
                            src={logo}
                            alt=''
                            className="h-10 mx-auto md:mx-0 mb-6"
                        />
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Log In</h1>

                        <p className="text-gray-600">Welcome back! Please enter your credentials.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                {...register("email", {
                                    required: 'Email Address is Required'
                                })}
                                className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 lowercase transition duration-200 ease-in-out"
                                type="email"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className='text-red-600 text-sm mt-1'>{errors.email?.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    id="password"
                                    {...register("password", {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                    })}
                                    className="input input-bordered w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                                    type={passwordType}
                                    placeholder="Enter your password"
                                />
                                <span
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700'
                                    onClick={handlePasswordShow}
                                    title="Show/Hide Password"
                                >
                                    {passwordType === 'text' ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </span>
                            </div>
                            <div className="text-right mt-2">
                                <span
                                    className="text-xs font-medium text-blue-600 hover:underline cursor-pointer"
                                    onClick={handleForgetPasswordCall}
                                >
                                    Forget Password?
                                </span>
                            </div>
                            {errors.password && <p className='text-red-600 text-sm mt-1'>{errors.password?.message}</p>}
                        </div>

                        {/* Sign In Button */}
                        <motion.button
                            type="submit"
                            className="w-full bg-[#1e6deb] text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Sign In
                        </motion.button>
                        {loginError && <div className='text-red-600 font-bold text-sm mt-4 text-center'>Error: {loginError}</div>}

                        {/* Or divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="space-y-3">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
                            >
                                <FaGoogle className='text-3xl text-[#4285F4]'></FaGoogle>
                                Log In with Google
                            </button>
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
                            >
                                <FaApple className='text-3xl text=[#1d1d1f]'></FaApple>
                                Log In with Apple
                            </button>
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
                            >
                                <FaFacebook className='text-3xl text-[#1877F2]'></FaFacebook>
                                Log In with Facebook
                            </button>
                        </div>

                        {/* Don't have an account? */}
                        <div className="text-left mt-6 text-base text-gray-600">
                            <p className="text-blue-500">
                                Privacy & Cookies Policy
                            </p>
                            <p className="text-blue-500">
                                Privacy & Cookies Policy
                            </p>
                        </div>
                    </form>
                </motion.div>

                {/* Right Column: Illustration */}
                <motion.div
                    className="hidden md:block md:w-1/2 bg-blue-50 relative overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Background shapes/clouds */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        {/* Sun */}
                        <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-400 rounded-full shadow-lg"></div>
                        {/* Clouds */}
                        <div className="absolute top-16 left-1/4 w-32 h-16 bg-white rounded-full shadow-md transform -rotate-12"></div>
                        <div className="absolute top-10 right-1/4 w-24 h-12 bg-white rounded-full shadow-md transform rotate-6"></div>
                    </div>

                    {/* Main illustration image */}
                    <img
                        src="https://ok12static.oktacdn.com/fs/bco/7/fs0a437k43QXmImKU5d7"
                        alt="Students Illustration"
                        className="w-full h-full object-cover object-left-bottom transform translate-y-1/10" // Adjust as needed
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/edf2f7/4a5568?text=Illustration"; }}
                    />
                </motion.div>
            </div>

            {/* Reset Password Modal */}
            <dialog id="resetPasswordModal" className="modal p-4">
                <div className="modal-box rounded-lg shadow-xl p-6 bg-white max-w-sm w-full mx-auto">
                    <h3 className="font-bold text-xl text-blue-600 mb-4 text-center">Send Reset Email</h3>
                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                name='resetPasswordEmail'
                                required
                                placeholder='Please Write Your Email Here'
                                className='input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition duration-200'
                            />
                        </div>
                        <div className="flex justify-center gap-4">
                            <button
                                type='submit'
                                className="btn w-full py-2 px-4 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="btn w-full py-2 px-4 rounded-md font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-300"
                                onClick={() => {
                                    const modal = document.getElementById('resetPasswordModal');
                                    if (modal) modal.close();
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;