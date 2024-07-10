import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import TopHeader from "../topHeader/TopHeader";
import BottomNavbar from "../navbar/BottomNavbar";
import Footer from "../footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <TopHeader />
            <Navbar />
            <BottomNavbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;