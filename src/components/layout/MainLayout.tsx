import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import TopHeader from "../topHeader/TopHeader";
import BottomNavbar from "../navbar/BottomNavbar";

const MainLayout = () => {
    return (
        <div>
            <TopHeader />
            <Navbar />
            <BottomNavbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;