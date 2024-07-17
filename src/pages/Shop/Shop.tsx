import './Shop.css';
import { useGetProductQuery } from '../../redux/features/product/productApi';
import ProductCard from './ProductCard/ProductCard';
import { useGetCategoryQuery } from '../../redux/features/category/categoryApi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { filterByCategory } from '../../redux/features/filter/filterSlice';
import { useEffect, useState } from 'react';

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

const Shop = () => {
    const dispatch = useAppDispatch();
    const [sortBy, setSortBy] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const selectedCategory: any = useAppSelector(state => state.filter.filterByCategory);

    const { data: productDataResponse } = useGetProductQuery(undefined);
    const productData = productDataResponse?.data || [];

    const { data: categoryDataResponse } = useGetCategoryQuery(undefined);
    let categoryData = [];
    if (categoryDataResponse && categoryDataResponse.success) {
        categoryData = categoryDataResponse.data;
    }

    const handleCategory = (category: string) => {
        dispatch(filterByCategory({ category }));
    };

    const getFilteredAndSortedProducts = () => {
        let filteredProducts = selectedCategory.category
            ? selectedCategory.category === 'All'
                ? productData
                : productData.filter((product: Product) => product.categories.some(cat => cat.name === selectedCategory.category))
            : productData;

        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product: Product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        switch (sortBy) {
            case 'rated':
                return filteredProducts.slice().sort((a: Product, b: Product) => b.rating - a.rating);
            case 'highPrice':
                return filteredProducts.slice().sort((a: Product, b: Product) => b.price - a.price);
            case 'lowPrice':
                return filteredProducts.slice().sort((a: Product, b: Product) => a.price - b.price);
            case 'latest':
                return filteredProducts.slice().sort((a: Product, b: Product) => parseInt(b._id.substring(0, 8), 16) - parseInt(a._id.substring(0, 8), 16));
            default:
                return filteredProducts;
        }
    };

    const filteredProducts = getFilteredAndSortedProducts();

    useEffect(() => {
        getFilteredAndSortedProducts();
    }, [sortBy, selectedCategory, searchQuery]);

    return (
        <div>
            <div className="shop flex justify-center items-center">
                <h1 className='text-5xl tracking-widest'>Shop</h1>
            </div>
            <div className='container mx-auto'>
                <div className='sm:px-12 2xl:px-32 grid grid-cols-12 py-20 gap-4'>
                    <div className="col-span-12 lg:col-span-4 xl:col-span-3 px-3 mb-10">
                        <div className='bg-gray-100 px-6 py-6 rounded-xl mb-6'>
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                        </div>
                        <div className='bg-gray-100 px-6 py-6 rounded-xl mb-6'>
                            <p className='text-2xl mb-3 tracking-wider'>Categories</p>
                            <div className='w-24 h-[2px] bg-gray-300 mb-8'></div>
                            <div
                                onClick={() => handleCategory('All')}
                                className={`flex gap-1 my-4 items-center cursor-pointer ${selectedCategory.category === 'All' ? 'text-[#66a15b]' : 'text-gray-600'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                <p className='text-md tracking-wider hover:text-[#66a15b]'>All</p>
                            </div>
                            <div className='w-full h-[1px] bg-gray-300'></div>
                            {
                                categoryData?.map((category: { name: string }, index: number) => (
                                    <div key={index}>
                                        <div
                                            onClick={() => handleCategory(category.name)}
                                            className={`flex gap-1 my-4 items-center cursor-pointer ${selectedCategory.category === category.name ? 'text-[#66a15b]' : 'text-gray-600'
                                                }`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                            <p className='text-md tracking-wider hover:text-[#66a15b]'>{category.name}</p>
                                        </div>
                                        {
                                            index + 1 !== categoryData.length && <div className='w-full h-[1px] bg-gray-300'></div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className='bg-gray-100 px-6 py-6 rounded-xl'>
                            <p className='text-2xl mb-3 tracking-wider'>Sort By</p>
                            <div className='w-24 h-[2px] bg-gray-300 mb-8'></div>
                            <div className="grid grid-cols-2 gap-5">
                                <p
                                    className={`tracking-wider text-center rounded-md py-3 cursor-pointer ${sortBy === 'latest' ? 'bg-[#66a15b] text-white' : 'bg-white'}`}
                                    onClick={() => setSortBy('latest')}
                                >
                                    Latest
                                </p>
                                <p
                                    className={`tracking-wider text-center rounded-md py-3 cursor-pointer ${sortBy === 'highPrice' ? 'bg-[#66a15b] text-white' : 'bg-white'}`}
                                    onClick={() => setSortBy('highPrice')}
                                >
                                    High Price
                                </p>
                                <p
                                    className={`tracking-wider text-center rounded-md py-3 cursor-pointer ${sortBy === 'lowPrice' ? 'bg-[#66a15b] text-white' : 'bg-white'}`}
                                    onClick={() => setSortBy('lowPrice')}
                                >
                                    Low Price
                                </p>
                                <p
                                    className={`tracking-wider text-center rounded-md py-3 cursor-pointer ${sortBy === 'rated' ? 'bg-[#66a15b] text-white' : 'bg-white'}`}
                                    onClick={() => setSortBy('rated')}
                                >
                                    Rating
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 xl:col-span-9">
                        <div className='flex items-center gap-1 justify-center border w-56 mx-auto py-3 rounded-md'>
                            <p className='font-bold text-[#66a15b]'>{filteredProducts?.length}</p>
                            <p className=''>Product Found of </p>
                            <p className='font-bold text-[#66a15b]'>{productData?.length}</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                            {
                                filteredProducts.map((product: Product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
