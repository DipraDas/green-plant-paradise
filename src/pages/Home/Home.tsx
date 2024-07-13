import About from "./About/About";
import AllCategory from "./AllCategory/AllCategory";
import AllProducts from "./AllProducts/AllProducts";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import HeroSection from "./HeroSection/HeroSection";
import ImageGallery from "./ImageGallery/ImageGallery";
import NewCollection from "./NewCollection/NewCollection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <NewCollection />
            <AllCategory />
            <FeaturedProduct />
            <About />
            <AllProducts />
            <ImageGallery />
        </div>
    );
};

export default Home;