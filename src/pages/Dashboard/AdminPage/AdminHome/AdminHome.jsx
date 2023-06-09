import { FaCheckCircle, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../components/hooks/useAuth";


const AdminHome = () => {
    const { user } = useAuth();
    const [flow, setFlow] = useState(false)
    const flowingHandler = () => {
        setFlow(!flow)
    }
    return (
        <>

            <Helmet><title>Summer Sports Camp | Admin Home</title></Helmet>
            <div className="flex flex-col items-center justify-center bg-slate-50 p-10 rounded-3xl shadow-2xl mt-5 md:mt-32">
                <img className="w-32 h-32 mb-2 rounded-full border-blue-600" src={user?.photoURL} alt="" />
                <div className="flex flex-col items-center justify-center mb-10">
                    <div className="font-bold text-xl mb-2 flex items-center gap-2">{user?.displayName} <span className="text-blue-600"><FaCheckCircle /></span></div>
                    <button onClick={flowingHandler} className="bg-blue-500 btn btn-sm hover:bg-blue-600 text-white font-bold text-[13] mb-5 py-2 px-4 rounded">{flow ? 'Flowing' : 'Flow'} </button>
                </div>
                <p className="bg-blue-50 p-5 rounded-xl m-5"><span className="font-bold text-gray-700" >Des:</span>Throughout our training sessions, I have noticed a significant improvement in your skills and overall understanding of the game. Your dedication to learning and implementing the techniques and strategies we discussed has been commendable, and it reflects in your performance on the field.</p>
                <div className="flex items-center justify-center gap-5">
                    <FaYoutube size={25} />
                    <FaFacebook  size={25}/>
                    <FaTwitter size={25} />
                    <FaInstagram  size={25}/>
                </div>
            </div>
        </>
    );
};

export default AdminHome;