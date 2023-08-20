import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";



const ManageClass = ({ cls, index, refetch }) => {
    const { className, instructorName, image, price, instructorEmail, availableSeats, status, _id } = cls;

    // class approved
    const approvedHandler = (_id) => {
        fetch(`https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/classApprove/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('This class is approved!')
                }
            })
    }


    // class approved
    const deniedHandler = (_id) => {
        fetch(`https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/classDenied/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('This class is denied!')
                }
            })
    }

    // feedback modal
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const feedbackHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const adminFeedback = { feedback ,class_id: _id};
        console.log(adminFeedback);
        axios.post('https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/feedback', adminFeedback)
            .then(data => {
                console.log(data.data);
                if(data.data.insertedId){
                    toast.success('Feedback send successfully!')
                }
            })
    }
    return (
        <>
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded-lg w-20 h-20">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td> {className}</td>
                <td>{instructorName}</td>
                <td className="text-cyan-600">{instructorEmail}</td>
                <td className="text-green-600">{availableSeats}</td>
                <td className="text-cyan-600">{'$' + price}</td>
                <td>
                    {
                        status === 'denied' ? ' ' : <>
                            {
                                status === 'approved' ? ' ' : <button className="rounded-lg px-4 py-1 low bg-cyan-300 hover:bg-cyan-300 border-0 text-white">Pending</button>
                            }
                        </>
                    }
                </td>

                <th className="flex flex-col gap-2">
                    {
                        status === 'approved' ? <button onClick={() => approvedHandler(_id)} className="btn btn-sm px-2 bg-green-600 hover:bg-green-700 border-0 text-white">Approved</button> : <>
                            {
                                status === 'denied' ? <button disabled onClick={() => approvedHandler(_id)} className="btn btn-sm px-2 bg-blue-600 hover:bg-blue-700 border-0 text-white">Approve</button> : <button onClick={() => approvedHandler(_id)} className="btn btn-sm px-2 bg-blue-600 hover:bg-blue-700 border-0 text-white">Approve</button>
                            }
                        </>
                    }
                    {
                        status === 'denied' ? <button onClick={openModal} className="btn btn-sm px-2 bg-blue-400 hover:bg-blue-700 border-0 text-white">Denied</button> : <>
                            {
                                status === 'approved' ? <button disabled className="btn btn-sm px-2 bg-red-600 hover:bg-red-500 border-0 text-white">Deny</button> : <button onClick={() => deniedHandler(_id)} className="btn btn-sm px-2 bg-red-600 hover:bg-red-700 border-0 text-white">Deny</button>
                            }
                        </>
                    }
                </th>
            </tr>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <form onSubmit={feedbackHandler} className="bg-base-100 shadow-xl w-1/2 rounded-xl p-6">
                        <h2 className="text-lg font-bold mb-4 text-blue-700">Feedback</h2>
                        <p className="mb-4">Please provide your feedback below:</p>
                        <input type="text" name="feedback" className="w-full h-16 border rounded px-3 py-2 mb-4" />

                        <div className="flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-gray-600 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                Close
                            </button>
                            <button className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default ManageClass;

// import React, { useState } from 'react';

// const FeedbackModal = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openModal = () => {
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//     };

//     return (
//         <div>
//             {/* Button to open the modal */}
//             <button
//                 onClick={openModal}
//                 className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//                 Give Feedback
//             </button>

//             {/* Modal */}
//             {isOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50">
//                     <div className="bg-white w-1/2 rounded-lg p-6">
//                         <h2 className="text-lg font-bold mb-4">Feedback</h2>
//                         <p className="mb-4">Please provide your feedback below:</p>
//                         <textarea className="w-full h-32 border border-gray-300 rounded px-3 py-2 mb-4" />

//                         <div className="flex justify-end">
//                             <button
//                                 onClick={closeModal}
//                                 className="bg-gray-600 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
//                             >
//                                 Close
//                             </button>
//                             <button
//                                 className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FeedbackModal;