import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";


const useInstructors = () => {
    // const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch, isLoading } = useQuery(['users'], async () => {
        const res = await axios.get('https://summer-sports-scholl-camp-server.vercel.app/users/instructor')
        return res.data;
    })
    return [instructors, refetch, isLoading]
};

export default useInstructors;