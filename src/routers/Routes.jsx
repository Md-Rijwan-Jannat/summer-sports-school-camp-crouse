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
import Dashboard from "../layout/Dashboard";
import ErrorPage from "../components/ErrorPage";
import ManageUsers from "../pages/Dashboard/AdminPage/AllUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/AdminPage/ManageClasses/ManageClasses";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
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
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'allUser',
                element: <ManageUsers />
            },
            {
                path: 'manageClasses',
                element: <ManageClasses />
            }
        ]
    }
]);

export default router;