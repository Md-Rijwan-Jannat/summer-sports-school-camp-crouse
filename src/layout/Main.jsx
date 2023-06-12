import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import DarkTheme from "../components/DarkTheme";

const Main = () => {
    return (
        <div className="font-name">
            <Navbar></Navbar>
            <DarkTheme/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;