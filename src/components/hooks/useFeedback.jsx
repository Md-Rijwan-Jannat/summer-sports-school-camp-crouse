import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useFeedback = () => {
    const {data: newFeedbackAdded=[], refetch} = useQuery(['userFeedback'], async()=>{
        const res = await axios.get('https://summer-sports-scholl-camp-server.vercel.app/userFeedback')
        return res.data;
    })
    return [newFeedbackAdded, refetch]
};

export default useFeedback;