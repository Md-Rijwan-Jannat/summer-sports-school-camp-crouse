
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Headers/SectionTitle";
import { useEffect, useState } from "react";
import PopularInstructor from "./PopularInstructor";


const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users/popular/instructor')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstructors(data)
            })
    }, [])
    return (
        <Container>
            <SectionTitle title="Our Best Instructor"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    instructors.map(instr => <PopularInstructor
                        key={instr._id}
                        instr={instr}
                    ></PopularInstructor>)
                }
            </div>
        </Container>
    );
};

export default PopularInstructors;