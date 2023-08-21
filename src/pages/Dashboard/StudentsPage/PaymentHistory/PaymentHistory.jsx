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
            <div className="w-full">
            <div className="table-responsive">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr className="border-[#8A63AC] border-b-[3px]">
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
                                className=" border-blue-500"
                            >
                                <th  className="">{index + 1}</th>
                                <td>{info.user}</td>
                                <td>{info.quantity} Item</td>
                                <td>$ {info.price}</td>
                                <td>{info.date}</td>
                                <td>
                                    <div className="px-2 bg-green-600  rounded-lg w-full md:w-1/2 text-sm text-gray-600">
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
        </div>
    );
};

export default PaymentHistory;