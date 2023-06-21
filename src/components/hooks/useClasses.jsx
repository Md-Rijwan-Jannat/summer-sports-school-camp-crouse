import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useClasses = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axios.get('https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/allClasses')
        return res.data;
    })
    return [classes, refetch]
};

export default useClasses;