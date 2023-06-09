import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useUsers = () => {
    const {data: users=[], refetch} = useQuery(['users'], async()=>{
        const res = await axios.get('http://localhost:5000/allUsers')
        return res.data;
    })
    return [users, refetch]
};

export default useUsers;