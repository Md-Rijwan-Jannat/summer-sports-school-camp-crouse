import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import ClassTabile from "./ClassTabile";
import SectionTitle from "../../components/Headers/SectionTitle";
import useApprovedClass from "../../components/hooks/useApprovedClass";


const AllClasses = () => {
    const [approvedClass, isLoading] = useApprovedClass();
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | All Classes</title></Helmet>
            <SectionTitle title="Our All Classes" />
            {
                isLoading ? 'loading..' : <>
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
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        approvedClass.map((cls, index) => <ClassTabile
                                            key={cls._id}
                                            cls={cls}
                                            index={index}
                                        ></ClassTabile>)
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

export default AllClasses;