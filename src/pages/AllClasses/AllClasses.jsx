import useClasses from "../../components/hooks/useClasses";
import ClassTabile from "./ClassTabile";


const AllClasses = () => {
    const [classes] = useClasses();
    return (
        <div className="my-16">
             <div className="overflow-x-hidden lg:mx-16">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Students</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls, index) => <ClassTabile 
                            key={cls._id}
                            cls={cls}
                            index={index}
                            ></ClassTabile>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClasses;