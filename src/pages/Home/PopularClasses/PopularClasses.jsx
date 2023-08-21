
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Headers/SectionTitle";
import Class from "./Class";
import { CircularProgress } from "@mui/material";
import useApprovedClass from "../../../components/hooks/useApprovedClass";


const PopularClasses = () => {
    const [, isLoading] = useApprovedClass();
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return (
        <div className="bg-[#77b6fd] allClass mt-5 pb-10">
            <SectionTitle title='Popular Classes'></SectionTitle>
           {
            !isLoading ? <>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    classes.map(cls => <Class
                        key={cls._id}
                        cls={cls}
                    ></Class>)
                }
            </div>
            </> :  <> <div className="flex justify-center py-20"><CircularProgress></CircularProgress></div></>
           }
        </div>
    );
};

export default PopularClasses;