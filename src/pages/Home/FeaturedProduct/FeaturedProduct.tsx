import plant3 from '../../../assets/images/product/plant-3.png';
import { useGetProductQuery } from '../../../redux/features/product/productApi';
import FeaturedProductCard from './FeaturedProductCard';

interface Category {
    name: string;
}
interface Product {
    _id: string;
    title: string;
    price: number;
    featured: boolean;
    image: string;
    rating: number
    categories: Category[];
}

const FeaturedProduct = () => {

    const { data } = useGetProductQuery(undefined);
    const productData = data?.data;
    const featuredProducts = productData?.filter((product: { featured: boolean; }) => product.featured);

    return (
        <div className="mb-24">
            < div className="container mx-auto" >
                <div className="px-32">
                    <p className="text-center font-semibold tracking-widest text-black text-3xl mb-5">FEATURE PRODUCTS</p>
                    <img className='mx-auto mt-3' src={plant3} alt="" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-5 gap-4 mt-16 mb-32'>
                        {
                            featuredProducts?.length &&
                            featuredProducts.map(
                                (
                                    product: Product) => (
                                    <FeaturedProductCard
                                        key={product._id}
                                        product={product}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
            </ div>
        </div >
    );
};

export default FeaturedProduct;