import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
const Classes = React.lazy(() => import('./Classes'))
import SectionTitle from "../../components/Headers/SectionTitle";
import useApprovedClass from "../../components/hooks/useApprovedClass";
import useAuth from "../../components/hooks/useAuth";
import NotFoundMessage from "../../components/NotFoundMesage/NotFoundMessage";
import { CircularProgress } from "@mui/material";


const AllClasses = () => {
    const { user } = useAuth();
    const [approvedClass, isLoading, refetch] = useApprovedClass();
    refetch();

    return (
        <div className="pt-[150px] bg-[#77b6fd] allClass pb-10 mb-5">
            <Container>
                <Helmet><title>Summer Sports Camp | All Classes</title></Helmet>
                <SectionTitle title="Our All Classes" />
                {
                    !user ? <NotFoundMessage message={'Please login and select your favorite crouse'} /> : ''
                }
                <div className="pb-16">
                    {
                        approvedClass?.length === 0 ? <>
                            <div className="flex justify-center pb-20"><CircularProgress></CircularProgress></div>
                        </> : <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {
                                    approvedClass.map((cls, index) => <>
                                        <Suspense fallback={isLoading && <div className="flex justify-center pb-20"><CircularProgress></CircularProgress></div>}>
                                            <Classes
                                                key={cls._id}
                                                cls={cls}
                                                index={index}
                                            ></Classes>
                                        </Suspense>
                                    </>)
                                }
                            </div>
                        </>
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllClasses;