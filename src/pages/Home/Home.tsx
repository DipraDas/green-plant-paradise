import Discount from "./Discount/Discount";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import HeroSection from "./HeroSection/HeroSection";
import NewCollection from "./NewCollection/NewCollection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            {/* <Discount /> */}
            <NewCollection />
            <FeaturedProduct />
        </div>
    );
};

export default Home;