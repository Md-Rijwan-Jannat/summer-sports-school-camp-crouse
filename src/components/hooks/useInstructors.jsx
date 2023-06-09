import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useInstructors = () => {
    const { data: instructors = [], refetch } = useQuery(['classes'], async () => {
        const res = await axios.get('http://localhost:5000/users/instructor')
        return res.data;
    })
    return [instructors, refetch]
};

export default useInstructors;