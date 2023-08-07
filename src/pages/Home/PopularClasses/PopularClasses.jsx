
import { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
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
        <Container>
            <SectionTitle title='Popular Classes'></SectionTitle>
           {
            !isLoading ? <>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    classes.map(cls => <Class
                        key={cls._id}
                        cls={cls}
                    ></Class>)
                }
            </div>
            </> :  <> <div className="flex justify-center my-20"><CircularProgress></CircularProgress></div></>
           }
        </Container>
    );
};

export default PopularClasses;