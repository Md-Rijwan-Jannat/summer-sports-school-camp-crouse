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
        <div className="shadow-md rounded-b-md fixed bg-[#72c8ea] z-50 w-full">
            <Container>
                <div className="navbar p-3 md:p-2 relative">
                    <div className="navbar-start">
                        <div className="text-start">
                            <img className=" w-16 md:w-36 xl:w-36 rounded-3xl" src={summer_camp} alt="" />
                        </div>
                    </div>
                    <div className="dropdown  lg:navbar-center">

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
                    <div className="navbar-end ">
                        <div className="p-4 rounded-xl">
                            {
                                user ? <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                                    <img  onClick={() => window.my_modal_3.showModal()} className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full border-2 md:border-4 border-[#8A63AC]" src={user.photoURL} />
                                    <button onClick={logOutHandler} className="bg-[#2ca8dd] text-gray-600 shadow-md shadow-[#8A63AC] px-4 py-1 rounded-xl text-sm font-semibold hover:text-[#8A63AC]">LogOut</button>
                                </div> : <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                                    <FaUser  onClick={() => window.my_modal_3.showModal()} className="text-[#8A63AC]" size={30}></FaUser>
                                    <button className="bg-[#2ca8dd] text-gray-600 sha px-4 py-1 rounded-xl text-sm font-semibold hover:text-[#8A63AC] shadow-md shadow-[#8A63AC] "><Link to='/login'>Login</Link></button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;