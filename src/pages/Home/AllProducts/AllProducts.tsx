import plant3 from '../../../assets/images/product/plant-3.png';
import plant5 from '../../../assets/images/product/plant-5.png';
import { useGetProductQuery } from '../../../redux/features/product/productApi';
import AllProductsCard from './AllProductsCard';

interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    rating: number
}

const AllProducts = () => {
    const { data } = useGetProductQuery(undefined);
    const productData = data?.data
    return (
        <div className="mb-24 relative">
            <div className="container mx-auto" >
                <div className="px-32">
                    <p className="text-center font-semibold tracking-widest text-black text-3xl mb-5">OUR PRODUCTS</p>
                    <img className='mx-auto mt-3' src={plant3} alt="" />
                    <div className='grid grid-cols-4 gap-8 mt-16 mb-32 justify-center'>
                        {
                            productData?.map((
                                product: Product) => (
                                <AllProductsCard key={product._id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='absolute top-96'>
                <img src={plant5} alt="" />
            </div>
        </div >
    );
};

export default AllProducts;