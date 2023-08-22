import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
const Navbar = React.lazy(() => import('../components/Shared/Navbar/Navbar'))
const Footer = React.lazy(() => import('../components/Shared/Footer/Footer'))

const Main = () => {
    return (
        <Suspense fallback={<div className="w-full h-[1000px] flex items-center justify-center"><span className="loading loading-dots loading-lg"></span></div>}>
            <div className="font-name">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </Suspense>
    );
};

export default Main;