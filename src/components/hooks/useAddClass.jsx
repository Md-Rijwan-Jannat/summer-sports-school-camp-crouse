import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useAddClass = () => {
    const { user } = useAuth();
    const { data: addedClass = [], refetch, isLoading } = useQuery({
        queryKey: ['addedClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/addedClass?email=${user?.email}`)
            return res.json()
        }
    })
    return [addedClass, refetch, isLoading]
};

export default useAddClass;