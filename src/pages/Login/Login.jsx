import { useState } from "react";
import Container from "../../components/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useAuth from "../../components/hooks/useAuth";
import { toast } from "react-hot-toast";


const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // login submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        toast.loading('Loading...')
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                if (loggedUser) {
                    toast.dismiss()
                    toast.success('successfully login')
                    navigate('/')
                }
            })
            .catch(error => console.log(error));
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
                                <div className="flex items-center relative">
                                    <input  type={showPassword ? 'text' : 'password'} name='password' required placeholder='password' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                    <span onClick={togglePasswordVisibility}className="absolute right-4 text-gray-600 bg-opacity-0 text-center btn btn-sm">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type='submit' className='bg-cyan-500 btn w-full hover:bg-cyan-400 rounded-md py-3 text-white' >
                                Continue
                            </button>
                        </div>
                    </form>
                    <div className="mt-5">
                        <p className='px-6 mb-5 text-gray-700 text-sm text-center'>
                            Do not have an account yet? <Link to='/signUp' className=' text-blue-700'   >
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

