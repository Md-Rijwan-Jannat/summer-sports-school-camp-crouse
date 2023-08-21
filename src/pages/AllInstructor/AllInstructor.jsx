
import Instructor from "./Instructor";
import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/Headers/SectionTitle";
import useInstructors from "../../components/hooks/useInstructors";
import { CircularProgress } from "@mui/material";


const AllInstructor = () => {
    const [instructors, , isLoading] = useInstructors();
    const roleInstructor = instructors.filter(item => item.role == 'instructor');
    console.log(roleInstructor)

    return (
        <Container>
            <div className="pt-[150px]">
                <Helmet><title>Summer Sports Camp | Home</title></Helmet>
                <SectionTitle title="Our All Instructor" />
                {
                    isLoading ? <> <div className="flex justify-center my-20"><CircularProgress></CircularProgress></div></> : <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-10">
                            {
                                roleInstructor.map(instructor => <Instructor
                                    key={instructor._id}
                                    instructor={instructor}
                                    role={instructor.role}
                                ></Instructor>)
                            }
                        </div>
                    </>
                }
            </div>
        </Container>
    );
};

export default AllInstructor;