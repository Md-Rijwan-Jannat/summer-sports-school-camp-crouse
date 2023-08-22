import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useInstructor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query !
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/single/instructor?email=${user?.email}`);
            return res.data.admin;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;