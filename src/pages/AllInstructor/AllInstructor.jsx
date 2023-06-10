
import Instructor from "./Instructor";
import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/Headers/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const AllInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    console.log(instructors)
    useEffect(() => {
        axios.get('http://localhost:5000/users/instructor')
            .then(data => {
                setInstructors(data.data)
            })
    }, [])

    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Home</title></Helmet>
            <SectionTitle title="Our All Instructor" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    instructors.map(instructor => <Instructor
                        key={instructor._id}
                        instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </Container>
    );
};

export default AllInstructor;