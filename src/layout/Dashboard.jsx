import { Helmet } from "react-helmet-async";
import { FaHistory, FaHome, FaUsers } from "react-icons/fa";
import { BsBookmarkCheckFill, BsFillBagPlusFill } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import Container from "../components/Container/Container";
import { ImMenu } from "react-icons/im";
import { SiGoogleclassroom } from "react-icons/si";
import { HiTemplate } from "react-icons/hi";
import useAdmin from "../components/hooks/useAdmin";
import useUsers from "../components/hooks/useUsers";


const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [users] = useUsers();
const currentUser = users.filter(u => u?.email === user?.email)
    const loginUser = currentUser[0]
    console.log(currentUser)
    const userIs = loginUser?.role === "student"
    const instructorIs = loginUser?.role === "instructor"

    console.log(instructorIs)
    return (
        <Container>
            <Helmet><title>Bistro boss | Dashboard</title></Helmet>
            <div className="drawer-mobile">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center t-5">
                    <div className="flex justify-end top-4">
                        <label htmlFor="my-drawer-4" className="drawer-button btn  btn-ghost"><ImMenu /></label>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-screen bg-[#72c8ea] font-bold text-gray-800 pt-10 md:pt-24">
                        {/* Sidebar content here */}
                        {user && <>
                            <div className="flex flex-col items-center justify-center mb-5">
                                <img className="w-16 h-16 border-blue-600 border-4 rounded-full mb-2" src={user?.photoURL} alt="" />
                                <span className="bg-blue-400 px-3 p-1 rounded-lg shadow-lg">{user?.displayName}</span>
                            </div>
                        </>}
                        {
                            isAdmin ? <>
                                <li><Link to={'/dashboard/adminHome'}><FaHome size={20} />  Admin Home</Link></li>
                                <li><Link to={'/dashboard/manageUsers'}><FaUsers size={20} />manage Users</Link></li>
                                <li><Link to={'/dashboard/manageClasses'}><SiGoogleclassroom size={20} />Manage Classes</Link></li>
                            </> : <>
                                {
                                    instructorIs ? <>
                                        <li><Link to={'/dashboard/instructorHome'}><FaHome size={20} /> Instructor Home</Link></li>
                                        <li><Link to={'/dashboard/addClass'}><FaHome size={20} /> Add Class</Link></li>
                                        <li><Link to={'/dashboard/myClasses'}><SiGoogleclassroom size={20} /> My Class </Link></li>
                                    </> : <>
                                        {
                                            userIs ? <>
                                                <li><Link to={'/dashboard/studentHome'}><FaHome size={20} /> Student Home</Link></li>
                                                <li><Link to={'/dashboard/studentClasses'}><HiTemplate size={20} /> My selected Classes</Link></li>
                                                <li><Link to={'/dashboard/enrolledClass'}><BsBookmarkCheckFill size={20} /> Enrolled Classes</Link></li>
                                                <li><Link to={'/dashboard/paymentHistory'}><FaHistory size={20} /> Payment History</Link></li>
                                            </> : ''
                                        }
                                    </>
                                }


                            </>
                        }

                        <div className="divider"></div>
                        <li><NavLink to={'/'}><FaHome size={20}></FaHome> Home</NavLink></li>
                        <li><NavLink to={'/contact'}><BsFillBagPlusFill size={20}></BsFillBagPlusFill> Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;