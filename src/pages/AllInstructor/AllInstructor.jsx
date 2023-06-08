import { useLoaderData } from "react-router-dom";


const AllInstructor = () => {
    const Instructors = useLoaderData();
    console.log(Instructors);
    return (
        <div>

        </div>
    );
};

export default AllInstructor;