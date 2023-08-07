import axios from "axios";
import { useState } from "react";
import NotFoundMessage from "../../../../components/NotFoundMesage/NotFoundMessage";


const MyClass = ({ cls, myClasses }) => {
    const [feedback, setFeedback] = useState([])
    const { className, instructorName, image, price, status, students, availableSeats, _id } = cls;
    console.log(cls)
    // feedback
    axios.get(`https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/feedback_for_instructor/${_id}`)
        .then(data => {
            setFeedback(data.data[0])
        })
    return (
        <>
            {
                !myClasses.length == 0 ? <>
                    <div className="bg-white rounded-lg shadow-lg">
                        <img className="h-48 w-full object-cover rounded-t-lg" src={image} alt="Card Image" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-5">{className}</h2>
                            <h2>Instructor: {instructorName}</h2>
                            <h2 className="text-sm text-gray-800">Students: <span className="text-blue-500">{students && students}</span></h2>
                            <h2 className="text-sm text-gray-800">Available Seats: <span className="text-blue-500">{availableSeats}</span></h2>
                            <p className="text-sm text-gray-800">Price: <span className="text-red-500">{price}</span></p>
                            <a href="#" className="inline-block mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600">{status}</a>
                        </div>
                        {
                            feedback?.feedback ? <div className="bg-red-50 p-2 rounded-xl m-3">
                                <p className="text-blue-600 font-bold">Admin Feedback: <span className="font-normal text-black">{feedback?.feedback}</span></p>
                            </div> : ''
                        }
                    </div >
                </> : <NotFoundMessage message={'Add your won classes'} />
            }
        </>
    );
};

export default MyClass;