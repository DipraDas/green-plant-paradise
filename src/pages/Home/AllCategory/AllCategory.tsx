/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useEffect, useState } from 'react';
import plant3 from '../../../assets/images/product/plant-3.png';
import plant7 from '../../../assets/images/product/plant-7.png';
import { useGetCategoryQuery } from '../../../redux/features/category/categoryApi';
import ProductCard from '../../Shop/ProductCard/ProductCard';
import { useGetProductQuery } from '../../../redux/features/product/productApi';

interface Category {
    name: string;
}
interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    categories: Category[];
}

const AllCategory = () => {

    const { data } = useGetCategoryQuery(undefined);
    let categoryData = [];
    const [category, setCategory] = useState('');

    useEffect(() => {
        getFilteredAndSortedProducts();
    }, [category]);

    if (data && data.success) {
        categoryData = data.data;
    }

    const { data: productDataResponse } = useGetProductQuery(undefined);
    const productData = productDataResponse?.data || [];

    const { data: categoryDataResponse } = useGetCategoryQuery(undefined);

    if (categoryDataResponse && categoryDataResponse.success) {
        categoryData = categoryDataResponse.data;
    }

    const handleCategory = (category: string) => {
        setCategory(category);
    };

    const getFilteredAndSortedProducts = () => {
        let filteredProducts = category
            ? productData.filter((product: Product) => product.categories.some(cat => cat.name === category))
            : productData;
        return filteredProducts.slice(0, 4);
    };

    const filteredProducts = getFilteredAndSortedProducts();

    return (
        <div className="container mx-auto">
            <div className="px-10 lg:px-32">
                <p className="text-center font-semibold tracking-widest text-black text-3xl mb-5">ALL CATEGORIES</p>
                <img className='mx-auto mt-3 mb-16' src={plant3} />
                <div className='flex flex-wrap justify-center gap-8 mb-16'>
                    {
                        categoryData.map((category: {
                            name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        }, index: number) => (
                            <div
                                key={index}
                                onClick={() => {
                                    if (typeof category.name === 'string') {
                                        handleCategory(category.name);
                                    }
                                }}
                                className='cursor-pointer flex gap-6 w-72 bg-green-50 border border-green-200 rounded-lg py-5 justify-center items-center shadow-md  transition-all duration-300  transform hover:scale-110'
                            >
                                <img src={plant7} className='w-6' alt="" />
                                <p className='text-lg tracking-wider'>{category.name}</p>
                                <img src={plant7} className='w-6' alt="" />
                            </div>
                        ))
                    }
                </div>
                {
                    category &&
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20'>
                        {
                            filteredProducts?.map((product: Product) => (
                                <ProductCard key={product._id} product={product} />
                            ))
                        }
                    </div>
                }
            </div>
        </div >
    );
};

export default AllCategory;