import React, { useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { AuthContext } from '../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signInUser, sendForgetPasswordEmail, loading, user } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/admin/dashboard")
        }
    }, [user, navigate])

    const handlePasswordShow = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        }
        else {
            setPasswordType('password');
        }
    }

    const handleLogin = data => {
        setLoginError('');
        console.log(data);
        signInUser(data?.email, data?.password)
            .then((result) => {
                console.log("Logged in user:", result.user);
                navigate("/admin/dashboard");
            })
            .catch((err) => {
                setLoginError(err.message);
                console.log("Error during login:", err.message);
            });
        console.log(loading);
    }

    const handleForgetPasswordCall = () => document.getElementById('resetPasswordModal').showModal();

    const handleResetPassword = (event) => {
        event.preventDefault();
        const resetPasswordEmail = event.target.resetPasswordEmail.value;
        console.log(resetPasswordEmail);
        sendForgetPasswordEmail(resetPasswordEmail);
        toast.success('We send a email for reset your Password');
        document.getElementById('resetPasswordModal').close();
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            {/* Login Form */}
            <motion.div
                className="bg-light bg-opacity-90 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold text-[#173158] mb-6 text-center">
                    Welcome Back
                </h1>
                <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                    {/* Email Input */}

                    <div className="card w-full shrink-0 shadow-2xl">
                        <div className="card-body">
                            <label className="form-control w-full max-w-xs">
                                <div className="label"><span className="label-text font-semibold">Email</span></div>
                                <input
                                    {...register("email", {
                                        required: 'Email Address is Required'
                                    })}
                                    className="input input-bordered w-full max-w-xs lowercase bg-transparent backdrop-brightness-150 backdrop-blur-2xl" type="email" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label"><span className="label-text font-semibold">Password</span></div>
                                <div className='flex items-center'>
                                    <input
                                        {...register("password", {
                                            required: 'Password is required',
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                        className="input input-bordered w-full max-w-xs bg-transparent backdrop-brightness-150 backdrop-blur-2xl" type={passwordType} />
                                    <span className='text-2xl border p-2.5 rounded-r-lg tooltip bg-white' data-tip="Password Show/Hide" onClick={handlePasswordShow}>{passwordType === 'text' ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                                </div>
                                <div className="label"><span className="label-text text-xs font-medium cursor-pointer underline" onClick={handleForgetPasswordCall}>Forget Password?</span></div>
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            </label>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <motion.button
                        type="submit"
                        className="w-full bg-[#1E6DEB] text-white outline-none border-0 rounded-md hover:bg-opacity-90 hover:bg-[#1E6DEB] btn transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.85 }}
                        drag
                    >
                        Sign In
                    </motion.button>
                    {loginError && <div className='text-red-600 font-bold text-lg'>An Error occured that is {loginError}</div>}
                </form>
            </motion.div>
            <dialog id="resetPasswordModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-blue-500">Send Reset Email</h3>
                    <div className="modal-action">
                        <form onSubmit={handleResetPassword}>
                            <div className="text-center">
                                <input type="email" name='resetPasswordEmail' required placeholder='Please Write Your Email Here' className=' text-blue-500 input input-bordered mx-4 px-3 py-1 text-lg w-96' />
                                <input type='submit' value={'Submit'} className="btn my-2 btn-outline border border-[#173158] transition-all duration-500 hover:border-0 hover:bg-[#173158] w-96" />
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Login;