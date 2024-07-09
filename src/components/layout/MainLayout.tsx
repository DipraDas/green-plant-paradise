import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import TopHeader from "../topHeader/TopHeader";

const MainLayout = () => {
    return (
        <div>
            <TopHeader />
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;