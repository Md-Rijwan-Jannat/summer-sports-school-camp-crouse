import { toast } from "react-hot-toast";
import useAuth from "../../components/hooks/useAuth";


const ClassTabile = ({ cls, index }) => {
    const { user } = useAuth();
    // console.log(user)
    const { className, instructorName, image, price, students, availableSeats, _id } = cls;

    const studentAddedClass = { studentEmail: user?.email, class_id: _id, className, instructorName, image, price, students, availableSeats };
    console.log(studentAddedClass)

    const addToClassHandler = () => {
        if (user && user?.email) {

            fetch("http://localhost:5000/student/addToClass", {
                method: 'POST',
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
        <>
            <tr className={availableSeats === 0 && 'bg-red-50'} >
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td> {className}</td>
                <td>{instructorName}</td>
                <td className="text-cyan-600">{students}</td>
                <td className="text-green-600">{availableSeats}</td>
                <td className="text-cyan-600">{'$' + price}</td>

                <th>
                    {
                        availableSeats === 0 ? <button disabled className="btn px-2 bg-cyan-400 hover:bg-cyan-500 border-0 text-white">Select</button> : <>
                            {
                                user ? <button onClick={addToClassHandler} className="btn px-2 bg-cyan-400 hover:bg-cyan-500 border-0 text-white">Select</button> :
                                    <button disabled className="btn px-2 bg-cyan-400 hover:bg-cyan-500 border-0 text-white">Select</button>
                            }
                        </>
                    }
                </th>
            </tr>
        </>
    );
};

export default ClassTabile;