import React, { Suspense } from "react";
const Instructor = React.lazy(() => import('./Instructor'))
import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/Headers/SectionTitle";
import { CircularProgress } from "@mui/material";
import useInstructors from "../../components/hooks/useInstructors";


const AllInstructor = () => {
    const [instructors] = useInstructors();
    return (
        <Container>
            <div className="pt-[150px] bg-[#77b6fd] allClass2 pb-10 mb-5">
                <Helmet><title>Summer Sports Camp | Home</title></Helmet>
                <SectionTitle title="Our All Instructor" />

                {
                    instructors?.length == 0 ? <>
                        <div className="flex justify-center my-20"><CircularProgress></CircularProgress></div>
                    </> : <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-10">
                            {
                                instructors.map(instructor => <>
                                    <Suspense fallback={<div className="flex justify-center pb-20"><CircularProgress></CircularProgress></div>}>
                                        <Instructor
                                            key={instructor._id}
                                            instructor={instructor}
                                            role={instructor.role}
                                        ></Instructor>
                                    </Suspense>
                                </>)
                            }
                        </div>
                    </>
                }
            </div>
        </Container>
    );
};

export default AllInstructor;