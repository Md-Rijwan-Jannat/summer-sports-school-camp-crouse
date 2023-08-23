import SectionTitle from "../../../components/Headers/SectionTitle";
import React, { Suspense, useEffect, useState } from "react";
const PopularInstructor = React.lazy(() => import('./PopularInstructor'))
import { CircularProgress } from "@mui/material";
import useInstructor from "../../../components/hooks/useInstructor";
import useAdmin from "../../../components/hooks/useAdmin";



const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    const [isInstructor ] = useInstructor();
    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    console.log(isInstructor)

    useEffect(() => {
        fetch('https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/users/popular/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className="bg-[#77b6fd] allClass2 mt-5 pb-10">
            <SectionTitle title="Our Best Instructor"></SectionTitle>
            {
                instructors?.length === 0 ? <>
                    <div className="flex justify-center my-20"><CircularProgress></CircularProgress></div>
                </> : <>
                    <Suspense>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {
                                instructors.map(instr => <PopularInstructor
                                    key={instr._id}
                                    instr={instr}
                                ></PopularInstructor>)
                            }
                        </div>
                    </Suspense>
                </>
            }
        </div>
    );
};

export default PopularInstructors;