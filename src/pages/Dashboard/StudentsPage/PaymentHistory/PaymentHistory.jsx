import { useState } from "react";
import useAxiosSecure from "../../../../components/hooks/useAxiosSecure";
import useAuth from "../../../../components/hooks/useAuth";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/Headers/SectionTitle";


const PaymentHistory = () => {

    const [paymentInfo, setPaymentInfo] = useState([])
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    console.log(paymentInfo)

    useEffect(() => {
        axiosSecure.get(`/paymentInfo/${user?.email}`)
            .then(res => {
                setPaymentInfo(res.data)
            })
    }, [user, axiosSecure])
    return (
        <div>
            <Helmet> <title>Summer School Camp | Payment History</title></Helmet>
            <SectionTitle title={'Payment History'} />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>No:</th>
                            <th>Student Name</th>
                            <th>Total Enrolled</th>
                            <th>Total Coast</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentInfo.map((info, index) => <tr
                                key={info._id}
                                className="bg-blue-100 text-blue-500"
                            >
                                <th  className="text-black">{index + 1}</th>
                                <td>{info.user}</td>
                                <td>{info.quantity} Item</td>
                                <td>$ {info.price}</td>
                                <td>{info.date}</td>
                                <td>
                                    <div className="bg-green-400 px-2 rounded-lg w-1/2 text-sm text-gray-600">
                                        {info.status}
                                    </div>
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

export default PaymentHistory;