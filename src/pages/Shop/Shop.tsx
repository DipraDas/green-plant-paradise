import './Shop.css';
import { useGetProductQuery } from '../../redux/features/product/productApi';
import ProductCard from './ProductCard/ProductCard';
import { useGetCategoryQuery } from '../../redux/features/category/categoryApi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { filterByCategory } from '../../redux/features/filter/filterSlice';

interface Category {
    name: string;
}
interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    categories: Category[]
}

const Shop = () => {
    const dispatch = useAppDispatch();

    const selectedCategory = useAppSelector(state => state.filter.filterByCategory);

    const { data: productDataResponse } = useGetProductQuery(undefined);
    const productData = productDataResponse?.data;

    const { data: categoryDataResponse } = useGetCategoryQuery(undefined);

    let categoryData = [];
    if (categoryDataResponse && categoryDataResponse.success) {
        categoryData = categoryDataResponse.data;
    }

    const handleCategory = (category: string) => {
        dispatch(filterByCategory({ category }));
    };

    const filteredProducts = selectedCategory
        ? productData?.filter((product: Product) => product.categories[0].name === selectedCategory.category)
        : productData;

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
                                <input type="text" className="grow" placeholder="Search" />
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
                                <p className='tracking-wider text-center bg-white rounded-md py-3'>Default</p>
                                <p className='tracking-wider text-center bg-white rounded-md py-3'>Latest</p>
                                <p className='tracking-wider text-center bg-white rounded-md py-3'>High Price</p>
                                <p className='tracking-wider text-center bg-white rounded-md py-3'>Low Price</p>
                                <p className='tracking-wider text-center bg-white rounded-md py-3'>Rated</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 xl:col-span-9">
                        <div className='flex items-center gap-1 justify-center border w-56 mx-auto py-3 rounded-md'>
                            <p className='font-bold text-[#66a15b]'>{productDataResponse?.length}</p>
                            <p className='font-bold text-[#66a15b]'>{filteredProducts?.length}</p>
                            <p className=''>Product Found of </p>
                            <p className='font-bold text-[#66a15b]'>{productData?.length}</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 mb-10'>
                            {
                                filteredProducts?.map((product: Product) => (
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
