

const AllUser = ({user, index}) => {
    const {name, image, email, role,} = user
    return (
        <tr>
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
            <td>{name}</td>
            <td className="text-cyan-600">{email}</td>
            <td className="text-green-600">{role}</td>

            <th>
                {
                    user ? <button className="btn px-2 bg-cyan-400 hover:bg-cyan-500 border-0 text-white">Select</button> :
                        <button disabled className="btn px-2 bg-cyan-400 hover:bg-cyan-500 border-0 text-white">Select</button>
                }
            </th>
        </tr>
    );
};

export default AllUser;