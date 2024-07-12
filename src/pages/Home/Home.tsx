import About from "./About/About";
import AllProducts from "./AllProducts/AllProducts";
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
            <About />
            <AllProducts />
        </div>
    );
};

export default Home;