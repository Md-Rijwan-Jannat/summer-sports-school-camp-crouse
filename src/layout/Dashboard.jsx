import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AiFillShopping, AiFillContacts } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import Container from "../components/Container/Container";


const Dashboard = () => {
    const { user } = useAuth();
    const isAdmin = true;
    const isStudent = true;
    return (
        <Container>
            <div className=" bg-slate-100">
                <Helmet><title>Bistro boss | Dashboard</title></Helmet>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content text-center mt-5">
                        {/* <!-- Page content here --> */}
                        <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Open drawer</label>
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-[#D1A054] uppercase font-semibold text-base-content">
                                <img className="rounded-full w-24" src={user?.photoURL} alt="" />
                                <h3>{user?.displayName}</h3>
                            {/* <!-- Sidebar content here --> */}
                            {
                                isStudent ? <>
                                    <li><NavLink to={'/dashboard/studentHome'}><FaHome size={20}></FaHome> Student Home</NavLink></li>
                                </> : <>
                                    {
                                        isAdmin ? <>
                                            <li><NavLink to={'/dashboard/adminHome'}><FaHome size={20}></FaHome> Admin Home</NavLink></li>
                                        </> : <>
                                            <li><NavLink to={'/dashboard/studentHome'}><FaHome size={20}></FaHome> Student Home</NavLink></li>
                                        </>
                                    }
                                </>
                            }
                            <div className="divider"></div>
                            <li><NavLink to={'/'}><FaHome size={20}></FaHome> Home</NavLink></li>
                            <li><NavLink to={'/menu'}><HiMenu size={20}></HiMenu> Classes</NavLink></li>
                            <li><NavLink to={'/shop'}><AiFillShopping size={20}></AiFillShopping> Shopping</NavLink></li>
                            <li><NavLink to={'/contact'}><AiFillContacts size={20}></AiFillContacts> Contact</NavLink></li>
                        </ul>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;