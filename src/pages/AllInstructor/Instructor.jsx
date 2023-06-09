import axios from "axios";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Instructor = ({ instructor }) => {
    const [flow, setFlow] = useState(false)
    const [feedback, setFeedback] = useState();
    const { name, email, role, image, _id } = instructor;
    console.log(feedback);

    axios.get(`http://localhost:5000/feedback_for_instructor/${_id}`)
        .then(data => {
            setFeedback(data.data);
        })


    const flowingHandler = () => {
        setFlow(!flow)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center mb-2 mb:mb-5 py:my-10">
            <img className="w-32 h-32 rounded-full" src={image} alt={name} />
            <div className="px-6 py-4 flex flex-col items-center">
                <div className="font-bold text-xl mb-2 flex items-center gap-2">{name} <span className="text-blue-600"><FaCheckCircle /></span></div>
                <button onClick={flowingHandler} className="bg-blue-500 btn btn-sm hover:bg-blue-600 text-white font-bold text-[13] mb-5 py-2 px-4 rounded">{flow ? 'Flowing' : 'Flow'} </button>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold"> Class:</span> 2
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold"> Contact:</span> {email}
                </p>
                <p className="text-red-400 text-base">
                    <span className="font-semibold text-gray-700"> Role:</span> {role}
                </p>

            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-cyan-500 bg-opacity-70 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Instructor;
