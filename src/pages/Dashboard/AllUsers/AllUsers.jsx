import { Helmet } from "react-helmet-async";
import useUser from "../../../components/hooks/useUsers";
import AllUser from "./AllUser";


const AllUsers = () => {
    const [users] = useUser();
    return (
        <div>
            <Helmet><title>Summer Sports Camp | All Classes</title></Helmet>
            <div className="my-16">
                <div className="overflow-x-hidden lg:mx-16">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <AllUser
                                    key={user._id}
                                    user={user}
                                    index={index}
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