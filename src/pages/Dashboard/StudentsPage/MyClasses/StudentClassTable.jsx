import { FaTrash } from "react-icons/fa";
import useAddClass from "../../../../components/hooks/useAddClass";
import NotFoundMessage from "../../../../components/NotFoundMesage/NotFoundMessage";
import Swal from "sweetalert2";


const StudentClassTable = ({ cls, index, }) => {
    const { image, className, instructorName, newStudent, newAvailableSeats, price, _id } = cls;
    const [addedClass, refetch] = useAddClass();

    const deleteHandler = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-sports-scholl-camp-server.vercel.app/addedClass/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <>
            {
                addedClass.length == 0 ? <NotFoundMessage message={"added a new class"} /> : <>
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
                        <td>{className}</td>
                        <td>{instructorName}</td>
                        <td className="text-green-600">{newStudent}</td>
                        <td className="text-red-600">{newAvailableSeats}</td>
                        <td className="text-blue-600">{"$"+ price}</td>
                        <th> <button onClick={() => deleteHandler(_id)} className="btn px-2 bg-red-500 hover:bg-red-600 border-0 text-white">remove<FaTrash size={20} /></button>
                        </th>
                    </tr>
                </>
            }

        </>
    );
};

export default StudentClassTable;