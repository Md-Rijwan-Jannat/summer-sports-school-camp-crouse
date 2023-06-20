import { useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useState } from "react";

const useEnrolledClasses = () => {
    const [enrolledClass, setEnrolledClass] = useState([])
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    useEffect(() => {
        axiosSecure.get(`/enrolled/${user?.email}`)
            .then(res => {
                setEnrolledClass(res.data)
                console.log(res.data)
            })
    }, [user, axiosSecure])
    return [enrolledClass]
};

export default useEnrolledClasses;