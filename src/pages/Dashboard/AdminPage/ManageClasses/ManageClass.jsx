import { toast } from "react-hot-toast";



const ManageClass = ({ cls, index, refetch }) => {
    const { className, instructorName, image, price, instructorEmail, availableSeats, status, _id } = cls;

    // class approved
    const approvedHandler = (_id) => {
        fetch(`http://localhost:5000/classApprove/${_id}`, {
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
        fetch(`http://localhost:5000/classDenied/${_id}`, {
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
    return (
        <tr className={availableSeats === 0 && 'bg-red-50'} >
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
                    status === 'denied' ? <button disabled onClick={() => approvedHandler(_id)} className="btn btn-sm px-2 bg-blue-400 hover:bg-blue-500 border-0 text-white">Approve</button> : <button onClick={() => approvedHandler(_id)} className="btn btn-sm px-2 bg-blue-400 hover:bg-blue-500 border-0 text-white">Approve</button>
                }
                {
                    status === 'approved' ? <button disabled className="btn btn-sm px-2 bg-red-400 hover:bg-red-500 border-0 text-white">Denied</button> : <button onClick={() => deniedHandler(_id)} className="btn btn-sm px-2 bg-red-400 hover:bg-red-500 border-0 text-white">Denied</button>
                }
            </th>
        </tr>
    );
};

export default ManageClass;