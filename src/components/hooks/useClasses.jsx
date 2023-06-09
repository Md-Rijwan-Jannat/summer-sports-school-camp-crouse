import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useClasses = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axios.get('http://localhost:5000/allClasses')
        return res.data;
    })
    return [classes, refetch]
};

export default useClasses;