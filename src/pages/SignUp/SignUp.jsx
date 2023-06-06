
import { useState } from "react";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";


const SignUp = () => {
    const { loading, setLoading } = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setLoading(true);
    };


    // login submit handler

    // google handler
    const handleGoogleSignIn = () => {

    }
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Sign up</title></Helmet>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col md:w-1/2'>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate='' action='' className='bg-base-100 p-5 rounded-sm border sm:p-10 text-gray-900 space-y-6 ng-untouched ng-pristine ng-valid' >
                        <div>
                            <h3 className="text-3xl text-center">Register</h3>
                        </div>
                        <div className='space-y-4'>
                            <div className=" flex gap-4">
                                <div>
                                    <label htmlFor='name' className='font-semibold block mb-2 text-sm'>
                                        Name *
                                    </label>
                                    <input {...register("name", { required: true })} type='text' name='name' placeholder='Enter Your Name' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900 ' />
                                    {errors.name && <span className="text-red-500 mt-2 text-sm">This field is required</span>}
                                </div>
                                <div>
                                    <label htmlFor='email' className='font-semibold block mb-2 text-sm'>
                                        Email address *
                                    </label>
                                    <input {...register("email", { required: true })} type='email' name='email' placeholder='Enter Your Email Here' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900 ' />
                                    {errors.email && <span className="text-red-500 mt-2 text-sm">This field is required</span>}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='password' className='font-semibold text-sm mb-2'>
                                            Password *
                                        </label>
                                    </div>
                                    <input {...register("password", { required: true })} type='password' name='password' placeholder='password' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                    {errors.password && <span className="text-red-500 mt-2 text-sm">This field is required</span>}
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='confirm' className='font-semibold text-sm mb-2'>
                                            Confirm Password *
                                        </label>
                                    </div>
                                    <input {...register("confirm", { required: true })} type='password' name='confirm' placeholder='Confirm password' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                    {errors.confirm && <span className="text-red-500 mt-2 text-sm">This field is required</span>}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='photo' className='font-semibold text-sm mb-2'>
                                            Photo URL *
                                        </label>
                                    </div>
                                    <input {...register("photo", { required: true })} type='url' name='photo' placeholder='Photo URL' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                    {errors.photo && <span className="text-red-500 mt-2 text-sm">This field is required</span>}
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='Gender' className='font-semibold text-sm mb-2'>
                                            Phone Number *
                                        </label>
                                    </div>
                                    <input {...register("phone")} type='number' name='phone' placeholder='Phone Number' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='Gender' className='font-semibold text-sm mb-2'>
                                            Address *
                                        </label>
                                    </div>
                                    <input {...register("address")} type='text' name='address' placeholder='Address' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='Gender' className='font-semibold text-sm mb-2'>
                                            Gender *
                                        </label>
                                    </div>
                                    <select {...register("gender")}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type='submit' className='bg-cyan-500 btn w-full hover:bg-cyan-400 rounded-md py-3 text-white' >
                                {loading ? (<FaSpinner className='m-auto animate-spin' size={24} />) : ('Continue')}
                            </button>
                        </div>
                    </form>
                    <div className="mt-5">
                        <div onClick={handleGoogleSignIn} className='flex justify-center items-center btn space-x-2 border m-3 p-2 border-cyan-300 hover:bg-cyan-500 border-rounded cursor-pointer'   >
                            <FaGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                        <p className='px-6 text-sm text-center'>
                            Do not have an account yet? <Link to='/login' className='hover:underline hover:text-blue-500 text-gray-600'   >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SignUp;