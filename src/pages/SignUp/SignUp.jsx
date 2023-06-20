import Container from "../../components/Container/Container";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../components/hooks/useAuth";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaImage } from "react-icons/fa";
import { useState } from "react";


const img_token = import.meta.env.VITE_image_hosting_token;
const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signUpUser, updateUserProfile } = useAuth();
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // image
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`

    // login submit handler
    const onSubmit = data => {
        toast.loading('Loading..')

        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes.success) {
                    const imgUrl = imageRes.data.display_url;
                    console.log(imgUrl)
                    signUpUser(data.email, data.password)
                        .then(result => {
                            const signedUser = result.user;
                            console.log(signedUser)
                            // setLoading(true);
                            updateUserProfile(data.name, imgUrl)
                                .then(() => {
                                    const insertUser = { name: data.name, email: data.email, image: imageRes.data.display_url, phone: data.number, gender: data.gander, address: data.address, role: 'student' };

                                    console.log(insertUser)
                                    fetch('https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/users', {
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
                                                toast.dismiss()
                                                toast.success('Login successfully')
                                                navigate('/');
                                            }
                                        })
                                })
                                .catch(error => {
                                    console.log(error)
                                    toast.dismiss();
                                })
                        })
                        .catch(error => {
                            console.log(error);
                            toast.dismiss();
                            toast.error(error.message);
                        })
                }
            })
    };

    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Sign up</title></Helmet>
            <div className='flex justify-center items-center min-h-screen py-5 lg:py-2'>
                <div className='flex flex-col md:w-1/2'>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate='' action='' className='lg:p-5 rounded-2xl border p-5 bg-slate-100 text-gray-900 space-y-6 ng-untouched ng-pristine ng-valid' >
                        <div className="pb-10 flex flex-col items-center justify-center text-center">
                            <h3 className="text-3xl text-red-500 border-b-2 border-gray-300 pb-4">Create an <span className="text-blue-500">account</span></h3>
                        </div>
                        <div className='space-y-4'>
                            <div className=" lg:flex gap-4 w-full">
                                <div className="lg:w-1/2">
                                    <label htmlFor='name' className='font-semibold block mb-2 text-sm'>
                                        Name *
                                    </label>
                                    <input {...register("name", { required: true })} type='text' name='name' placeholder='Enter Your Name' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900 ' />
                                    <br /> {errors.name && <span className="text-red-500 mt-2 text-sm">Name field is required</span>}
                                </div>
                                <div className="lg:w-1/2 mt-4 md:mt-0">
                                    <label htmlFor='email' className='font-semibold block mb-2 text-sm'>
                                        Email address *
                                    </label>
                                    <input {...register("email", { required: true })} type='email' name='email' placeholder='Enter Your Email' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900 ' />
                                    <br /> {errors.email && <span className="text-red-500 mt-2 text-sm">Email field is required</span>}
                                </div>
                            </div>
                            <div className="lg:flex gap-4 w-full">
                                <div className="lg:w-1/2 relative">
                                    <div className='flex justify-between'>
                                        <label htmlFor='password' className='font-semibold text-sm mb-2'>
                                            Password *
                                        </label>
                                    </div>
                                    <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, minLength: 6 })} name='password' placeholder='password' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900' />
                                    <span onClick={togglePasswordVisibility} className="absolute right-4 top-1/3 text-gray-600 bg-opacity-0 text-center btn btn-sm">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                    <br /> {errors.password && <span className="text-red-500 mt-2 text-sm">password field is required</span>}
                                    <br /> {errors.password?.type === 'pattern' && <span className="text-red-500 mt-2 text-sm">Password must have one Uppercase one lower case, one number and one special character.</span>}
                                </div>
                                <div className="lg:w-1/2 relative">
                                    <div className='flex justify-between'>
                                        <label htmlFor='confirm' className='font-semibold text-sm mb-2'>
                                            Confirm Password *
                                        </label>
                                    </div>
                                    <input type={showPassword ? 'text' : 'password'} {...register("confirm", { required: true })} name='confirm' placeholder='Confirm password' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900' />
                                    <span onClick={togglePasswordVisibility} className="absolute right-4 top-1/3 text-gray-600 bg-opacity-0 text-center btn btn-sm">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                    <br /> {errors.confirm && <span className="text-red-500 mt-2 text-sm">Confirm field is required</span>}
                                </div>
                            </div>
                            <div className="lg:flex gap-4 w-full">
                                <div className="lg:w-1/2">
                                    <div className='flex justify-between'>
                                        <label htmlFor='address' className='font-semibold text-sm mb-2'>
                                            Address *
                                        </label>
                                    </div>
                                    <input {...register("address", { required: true })} type='text' name='address' placeholder='Address' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900' />
                                    <br /> {errors.address && <span className="text-red-500 mt-2 text-sm">Address field is required</span>}
                                </div>
                                <div className="lg:w-1/2 mt-4 md:mt-0">
                                    <div className='flex justify-between'>
                                        <label htmlFor='phone' className='font-semibold text-sm mb-2'>
                                            Phone Number *
                                        </label>
                                    </div>
                                    <input {...register("phone", { required: true })} type='number' name='phone' placeholder='Phone Number' className='px-3 w-full py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900' />
                                    <br /> {errors.phone && <span className="text-red-500 mt-2 text-sm">Number field is required</span>}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex flex-col items-start">
                                    <div className='flex justify-between'>
                                        <label htmlFor='photo' className='font-semibold text-sm mb-2'>
                                            Your photo *
                                        </label>
                                    </div>
                                    <label className="relative bg-blue-200 flex items-center px-4 py-2 rounded-lg border border-gray-300 cursor-pointer">
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            {...register("image", { required: true })}
                                        />
                                        <FaImage color="blue"
                                            className="text-gray-500 mr-2"
                                        />
                                        <span className="text-blue-700">
                                            {selectedFile ? selectedFile.name : 'Choose an image'}
                                        </span>
                                    </label>
                                </div>
                                <div className="lg:w-1/2 mt-4 md:mt-0">
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
                        <div>
                            <button type='submit' className='bg-blue-500 btn w-full hover:bg-blue-400 rounded-md py-3 text-white' >
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
