import { Helmet } from "react-helmet-async";
import useUser from "../../../components/hooks/useUsers";
import AllUser from "./AllUser";
import SectionTitle from "../../../components/Headers/SectionTitle";


const AllUsers = () => {
    const [users, refetch] = useUser();
    return (
        <div>
            <Helmet><title>Summer Sports Camp | All Users</title></Helmet>
            <SectionTitle title={'Our All Users'}/>
            <div className="my-16">
                <div className="overflow-x-hidden lg:mx-16">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>{'<'}</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Instructor Role</th>
                                <th>Admin Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <AllUser
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></AllUser>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;