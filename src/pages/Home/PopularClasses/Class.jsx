import { FaUsers } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import { MdArrowOutward } from "react-icons/md";
import useInstructors from "../../../components/hooks/useInstructors";
import { SiEpicgames } from "react-icons/si";


const Class = ({ cls }) => {
    const { className, instructorName, image, price, students, availableSeats, instructorEmail } = cls;
    const [instructors] = useInstructors();
    const instructor = instructors?.filter(ins => ins?.email === instructorEmail)
    console.log(instructor[0]?.image);
    return (
        <div className="bg-blue-300 rounded-lg shadow-lg shadow-blue-400 pb-5">
            <img className="h-48 w-full object-cover rounded-t-lg" src={image} alt="Card Image" />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-5 flex gap-2 items-center"> <span className="text-[#8A63AC]"><SiEpicgames></SiEpicgames></span> {className}</h2>
                <div className="flex gap-2 items-center">
                    <img className="w-8 h-8 rounded-full border-2 border-[#8A63AC]" src={`${instructor[0]?.image}`} alt="" />
                   <div className="flex flex-col items-start">
                   <h2 className="text-base font-semibold"> {instructorName}</h2>
                    <p className="text-sm text-[#2a6c99]" ><span className="text-gray-600">Price: </span>  {'$'+price}</p>
                   </div>
                </div>
                
                <div className="flex justify-between gap-2 items-center mt-4">
                    <PrimaryButton to={'allClasses'} text={'More'} icon={<MdArrowOutward></MdArrowOutward>}></PrimaryButton>
                    <div className="flex items-center">
                        <h2 className="text-sm pr-2 text-gray-600">Seats: <span className="text-red-500 font-bold">{availableSeats}</span></h2>
                    <h2 className="text-sm border-l-2 border-gray-600 pl-2 text-gray-800 flex items-center gap-1"><FaUsers color="gray" size={26} />: <span className="text-green-700 font-bold">{students}</span></h2>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Class;