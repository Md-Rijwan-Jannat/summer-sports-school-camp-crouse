
import { Navigate, useLocation } from "react-router";
import useAuth from "../components/hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth()
    const location = useLocation();

    if(loading){
        return <div className="h-[700px] flex items-center justify-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;