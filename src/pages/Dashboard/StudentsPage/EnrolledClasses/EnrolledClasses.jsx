import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/Headers/SectionTitle";
import useEnrolledClasses from "../../../../components/hooks/useEnrolledClasses";
import useAuth from "../../../../components/hooks/useAuth";
import DataNotFount from "../../../../components/dataNotFount";


const EnrolledClasses = () => {
    const [enrolledClass] = useEnrolledClasses();
    const { user } = useAuth();
    return (
        <div className="h-full">
            <Helmet> <title>Summer School Camp | My Enrolled Classes</title></Helmet>
            <SectionTitle title={'My Enrolled Classes'} />
            <div className="w-full">
                <div className="table-responsive">
                    <table className="table w-full">
                        {/* head */}
                        {
                            enrolledClass?.length === 0 ? <>
                            <DataNotFount message={'Warning: Please buy some class'}></DataNotFount>
                            </> : <>
                                <thead>
                                    <tr className="border-[#8A63AC] border-b-[3px]">
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
                                        enrolledClass?.map(cls => <tr key={cls?._id}>
                                            <th className="border-blue-700">{"<"}</th>
                                            <th className="pl-5">
                                                <div className="md:flex gap-3">
                                                    <img className=" w-12 h-12 md:w-16 md:h-16 rounded-full" src={user?.photoURL} alt="" />
                                                    <div className="flex flex-col space-y-2">
                                                        <h4>{user?.displayName}</h4>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="rounded-lg w-16 md:w-20 h-16 md:h-20">
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
                            </>
                        }
                    </table>
                </div>
            </div>

        </div>
    );
};

export default EnrolledClasses;