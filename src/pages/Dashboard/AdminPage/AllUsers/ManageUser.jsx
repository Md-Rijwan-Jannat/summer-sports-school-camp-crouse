
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = ({ user, index, refetch }) => {
    const { name, image, email, role, _id } = user;

    // make admin handler
    const makeAdmin = (_id) => {
        fetch(`https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/user/admin/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('You are now admin!')
                }
            })
    }

    // make admin handler
    const makeInstructor = (_id) => {
        fetch(`https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/user/instructor/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    toast.success('You are now Instructor!')
                }
            })
    }


    //  deleteHandler
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
                fetch(`https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/users/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your user has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }
    return (
        <tr className="border-blue-700">
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
            <td>{name}</td>
            <td className="text-cyan-600">{email}</td>
            <td className="text-green-700">{role}</td>
            <td>
                {
                    role === 'instructor' ? <button disabled className="btn btn-sm text-sm lowercase h-[40px] font-semibold px-2 bg-cyan-500 hover:bg-cyan-600 border-0 text-white">Make Instructor</button> : <button
                        onClick={() => makeInstructor(_id)} className="btn btn-sm text-sm lowercase h-[40px] font-semibold px-2 bg-cyan-500 hover:bg-cyan-600 border-0 text-white">Make Instructor</button>
                }
            </td>
            <td >
                <button onClick={() => makeAdmin(_id)} className="btn btn-sm h-[40px] text-sm lowercase font-semibold px-2 bg-blue-500 hover:bg-blue-600 border-0 text-white">Make Admin</button>
            </td>
            <th> <button onClick={() => deleteHandler(_id)} className="btn px-2 bg-red-500 hover:bg-red-600 border-0 text-white"><FaTrash size={20} /></button>
            </th>
        </tr>
    );
};

export default ManageUser;