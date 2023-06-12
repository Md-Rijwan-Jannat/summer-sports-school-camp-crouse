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
        axiosSecure.get(`/enrolled/class/${user?.email}`)
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
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;