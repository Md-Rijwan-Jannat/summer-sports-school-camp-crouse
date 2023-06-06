import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layout/Main';
import Home from "../pages/Home/Home/Home";
import Register from "../layout/Register";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path:'/',
        element: <Register/>,
        children:[
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;