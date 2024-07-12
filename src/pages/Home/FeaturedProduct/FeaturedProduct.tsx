import plant3 from '../../../assets/images/product/plant-3.png';
import FeaturedProductCard from './FeaturedProductCard';

const FeaturedProduct = () => {
    return (
        <div className="mb-24">
            < div className="container mx-auto" >
                <div className="px-32">
                    <p className="text-center font-semibold tracking-widest text-black text-3xl mb-5">FEATURE PRODUCTS</p>
                    <img className='mx-auto mt-3' src={plant3} alt="" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-5 gap-4 mt-16 mb-32'>
                        <FeaturedProductCard />
                        <FeaturedProductCard />
                        <FeaturedProductCard />
                        <FeaturedProductCard />
                        <FeaturedProductCard />
                    </div>
                </div>
            </ div>
        </div >
    );
};

export default FeaturedProduct;