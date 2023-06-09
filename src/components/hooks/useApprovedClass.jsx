import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useApprovedClass = () => {
    const { data: approvedClasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await axios.get('http://localhost:5000/allClasses/approved')
        return res.data;
    })
    return [approvedClasses, refetch]
};

export default useApprovedClass;