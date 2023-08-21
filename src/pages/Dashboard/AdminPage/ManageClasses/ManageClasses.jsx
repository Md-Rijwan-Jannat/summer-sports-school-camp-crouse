import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/Headers/SectionTitle';
import ManageClass from './ManageClass';
import useClasses from '../../../../components/hooks/useClasses';

const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    return (
        <div>
            <Helmet><title>Summer Sports Camp | All Users</title></Helmet>
            <SectionTitle title={'Our All Classes'} />
            <div className="py-16">
                <div className="table-responsive">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className='border-[#8A63AC] border-b-[3px]'>
                                <th>{'<'}</th>
                                <th>Photo</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Provide Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((cls, index) => <ManageClass
                                key={cls._id}
                                cls={cls}
                                refetch={refetch}
                                index={index}
                                ></ManageClass>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageClasses;