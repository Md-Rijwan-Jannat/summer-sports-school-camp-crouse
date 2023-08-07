import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/Headers/SectionTitle";
import useEnrolledClasses from "../../../../components/hooks/useEnrolledClasses";
import useAuth from "../../../../components/hooks/useAuth";


const EnrolledClasses = () => {
    const [enrolledClass] = useEnrolledClasses();
    const { user } = useAuth();
    return (
        <div>
            <Helmet> <title>Summer School Camp | My Enrolled Classes</title></Helmet>
            <SectionTitle title={'My Enrolled Classes'} />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student</th>
                            <th>Class cover photo</th>
                            <th>Class name</th>
                            <th>Price</th>
                            <th>status</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            enrolledClass.map(cls => <tr key={cls?._id}>
                                <th>{"<"}</th>
                                <th className="pl-5">
                                    <div className="flex gap-3">
                                        <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
                                        <div className="flex flex-col space-y-2">
                                            <h4>{user?.displayName}</h4>
                                            <p className="text-white bg bg-red-300 p-2 rounded-lg">Lucky student</p>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded-lg w-20 h-20">
                                            <img src={cls?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{cls?.className}</td>
                                <td className="text-blue-500">$ {cls?.price}</td>
                                <td><div className="bg-green-500 text-white py-1 px-2 rounded-lg text-center">
                                    Enrolled</div>
                                </td>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;