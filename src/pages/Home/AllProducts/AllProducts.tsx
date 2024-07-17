import plant3 from '../../../assets/images/product/plant-3.png';
import plant5 from '../../../assets/images/product/plant-5.png';
import { useGetProductQuery } from '../../../redux/features/product/productApi';
import AllProductsCard from './AllProductsCard';
import { useState } from 'react';

interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
}

const AllProducts = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetProductQuery({ page, limit: 4 });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Something went wrong</p>;
    }

    const productData = data?.data;
    const totalPages = data?.meta?.totalPage || 1;
    console.log('>>>>>', productData);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="mb-24 relative">
            <div className="container mx-auto">
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
                <div className="join px-32 flex justify-end">
                    <button
                        onClick={handlePreviousPage}
                        className="join-item btn"
                        disabled={page === 1}
                    >
                        «
                    </button>
                    <button className="join-item btn">Page {page}</button>
                    <button
                        onClick={handleNextPage}
                        className="join-item btn"
                        disabled={page === totalPages}
                    >
                        »
                    </button>
                </div>
            </div>
            <div className='absolute top-96'>
                <img src={plant5} alt="" />
            </div>
        </div >
    );
};

export default AllProducts;
