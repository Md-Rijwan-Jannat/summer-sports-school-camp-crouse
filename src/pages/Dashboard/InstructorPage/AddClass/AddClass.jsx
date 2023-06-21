import axios from 'axios';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../components/Headers/SectionTitle';
import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2';
import useAuth from '../../../../components/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { FaImage } from 'react-icons/fa';


const img_token = import.meta.env.VITE_image_hosting_token;
const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes.success) {
                    const imgUrl = imageRes.data.display_url;
                    const { className, availableSeats, instructorEmail, instructorName, price, status } = data;
                    const priceNumber = parseFloat(price);
                    const availableSeatsNumber = parseFloat(availableSeats);
                    const classData = { className, availableSeats: availableSeatsNumber, instructorEmail, instructorName, price: priceNumber, status, image: imgUrl }
                    console.log(classData);
                    axios.post('https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/addClass', classData)
                        .then(data => {
                            console.log(data.data);
                            if (data.data.insertedId) {
                                reset()
                                toast.success('class added successfully!')
                            }
                        })
                }
            })

    }
    return (
        <div className="w-full px-10 mb-24">
            <Helmet><title>Summer Sports Camp | Add Classes</title></Helmet>
            <SectionTitle title={'Add a Class'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-100 p-5 rounded-lg border'>
                <div className='flex gap-5 my-4'>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("className", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" readOnly defaultValue={user?.displayName}
                            {...register("instructorName", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='flex gap-5 my-4'>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="email" readOnly defaultValue={user?.email}
                            {...register("instructorEmail", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="number" placeholder='Available Seats'
                            {...register("availableSeats", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex gap-5 my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Status</span>
                        </label>
                        <select defaultValue="Pick One" {...register("status", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>pending</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full my-5">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image*</span>
                    </label>
                    <label className="relative bg-blue-200 flex items-center px-4 py-2 rounded-lg border border-gray-300 cursor-pointer w-1/3">
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
                <div>
                    <input className="btn w-1/2 bg-cyan-500 hover:bg-cyan-600 text-white mt-4" type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;