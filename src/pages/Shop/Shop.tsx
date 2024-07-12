import { useState } from 'react';
import './Shop.css';
import FeaturedProductCard from '../Home/FeaturedProduct/FeaturedProductCard';

const Shop = () => {

    const [selectedSortOption, setSelectedSortOption] = useState('default');

    return (
        <div>
            <div className="shop flex justify-center items-center">
                <h1 className='text-5xl tracking-widest'>Shop</h1>
            </div>
            <div className='container mx-auto'>
                <div className='px-32 grid grid-cols-12 py-20'>
                    <div className="col-span-3">
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
                            <div className='flex gap-1 my-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                <p className='text-md tracking-wider text-gray-600 hover:text-[#66a15b] cursor-pointer'>All [65]</p>
                            </div>
                            <div className='w-full h-[1px] bg-gray-300'></div>
                            <div className='flex gap-1 my-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                <p className='text-md tracking-wider text-gray-600 hover:text-[#66a15b] cursor-pointer'>Bonsai [23]</p>
                            </div>
                            <div className='w-full h-[1px] bg-gray-300'></div>
                            <div className='flex gap-1 my-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                <p className='text-md tracking-wider text-gray-600 hover:text-[#66a15b] cursor-pointer'>Money Plant [14]</p>
                            </div>
                            <div className='w-full h-[1px] bg-gray-300'></div>
                            <div className='flex gap-1 my-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                <p className='text-md tracking-wider text-gray-600 hover:text-[#66a15b] cursor-pointer'>Home Tree [10]</p>
                            </div>
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
                    <div className="col-span-9">
                        <div className='flex items-center gap-1 justify-center border w-56 mx-auto py-3 rounded-md'>
                            <p className='font-bold text-[#66a15b]'>12</p>
                            <p className=''>Product Found of </p>
                            <p className='font-bold text-[#66a15b]'>30</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4 mt-10 mb-10'>
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;