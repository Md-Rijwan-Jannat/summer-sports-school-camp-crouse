import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useApprovedClass = () => {
    const { data: approvedClasses = [], isLoading, refetch } = useQuery(['classes'], async () => {
        const res = await axios.get('https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/allClasses/approved')
        return res.data;
    })
    return [approvedClasses, isLoading, refetch]
};

export default useApprovedClass;