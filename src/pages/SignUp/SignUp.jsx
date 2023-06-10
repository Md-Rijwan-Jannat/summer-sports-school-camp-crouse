import Container from "../../components/Container/Container";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../components/hooks/useAuth";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signUpUser, updateUserProfile } = useAuth();
    const navigate = useNavigate()

    // login submit handler
    const onSubmit = data => {
        console.log(data)
        signUpUser(data.email, data.password)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser)
                // setLoading(true);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const insertUser = { name: data.name, email: data.email, image: data.photo, phone: data.number, gender: data.gander, address: data.address };

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(insertUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    toast.success('Login successfully')
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
                // setLoading(false);
                toast.error(error.message);
            })
    };


    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Sign up</title></Helmet>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col md:w-1/2'>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate='' action='' className='bg-base-100 p-5 rounded-2xl border sm:p-10 text-gray-900 space-y-6 ng-untouched ng-pristine ng-valid' >
                        <div>
                            <h3 className="text-3xl text-center">Register</h3>
                        </div>
                        <div className='space-y-4'>
                            <div className=" flex gap-4 w-full">
                                <div className="w-1/2">
                                    <label htmlFor='name' className='font-semibold block mb-2 text-sm'>
                                        Name *
                                    </label>
                                    <input {...register("name", { required: true })} type='text' name='name' placeholder='Enter Your Name' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900 ' />
                                    <br /> {errors.name && <span className="text-red-500 mt-2 text-sm">Name field is required</span>}
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor='email' className='font-semibold block mb-2 text-sm'>
                                        Email address *
                                    </label>
                                    <input {...register("email", { required: true })} type='email' name='email' placeholder='Enter Your Email Here' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900 ' />
                                    <br /> {errors.email && <span className="text-red-500 mt-2 text-sm">Email field is required</span>}
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div className="w-1/2">
                                    <div className='flex justify-between'>
                                        <label htmlFor='photo' className='font-semibold text-sm mb-2'>
                                            Photo URL *
                                        </label>
                                    </div>
                                    <input {...register("photo", { required: true })} type='url' name='photo' placeholder='Photo URL' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                    <br /> {errors.photo && <span className="text-red-500 mt-2 text-sm">Photo field is required</span>}
                                </div>
                                <div className="w-1/2">
                                    <div className='flex justify-between'>
                                        <label htmlFor='phone' className='font-semibold text-sm mb-2'>
                                            Phone Number *
                                        </label>
                                    </div>
                                    <input {...register("phone", { required: true })} type='number' name='phone' placeholder='Phone Number' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                    <br /> {errors.phone && <span className="text-red-500 mt-2 text-sm">Number field is required</span>}
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div className="w-1/2">
                                    <div className='flex justify-between'>
                                        <label htmlFor='address' className='font-semibold text-sm mb-2'>
                                            Address *
                                        </label>
                                    </div>
                                    <input {...register("address", { required: true })} type='text' name='address' placeholder='Address' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                    <br /> {errors.address && <span className="text-red-500 mt-2 text-sm">Address field is required</span>}
                                </div>
                                <div className="w-1/2">
                                    <div className='flex justify-between'>
                                        <label htmlFor='Gender' className='font-semibold text-sm mb-2'>
                                            Gender *
                                        </label>
                                    </div>
                                    <select {...register("gander")}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full">
                            <div className="w-1/2">
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='font-semibold text-sm mb-2'>
                                        Password *
                                    </label>
                                </div>
                                <input {...register("password", { required: true, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, minLength: 6 })} type="password" name='password' placeholder='password' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                <br /> {errors.password && <span className="text-red-500 mt-2 text-sm">password field is required</span>}
                                <br /> {errors.password?.type === 'pattern' && <span className="text-red-500 mt-2 text-sm">Password must have one Uppercase one lower case, one number and one special character.</span>}
                            </div>
                            <div className="w-1/2">
                                <div className='flex justify-between'>
                                    <label htmlFor='confirm' className='font-semibold text-sm mb-2'>
                                        Confirm Password *
                                    </label>
                                </div>
                                <input {...register("confirm", { required: true })} type='password' name='confirm' placeholder='Confirm password' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                                <br /> {errors.confirm && <span className="text-red-500 mt-2 text-sm">Confirm field is required</span>}
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='bg-cyan-500 btn w-full hover:bg-cyan-400 rounded-md py-3 text-white' >
                                Continue
                            </button>
                        </div>
                        <p className="text-center">You have an account? Please <Link to='/login' className="text-blue-600">Login</Link></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </Container>
    );
};

export default SignUp;