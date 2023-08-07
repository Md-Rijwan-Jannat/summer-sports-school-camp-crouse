
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Headers/SectionTitle";
import { useEffect, useState } from "react";
import PopularInstructor from "./PopularInstructor";
import { CircularProgress } from "@mui/material";
import useInstructors from "../../../components/hooks/useInstructors";


const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    const [, , isLoading] = useInstructors();
    useEffect(() => {
        fetch('https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/users/popular/instructor')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstructors(data)
            })
    }, [])
    return (
        <Container>
            <SectionTitle title="Our Best Instructor"></SectionTitle>
            {
                !isLoading ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            instructors.map(instr => <PopularInstructor
                                key={instr._id}
                                instr={instr}
                            ></PopularInstructor>)
                        }
                    </div>
                </> : <> <div className="flex justify-center my-20"><CircularProgress></CircularProgress></div></>
            }
        </Container>
    );
};

export default PopularInstructors;