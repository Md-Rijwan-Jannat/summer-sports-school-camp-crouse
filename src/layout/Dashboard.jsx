import { Helmet } from "react-helmet-async";
import { FaHome, FaUsers } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AiFillShopping, AiFillContacts } from "react-icons/ai";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import Container from "../components/Container/Container";
import { ImMenu } from "react-icons/im";


const Dashboard = () => {
    const { user } = useAuth();
    const isAdmin = true;
    const isStudent = false;
    return (
        <Container>
            <Helmet><title>Bistro boss | Dashboard</title></Helmet>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center mt-5">
                    <div className="flex justify-end top-4">
                        <label htmlFor="my-drawer-4" className="drawer-button btn  btn-ghost"><ImMenu /></label>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-cyan-100 font-semibold text-base-content">
                        {/* Sidebar content here */}
                        {user && <>
                        <div className="flex flex-col items-center justify-center mb-5"> 
                            <img className="w-16 h-16 rounded-full mb-2" src={user?.PhotoURL} alt="" />
                            <span>{user?.displayName}</span>
                        </div>
                        </>}
                      {
                        isStudent ? <>
                        <li><Link to={'/'}><FaHome size={20}/> Student Home</Link></li>
                        </> : <>
                        {
                            isAdmin ? <>
                              <li><Link to={'/'}><FaHome size={20}/> Admin Home</Link></li>
                              <li><Link to={'/dashboard/allUser'}><FaUsers size={20}/>All Users</Link></li>
                            </> : <>
                            <li><Link to={'/'}><FaHome size={20}/> Instructor Home</Link></li>
                            </>
                        }
                        </>
                      }
                       
                        <div className="divider"></div>
                        <li><NavLink to={'/'}><FaHome size={20}></FaHome> Home</NavLink></li>
                        <li><NavLink to={'/menu'}><HiMenu size={20}></HiMenu> Menu</NavLink></li>
                        <li><NavLink to={'/shop'}><AiFillShopping size={20}></AiFillShopping> Shopping</NavLink></li>
                        <li><NavLink to={'/contact'}><AiFillContacts size={20}></AiFillContacts> Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;