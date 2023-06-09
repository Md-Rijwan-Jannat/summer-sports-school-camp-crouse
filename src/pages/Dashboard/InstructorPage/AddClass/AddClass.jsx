import axios from 'axios';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../components/Headers/SectionTitle';
import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2';
import useAuth from '../../../../components/hooks/useAuth';
import { toast } from 'react-hot-toast';


const img_token = import.meta.env.VITE_image_hosting_token;
const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
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
                    const classData = { className, availableSeats, instructorEmail, instructorName, price, status, image: imgUrl }
                    console.log(classData);
                    axios.post('http://localhost:5000/addClass', classData)
                        .then(data => {
                            console.log(data.data);
                            if (data.data.insertedId){
                                reset()
                                toast.success('class added successfully!')
                            }
                        })
                }
            })

    }
    return (
        <div className="w-full px-10 mb-24">
            <Helmet><title>Summer Sports Camp | All Users</title></Helmet>
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
                            <span className="label-text">Status</span>
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
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input w-1/3 file-input-bordered bg-red-400 " />
                </div>
                <div>
                    <input className="btn w-1/2 bg-cyan-500 hover:bg-cyan-600 text-white mt-4" type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;