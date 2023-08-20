import { Helmet } from "react-helmet-async";
import useUser from "../../../../components/hooks/useUsers";
import SectionTitle from "../../../../components/Headers/SectionTitle";
import ManageUser from "./ManageUser";


const ManageUsers = () => {
    const [users, refetch] = useUser();
    return (
        <div>
            <Helmet><title>Summer Sports Camp | All Users</title></Helmet>
            <SectionTitle title={'Our All Users'}/>
            <div className="my-16">
                <div className=" w-full lg:mx-16">
                    <table className="table w-full overflow-x-auto md:overflow-hidden">
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
                                users.map((user, index) => <ManageUser
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></ManageUser>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageUsers;