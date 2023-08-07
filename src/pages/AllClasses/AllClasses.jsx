import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import ClassTabile from "./ClassTabile";
import SectionTitle from "../../components/Headers/SectionTitle";
import useApprovedClass from "../../components/hooks/useApprovedClass";
import useAuth from "../../components/hooks/useAuth";
import NotFoundMessage from "../../components/NotFoundMesage/NotFoundMessage";
import { CircularProgress } from "@mui/material";


const AllClasses = () => {
    const { user } = useAuth();
    const [approvedClass, isLoading] = useApprovedClass();
    console.log(approvedClass)
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | All Classes</title></Helmet>
            <SectionTitle title="Our All Classes" />
            {
                isLoading ? <> <div className="flex justify-center my-20"><CircularProgress></CircularProgress></div></> : <>
                    {
                        !user ? <NotFoundMessage message={'Please login and select your favorite crouse'} /> : ''
                    }
                    <div className="py-16 bg-slate-50 bg-opacity-90">
                        <div className="overflow-x-auto lg:mx-16">
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