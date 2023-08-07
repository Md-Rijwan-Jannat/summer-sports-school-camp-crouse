
import { Helmet } from "react-helmet-async";
import useAuth from "../../../components/hooks/useAuth";


const StudentHome = () => {
    const { user } = useAuth();
    return (
        <>

            <Helmet><title>Summer Sports Camp | Instructor Home</title></Helmet>
            <div className="flex flex-col items-center justify-center bg-slate-50 p-10 rounded-3xl shadow-2xl pt-5 md:pt-32">
                <img className="w-32 h-32 mb-2 rounded-full border-blue-600" src={user?.photoURL} alt="" />
                <div className="flex flex-col items-center justify-center">
                    <div className="font-bold text-xl mb-2 flex items-center gap-2">{user?.displayName} </div>
                    <span className="text-blue-600"> Student</span>
                </div>
                <p className="bg-blue-50 p-5 text-[10px] rounded-xl m-5"><span className="font-bold text-gray-700 text-xl" > </span>Throughout our training sessions, I have noticed a significant improvement in your skills and overall understanding of the game.</p>
                <div className="flex items-center justify-center gap-5">
                  
                </div>
            </div>
        </>
    );
};

export default StudentHome;