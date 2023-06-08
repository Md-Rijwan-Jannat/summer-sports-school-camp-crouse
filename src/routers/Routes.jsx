import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layout/Main';
import Home from "../pages/Home/Home/Home";
import Register from "../layout/Register";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructor from "../pages/AllInstructor/AllInstructor";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/AllInstructor',
                element: <AllInstructor />,
                loader: () => fetch('http://localhost:5000/users/instructor')
            },
            {
                path: 'allClasses',
                element: <AllClasses />
            }
        ]
    },
    {
        path: '/',
        element: <Register />,
        children: [
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