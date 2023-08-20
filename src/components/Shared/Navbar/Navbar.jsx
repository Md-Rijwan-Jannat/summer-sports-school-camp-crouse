import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";
import useUsers from "../../hooks/useUsers";
import summer_camp from '../../../assets/summer-camp-removebg-preview.png'


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
        <li><Link to='/' className="font-bold uppercase aria-selected:text-[#8A63AC] mr-2 text-[#1b92c4]">Home</Link></li>
        <li><Link to='/allInstructor' className="font-bold uppercase aria-selected:text-[#8A63AC] mr-2 text-[#1b92c4]">Instructors</Link></li>
        <li><Link to='/allClasses' className="font-bold uppercase aria-selected:text-[#8A63AC] mr-2 text-[#1b92c4]">Classes</Link></li>
        {
            user?.email && <>
                {
                    isAdmin && <li><Link to={'/dashboard/adminHome'} className="font-bold uppercase aria-selected:text-[#8A63AC] mr-2 text-[#1b92c4]">Dashboard </Link></li>
                }
                {
                    instructorIs && <li><Link to={'/dashboard/instructorHome'} className="font-bold uppercase aria-selected:text-[#8A63AC] mr-2 text-[#1b92c4]">Dashboard </Link></li>
                }

                {
                    userIs && <li><Link to={'/dashboard/studentHome'} className="font-bold uppercase aria-selected:text-[#8A63AC] mr-2 text-[#1b92c4]">Dashboard </Link></li>
                }
            </>
        }

    </>
    return (
        <Container>
            <div className="navbar p-5 md:p-2 pb-16 relative shadow-md rounded-b-md">
                <div className="navbar-start flex flex-col my-5 mb-3 gap-1 w-full">
                    <div>
                        <img className=" w-28 md:w-36 xl:w-36 rounded-3xl" src={summer_camp} alt="" />
                    </div>
                </div>
                <div className="dropdown  navbar-end">
                    <label className="btn btn-ghost lg:hidden">
                        <button onClick={() => window.my_modal_3.showModal()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </button>
                    </label>

                    {/* You can open the modal using ID.showModal() method */}

                    <dialog id="my_modal_3" className="modal">
                        <form method="dialog" className="modal-box w-full bg-[#72c8ea]">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <ul className="text-center space-y-5">
                                {links}
                            </ul>
                        </form>
                    </dialog>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex-none w-1/3  gap-2">
                    <div className="p-4 rounded-xl">
                        {
                            user ? <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                                <img className="w-10 rounded-full border-2 border-[#8A63AC]" src={user.photoURL} />
                                <button onClick={logOutHandler} className="bg-[#2ca8dd] text-gray-600 shadow-md shadow-[#8A63AC] px-4 py-1 rounded-xl text-sm font-semibold hover:text-[#8A63AC]">LogOut</button>
                            </div> : <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                                <FaUser className="text-[#8A63AC]" size={30}></FaUser>
                                <button className="bg-[#2ca8dd] text-gray-600 sha px-4 py-1 rounded-xl text-sm font-semibold hover:text-[#8A63AC] shadow-md shadow-[#8A63AC] "><Link to='/login'>Login</Link></button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;