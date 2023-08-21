import { toast } from "react-hot-toast";
import useAuth from "../../components/hooks/useAuth";
import { SiEpicgames } from "react-icons/si";
import useInstructors from "../../components/hooks/useInstructors";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../../components/hooks/useAdmin";


const Classes = ({ cls }) => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [instructors] = useInstructors();
    // console.log(user)
    const { className, instructorName, image, price, students, availableSeats, _id, instructorEmail } = cls;

    const instructor = instructors?.filter(ins => ins?.email === instructorEmail)
    console.log(instructor[0]?.image);

    const studentAddedClass = {
        studentEmail: user?.email,
        class_id: _id,
        className,
        instructorName,
        image,
        price,
        students,
        availableSeats
    };

    const addToClassHandler = () => {
        if (user && user?.email) {

            fetch("https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/student/addToClass", {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(studentAddedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Add This Class!');
                    }
                })
        }
    }
    return (
            <div  className={availableSeats === 0 ? 'bg-[#d8a6a6] rounded-lg shadow-xl shadow-blue-400 pb-5' : 'bg-blue-300 rounded-lg shadow-xl shadow-blue-400 pb-5'}>
                <img className="h-48 w-full object-cover rounded-t-lg" src={image} alt="Card Image" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-blue-600 mb-5 flex gap-2 items-center"> <span className="text-[#8A63AC]"><SiEpicgames></SiEpicgames></span> {className}</h2>
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8 rounded-full border-2 border-[#8A63AC]" src={`${instructor[0]?.image}`} alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-base font-semibold"> {instructorName}</h2>
                            <p className="text-sm text-[#2a6c99]" ><span className="text-gray-600">Price:</span>  {price}</p>
                        </div>
                    </div>

                    <div className="flex justify-between gap-2 items-center mt-4">
                        {
                            !isAdmin ? <>
                                {
                                    availableSeats === 0 ? <button disabled className="text-[10px] px-3 py-1 text-center bg-gray-500 text-white rounded-sm shadow-md hover:bg-gray-500 flex items-center gap-2">Select</button> : <>
                                        {
                                            user ? <button onClick={addToClassHandler} className="text-[10px] px-3 py-1 text-center bg-blue-400 text-white rounded-sm shadow-md hover:bg-blue-500 flex items-center gap-2">Select</button> : <button disabled className="text-[10px] px-3 py-1 text-center bg-gray-500 text-white rounded-sm shadow-md hover:bg-gray-500 flex items-center gap-2">Select</button>

                                        }
                                    </>
                                }
                            </> : <button disabled className="text-[10px] px-3 py-1 text-center bg-gray-500 text-white rounded-sm shadow-md hover:bg-gray-500 flex items-center gap-2">Select</button>
                        }

                        <div className="flex items-center">
                            <h2 className="text-sm pr-2 text-gray-600">Seats: <span className="text-red-500 font-bold">{availableSeats}</span></h2>
                            <h2 className="text-sm border-l-2 border-gray-600 pl-2 text-gray-800 flex items-center gap-1"><FaUsers color="gray" size={26} />: <span className="text-green-700 font-bold">{students}</span></h2>
                        </div>
                    </div>
                </div>
            </div >
    );
};

export default Classes;

// <th>
// {index + 1}
// </th>
// <td>
// <div className="avatar">
//     <div className="mask mask-squircle w-20 h-20">
//         <img src={image} alt="Avatar Tailwind CSS Component" />
//     </div>
// </div>
// </td>
// <td> {className}</td>
// <td>{instructorName}</td>
// <td className="text-cyan-600">{students}</td>
// <td className="text-green-600">{availableSeats}</td>
// <td className="text-cyan-600">{'$' + price}</td>

// <th>

// </th>