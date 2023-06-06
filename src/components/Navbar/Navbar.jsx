import { Link } from "react-router-dom";
import Container from "../Container/Container";


const Navbar = () => {
    const links = <>
        <li><Link to='/' className="font-bold text-cyan-600">Home</Link></li>
        <li><Link to='/' className="font-bold text-cyan-600">Instructors</Link></li>
        <li><Link to='/' className="font-bold text-cyan-600">Classes</Link></li>
        <li><Link to='/' className="font-bold text-cyan-600">Dashboard </Link></li>
    </>
    return (
        <Container>
                <div className="navbar bg-base-100 bg-opacity-40 border shadow-sm">
                    <div className="navbar-start">
                        <img className="w-28" src="https://t3.ftcdn.net/jpg/01/48/33/22/360_F_148332274_gev1hgVEk1uOyiEMAvaNH31oJy6FSyYz.jpg" alt="" />
                    </div>
                    <div className="dropdown navbar-start">
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
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Navbar;