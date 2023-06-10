import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useInstructors = () => {
    const [axiosSecure ] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/users/instructor')
        return res.data;
    })
    return [instructors, refetch]
};

export default useInstructors;