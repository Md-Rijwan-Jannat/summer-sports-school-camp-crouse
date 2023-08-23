
import React, { Suspense, useEffect, useState } from "react";
const Class = React.lazy(() => import('./Class'))
const SectionTitle = React.lazy(() => import('../../../components/Headers/SectionTitle'))
import { CircularProgress } from "@mui/material";


const PopularClasses = () => {
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
                classes?.length === 0 ? <>
                    <div className="flex justify-center py-20"><CircularProgress></CircularProgress></div>
                </> : <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            classes.map(cls => <>
                                <Suspense>
                                    <Class
                                        key={cls._id}
                                        cls={cls}
                                    ></Class>
                                </Suspense>
                            </>)
                        }
                    </div>
                </>
            }
        </div >
    );
};

export default PopularClasses;