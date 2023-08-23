
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SectionTitle from '../../../components/Headers/SectionTitle';
import { useState } from 'react';
import useAuth from '../../../components/hooks/useAuth';
import { toast } from 'react-hot-toast';
import useFeedback from '../../../components/hooks/useFeedback';


const UserReviews = () => {
    const [feedbackAdd, setFeedbackAdd] = useState("");
    const [newFeedbackAdded, refetch] = useFeedback();
    const { user } = useAuth();
    console.log(newFeedbackAdded)

    const newFeedback = { name: user?.displayName, image: user?.photoURL, feedback: feedbackAdd }

    const handlerFeedback = () => {
        toast.loading()
        fetch('https://summer-sports-scholl-camp-server.vercel.app/userFeedback', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newFeedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    refetch();
                    setFeedbackAdd(' ')
                    toast.dismiss()
                    toast.success('successfully Added!')

                }
            });
    }

    return (
        <div>
            <SectionTitle title={'User Feeedback'}></SectionTitle>
            <div className=" max-w-3xl mx-auto mb-10 ">
                <Swiper className='shadow-lg shadow-blue-400 rounded-md' autoplay spaceBetween={16} slidesPerView={1}>
                    {
                        newFeedbackAdded?.map(item => <SwiperSlide key={item._id}>
                            <div className="bg-blue-300 h-full rounded-lg p-6 flex flex-col items-center justify-center">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={item?.image}
                                        alt={item?.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{item?.feedback}</p>
                                <p className="text-[#8863AC] text-sm">{item?.description}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
                {
                    user?.email ? <>
                        <div className='flex items-center p-5'>
                            <label className='input-group' htmlFor="">
                                <input
                                    className='input input-bordered bg-opacity-50 w-full bg-[#8863AC] border-0 text-gray-600'
                                    type="text"
                                    placeholder='Send your feedback'
                                    value={feedbackAdd}
                                    onChange={(e) => setFeedbackAdd(e.target.value)}
                                />
                                <button
                                    onClick={handlerFeedback}
                                    className='bg-blue-400 hover:bg-blue-500 rounded-r-md p-2 text-white'
                                >
                                    Send
                                </button>
                            </label>
                        </div>
                    </> : ''
                }
            </div>
        </div>
    );
};

export default UserReviews;

