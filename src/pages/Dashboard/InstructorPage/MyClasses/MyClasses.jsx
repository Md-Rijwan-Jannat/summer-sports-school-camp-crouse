
import { useEffect, useState } from "react";
import useAuth from "../../../../components/hooks/useAuth";
import SectionTitle from "../../../../components/Headers/SectionTitle";
import { Helmet } from "react-helmet-async";
import MyClass from "./MyClass";

const MyClasses = () => {
    const { user } = useAuth();
    const [myClasses, setMyClasses] = useState([]);
    useEffect(()=>{
        fetch(`https://summer-sports-scholl-camp-server-md-rijwan-jannat.vercel.app/my_classes/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyClasses(data)
        })
    },[user])
    return (
        <div>
             <Helmet><title>Summer Sports Camp | My ash</title></Helmet>
            <SectionTitle title='My Classes'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    myClasses.map(cls => <MyClass
                        key={cls._id}
                        cls={cls}
                        myClasses={myClasses}
                    ></MyClass>)
                }
            </div>
        </div>
    );
};

export default MyClasses;