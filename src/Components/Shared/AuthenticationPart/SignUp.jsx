import { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    let pwd = watch("password");
    const { createUser, GoogleLogin, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const GoogleHandler = () => {
        GoogleLogin()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, image: loggedInUser.photoURL }
                fetch('https://server-mstlelanakhatun.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Login successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true });
                    })
            })
    }


    const onSubmit = data => {
        if (data.password !== data.confirmPass) {
            return
        }
        else if (data.password.length < 6) {
            return
        }

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, image: data.PhotoURL }
                        fetch('https://server-mstlelanakhatun.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
            })

    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="flex items-center justify-center md:min-h-screen bg-[#fcfcfc]">
            <div className="container mb-10 mt-10 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                <div data-aos="fade-right" className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">Sign Up</h1>
                    <p className="text-gray-500">Create a new account</p>
                </div>
                <div className="m-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                        <div data-aos="fade-left" className="mb-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div data-aos="fade-right" className="mb-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div data-aos="fade-left" className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            </div>
                            <div className="relative">
                                <input type={showPass ? 'text' : 'password'} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 18,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                })} name="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                <p className='absolute bottom-3 right-3 cursor-pointer' onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEyeSlash /> : <FaEye />
                                    }
                                </p>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 18 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one number and one special character.</p>}
                        </div>
                        <div data-aos="fade-right" className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            </div>
                            <div className="relative">
                                <input type={showConfirmPass ? 'text' : 'password'} {...register("confirmPass", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 18,
                                    pattern: /(?=.*[0-9])/,
                                    validate: value => value === pwd || "The passwords do not match"

                                })} name="confirmPass" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                <p className='absolute bottom-3 right-3 cursor-pointer' onClick={() => setShowConfirmPass(!showConfirmPass)}>
                                    {
                                        showConfirmPass ? <FaEyeSlash /> : <FaEye />
                                    }
                                </p>
                            </div>
                            {errors.confirmPass?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.confirmPass?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.confirmPass?.type === 'maxLength' && <p className="text-red-600">Password must be less than 18 characters</p>}
                            {errors.confirmPass?.type === 'pattern' && <p className="text-red-600">Password must have one number character.</p>}
                            {errors.confirmPass && <p className="text-red-600">{errors.confirmPass.message}</p>}
                        </div>
                        <div data-aos="fade-left" className="mb-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Photo URL</label>
                            <input type="text" {...register("PhotoURL", { required: true })} name="PhotoURL" placeholder="Your Photo URL" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            {errors.PhotoURL && <span className="text-red-600">PhotoURL is required</span>}
                        </div>

                        <div data-aos="fade-right" className="mb-6">
                            <button type="submit" className="w-full px-3 py-4 text-white bg-blue-600 rounded-md hover:bg-blue-700  focus:outline-none duration-100 ease-in-out">Sign up</button>
                        </div>
                        <p data-aos="fade-left" className="text-sm text-center text-gray-400">
                            Already have an account?
                            <Link to='/login'> <button className="font-semibold text-blue-600 focus:text-blue-600 focus:outline-none focus:underline">Sign in</button></Link>
                        </p>
                    </form>
                    <div data-aos="fade-left" className="flex flex-row justify-center mb-8">
                        <span className="absolute bg-white px-4 text-gray-500">or sign-up with</span>
                        <div className="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>
                    <div data-aos="fade-right" className="flex justify-center ">
                        <button onClick={GoogleHandler} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-10 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;