import About from "./About/About";
import AllProducts from "./AllProducts/AllProducts";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import HeroSection from "./HeroSection/HeroSection";
import ImageGallery from "./ImageGallery/ImageGallery";
import NewCollection from "./NewCollection/NewCollection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            {/* <Discount />  */}
            <NewCollection />
            <FeaturedProduct />
            <About />
            <AllProducts />
            <ImageGallery />
        </div>
    );
};

export default Home;