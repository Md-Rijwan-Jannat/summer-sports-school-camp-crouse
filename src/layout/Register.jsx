import { Outlet } from "react-router-dom";
import DarkTheme from "../components/DarkTheme";


const Register = () => {
    return (
        <div>
            <Outlet></Outlet>
            <DarkTheme/>
        </div>
    );
};

export default Register;