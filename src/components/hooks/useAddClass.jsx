import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAddClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: addedClass = [] ,refetch, isLoading } = useQuery({
        queryKey: ['addedClass', user?.email],
        queryFn: async () => {
            const res = axiosSecure(`/addedClass?email=${user?.email}`)
            return res.json()
        }
    })
    return [addedClass,refetch,isLoading]
};

export default useAddClass;