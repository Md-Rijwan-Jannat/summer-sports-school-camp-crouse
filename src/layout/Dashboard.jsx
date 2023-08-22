import { Helmet } from "react-helmet-async";
import { FaHistory, FaHome, FaUsers } from "react-icons/fa";
import { BsBookmarkCheckFill, BsFillBagPlusFill } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import Container from "../components/Container/Container";
import { ImMenu } from "react-icons/im";
import { SiGoogleclassroom } from "react-icons/si";
import { HiTemplate } from "react-icons/hi";
import { useEffect, useState } from "react";


const Dashboard = () => {
    const { user } = useAuth();
    const [allUsers, setAllUsers] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/allUsers')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])
    const currentUser = allUsers?.find(u => u?.email === user?.email);
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
                    <ul className="menu p-4 w-80 min-h-screen bg-[#7ab6fa] font-bold text-gray-800 pt-10 md:pt-24">
                        {/* Sidebar content here */}
                        {user && <>
                            <div className="flex flex-col items-center justify-center mb-5">
                                <img className="w-16 h-16 border-blue-600 border-4 rounded-full mb-2" src={user?.photoURL} alt="" />
                                <span className="bg-blue-400 px-3 p-1 rounded-lg shadow-lg">{user?.displayName}</span>
                            </div>
                        </>}
                        {
                            currentUser?.role === 'admin' ? <>
                                <li><Link className="text-[#1a7ced]" to={'/dashboard/adminHome'}><FaHome color="#140f28" size={20} />  Admin Home</Link></li>
                                <li><Link className="text-[#1a7ced]" to={'/dashboard/manageUsers'}><FaUsers color="#140f28" size={20} />manage Users</Link></li>
                                <li><Link className="text-[#1a7ced]" to={'/dashboard/manageClasses'}><SiGoogleclassroom color="#140f28" size={20} />Manage Classes</Link></li>
                            </> : <>
                                {
                                    currentUser?.role === 'instructor' ? <>
                                        <li><Link className="text-[#1a7ced]" to={'/dashboard/instructorHome'}><FaHome color="#140f28" size={20} /> Instructor Home</Link></li>
                                        <li><Link className="text-[#1a7ced]" to={'/dashboard/addClass'}><FaHome color="#140f28" size={20} /> Add Class</Link></li>
                                        <li><Link className="text-[#1a7ced]" to={'/dashboard/myClasses'}><SiGoogleclassroom color="#140f28" size={20} /> My Class </Link></li>
                                    </> : <>
                                        {
                                            currentUser?.role === 'student' ? <>
                                                <li><Link className="text-[#1a7ced]" to={'/dashboard/studentHome'}><FaHome color="#140f28" size={20} /> Student Home</Link></li>
                                                <li><Link className="text-[#1a7ced]" to={'/dashboard/studentClasses'}><HiTemplate color="#140f28" size={20} /> My selected Classes</Link></li>
                                                <li><Link className="text-[#1a7ced]" to={'/dashboard/enrolledClass'}><BsBookmarkCheckFill color="#140f28" size={20} /> Enrolled Classes</Link></li>
                                                <li><Link className="text-[#1a7ced]" to={'/dashboard/paymentHistory'}><FaHistory color="#140f28" size={20} /> Payment History</Link></li>
                                            </> : ''
                                        }
                                    </>
                                }


                            </>
                        }

                        <div className="divider"></div>
                        <li><NavLink className="text-[#1a7ced]" to={'/'}><FaHome color="#140f28" size={20}></FaHome> Home</NavLink></li>
                        <li><NavLink className="text-[#1a7ced]" to={'/contact'}><BsFillBagPlusFill color="#140f28" size={20}></BsFillBagPlusFill> Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;