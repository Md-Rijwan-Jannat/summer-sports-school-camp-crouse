import { useState } from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { loading, setLoading } = useState(false)
    // login submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
    }

    // google handler
    const handleGoogleSignIn = () => {

    }
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Login</title></Helmet>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col md:w-1/3'>
                    <form onSubmit={handleSubmit} noValidate='' action='' className='bg-base-100 p-5 rounded-sm border sm:p-10 text-gray-900 space-y-6 ng-untouched ng-pristine ng-valid' >
                        <div>
                            <h3 className="text-3xl text-center">Login Now</h3>
                        </div>
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='font-semibold block mb-2 text-sm'>
                                    Email address *
                                </label>
                                <input type='email' name='email' required placeholder='Enter Your Email Here' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900 ' />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='font-semibold text-sm mb-2'>
                                        Password *
                                    </label>
                                </div>
                                <input type='password' name='password' required placeholder='password' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                            </div>
                        </div>

                        <div>
                            <button type='submit' className='bg-cyan-500 btn w-full hover:bg-cyan-400 rounded-md py-3 text-white' >
                                {loading ? ( <FaSpinner className='m-auto animate-spin' size={24} /> ) : ( 'Continue')}
                            </button>
                        </div>
                    </form>
                    <div className="mt-5">
                        <div onClick={handleGoogleSignIn} className='flex justify-center items-center btn btn-outline space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'   >
                            <FaGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                        <p className='px-6 text-sm text-center'>
                            Do not have an account yet? <Link to='/signUp' className='hover:underline hover:text-cyan-500 text-gray-600'   >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;