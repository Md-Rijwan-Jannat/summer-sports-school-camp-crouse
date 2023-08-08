import { Helmet } from "react-helmet-async";
import Container from "../../../../components/Container/Container";
import useAddClass from "../../../../components/hooks/useAddClass";
import SectionTitle from "../../../../components/Headers/SectionTitle";
import useAuth from "../../../../components/hooks/useAuth";
import NotFoundMessage from "../../../../components/NotFoundMesage/NotFoundMessage";
import StudentClassTable from "./StudentClassTable";
import { Link } from "react-router-dom/dist";


const StudentClasses = () => {
    const { user } = useAuth();
    const [addedClass] = useAddClass();
    const totalPrice = addedClass.reduce((sum, item) => item.price + sum, 0)
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | My selected Classes</title></Helmet>
            <SectionTitle title="My Added Classes" />
            {
               ! addedClass ? <div className="h-[500px] flex items-center justify-center">
                    <progress className="progress w-56"></progress>
                </div> : <>
                    {
                        !user ? <NotFoundMessage message={'Please login and select your favorite crouse'} /> : ''
                    }
                    <div className="my-16">
                        <div className="mb-10 flex items-center justify-center gap-5">
                            <h3 className="text-2xl w-1/3 bg-green-100 p-4 rounded-xl">Total Price: <span className="text-blue-600">{totalPrice}</span></h3>
                            <Link to={'/dashboard/payment'} className="btn p-4 text-white bg-blue-500 hover:bg-blue-600">Pay for classes</Link>
                        </div>

                        <div className="overflow-x-hidden lg:mx-16">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>image</th>
                                        <th>Class Name</th>
                                        <th>Instructor</th>
                                        <th>Students</th>
                                        <th>Available Seats</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        addedClass.map((cls, index) => <StudentClassTable
                                            key={cls._id}
                                            cls={cls}
                                            index={index}
                                        ></StudentClassTable>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            }
        </Container>
    );
};

export default StudentClasses;