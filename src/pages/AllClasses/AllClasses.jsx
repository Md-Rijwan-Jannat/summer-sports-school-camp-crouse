import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import Classes from "./Classes";
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
        <div className="pt-[150px] bg-[#77b6fd] allClass pb-10 my-5">
            <Container>
                <Helmet><title>Summer Sports Camp | All Classes</title></Helmet>
                <SectionTitle title="Our All Classes" />
                {
                    isLoading ? <> <div className="flex justify-center pb-20"><CircularProgress></CircularProgress></div></> : <>
                        {
                            !user ? <NotFoundMessage message={'Please login and select your favorite crouse'} /> : ''
                        }
                        <div className="pb-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {
                                    approvedClass.map((cls, index) => <Classes
                                        key={cls._id}
                                        cls={cls}
                                        index={index}
                                    ></Classes>)
                                }
                            </div>
                        </div>
                    </>
                }
            </Container>
        </div>
    );
};

export default AllClasses;