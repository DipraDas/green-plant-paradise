import Discount from "./Discount/Discount";
import HeroSection from "./HeroSection/HeroSection";
import NewCollection from "./NewCollection/NewCollection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            {/* <Discount /> */}
            <NewCollection />
        </div>
    );
};

export default Home;