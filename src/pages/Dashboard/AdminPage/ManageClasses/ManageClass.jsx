


const ManageClass = ({ cls, index }) => {
    const { className, instructorName, image, price, instructorEmail, availableSeats } = cls;

    // 
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

            <th className="flex flex-col gap-2">
                <button className="rounded-lg px-4 py-1 low bg-cyan-300 hover:bg-cyan-300 border-0 text-white">Pending</button>
                <button className="btn btn-sm px-2 bg-blue-400 hover:bg-blue-500 border-0 text-white">Approve</button>
                <button className="btn btn-sm px-2 bg-red-400 hover:bg-red-500 border-0 text-white">Denied</button>
            </th>
        </tr>
    );
};

export default ManageClass;