import { useEffect } from "react";
import useAuth from "../../../../components/hooks/useAuth";
import useAxiosSecure from "../../../../components/hooks/useAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/Headers/SectionTitle";


const EnrolledClasses = () => {
    const [enrolledClass, setEnrolledClass] = useState([])
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    console.log(enrolledClass)

    useEffect(() => {
        axiosSecure.get(`/enrolled/${user?.email}`)
            .then(res => {
                setEnrolledClass(res.data)
            })
    }, [user, axiosSecure])
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
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClass.map(cls=>  <tr key={cls?._id}>
                                <th>{"<"}</th>
                                <td>{cls?.image}</td>
                                <td>{cls?.name}</td>
                                <td>$ {cls?.price}</td>
                                <td><div className="bg-green-50 px-2 rounded-lg">
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