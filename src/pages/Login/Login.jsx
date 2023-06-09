import { useState } from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { FaSpinner, FaEyeSlash, FaEye } from "react-icons/fa";


const Login = () => {
    const { loading, setLoading } = useState(false);
    const { showPass, setShowPass } = useState(true);

    // login submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
    }
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Login</title></Helmet>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col md:w-1/3'>
                    <form onSubmit={handleSubmit} noValidate='' action='' className='bg-base-100 p-5 rounded-2xl border sm:p-10 text-gray-900 space-y-6 ng-untouched ng-pristine ng-valid' >
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
                                <div className="flex items-center">
                                    <input type={showPass ? 'text' : 'password'} name='password' required placeholder='password' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                    <span onClick={() => setShowPass(!showPass)} className="text-gray-600 text-center btn btn-sm">{showPass ? <FaEyeSlash /> : <FaEye />}</span>
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
                        <p className='px-6 mb-5 text-sm text-center'>
                            Do not have an account yet? <Link to='/signUp' className=' hover:text-blue-500 text-gray-600'   >
                                Sign up
                            </Link>
                        </p>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;