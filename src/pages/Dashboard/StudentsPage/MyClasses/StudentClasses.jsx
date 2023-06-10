import { Helmet } from "react-helmet-async";
import Container from "../../../../components/Container/Container";
import useAddClass from "../../../../components/hooks/useAddClass";
import SectionTitle from "../../../../components/Headers/SectionTitle";
import useAuth from "../../../../components/hooks/useAuth";
import NotFoundMessage from "../../../../components/NotFoundMesage/NotFoundMessage";
import StudentClassTable from "./StudentClassTable";


const StudentClasses = () => {
    const {user} = useAuth();
    const [addedClass,,isLoading] = useAddClass();
    console.log(addedClass)
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | All Classes</title></Helmet>
            <SectionTitle title="Our All Classes" />
            {
                isLoading ? <div className="h-[500px] flex items-center justify-center">
                    <progress className="progress w-56"></progress>
                </div> : <>
                    {
                        !user ? <NotFoundMessage message={'Please login and select your favorite crouse'} /> : ''
                    }
                    <div className="my-16">
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