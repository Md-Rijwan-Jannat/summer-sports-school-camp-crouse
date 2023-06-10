import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useAddClass = () => {
    const { user } = useAuth();
    const { data: addedClass = [] ,refetch, isLoading } = useQuery({
        queryKey: ['addedClass', user?.email],
        queryFn: async () => {
            const res = fetch(`http://localhost:5000/addedClass?email=${user?.email}`)
            return res.json()
        }
    })
    return [addedClass,refetch,isLoading]
};

export default useAddClass;