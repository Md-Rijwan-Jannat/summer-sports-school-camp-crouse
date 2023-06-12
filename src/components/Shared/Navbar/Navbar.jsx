import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";
import useUsers from "../../hooks/useUsers";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [users] = useUsers();
    const logOutHandler = () => {
        logOut()
            .then(() => {
                toast.success('successfully logout')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const currentUser = users.filter(u => u?.email === user?.email)
    const loginUser = currentUser[0]
    console.log(currentUser)
    const userIs = loginUser?.role === "student"
    const instructorIs = loginUser?.role === "instructor"

    const [isAdmin] = useAdmin();
    const links = <>
        <li><Link to='/' className="font-bold text-blue-400">Home</Link></li>
        <li><Link to='/allInstructor' className="font-bold text-blue-400">Instructors</Link></li>
        <li><Link to='/allClasses' className="font-bold text-blue-400">Classes</Link></li>
        {
            user && <>
                {
                    isAdmin && <li><Link to={'/dashboard/adminHome'} className="font-bold text-blue-400">Dashboard </Link></li>
                }
                {
                    instructorIs && <li><Link to={'/dashboard/instructorHome'} className="font-bold text-blue-400">Dashboard </Link></li>
                }

                {
                    userIs && <li><Link to={'/dashboard/studentHome'} className="font-bold text-blue-400">Dashboard </Link></li>
                }
            </>
        }

    </>
    return (
        <Container>
            <div className="navbar bg-blue-100 bg-opacity-40 border shadow-sm">
                <div className="navbar-start">
                    <img className="w-28 rounded-3xl" src="https://t3.ftcdn.net/jpg/01/48/33/22/360_F_148332274_gev1hgVEk1uOyiEMAvaNH31oJy6FSyYz.jpg" alt="" />
                </div>
                <div className="dropdown  navbar-start">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex-none gap-2">
                    <div className="bg-white p-4 rounded-xl">
                        {
                            user ? <div className="flex gap-3">
                                <img className="w-10 rounded-full" src={user.photoURL} />
                                <button onClick={logOutHandler} className="bg-slate-200 px-4 py-1 rounded-xl text-sm font-semibold hover:text-blue-600">LogOut</button>
                            </div> : <div className="flex gap-3">
                                <FaUser size={30}></FaUser>
                                <button className="bg-slate-200 px-4 py-1 rounded-xl text-sm font-semibold hover:text-blue-600"><Link to='/login'>Login</Link></button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;