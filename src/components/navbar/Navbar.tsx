/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/green-paradise-logo.jpg';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useGetProductQuery } from '../../redux/features/product/productApi';
import { useState } from 'react';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'sonner';

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
    featured: boolean;
    quantity: number;
    description: string;
    briefDescription: string;
}

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const totalQuantity = useAppSelector(state => state.cart.cart.reduce((sum: number, item: any) => sum + item.quantity, 0));

    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const { data: productDataResponse } = useGetProductQuery(undefined);
    const productData = productDataResponse?.data || [];

    const searchProduct = () => {
        const filtered = productData.filter((product: Product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSearchQuery('');
    };

    const handleAddToCart = (product: Product) => {
        const cartItem = {
            id: product._id,
            title: product.title,
            price: product.price,
            category: product.categories[0].name
        };
        dispatch(addToCart(cartItem));
        toast.success('Product added to cart');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        const filtered = productData.filter((product: Product) =>
            product.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className='container mx-auto'>
            <div className='ps-28 pe-32 py-8'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <div style={{ maxWidth: '30%' }}>
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <img src={logo} className='w-40' alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className='flex border items-center bg-gray-50 rounded-full'>
                            <input
                                type="text"
                                placeholder='Search Here . . .'
                                className='rounded-full px-6 py-3 w-96 bg-gray-50 outline-none tracking-wider'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div onClick={searchProduct} className='bg-[#66a15b] py-[14px] px-6 rounded-r-full cursor-pointer'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="white"
                                    className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div onClick={() => navigate('/cart')} className="indicator cursor-pointer">
                            {totalQuantity > 0 && (
                                <span className="indicator-item badge bg-[#66a15b] text-white">{totalQuantity}</span>
                            )}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                    <dialog open className="modal modal-open z-50">
                        <div className="modal-box w-11/12 max-w-5xl min-h-[550px] max-h-[550px] relative">
                            <button className="absolute top-2 right-2 btn btn-sm btn-circle" onClick={closeModal}>✕</button>
                            <h3 className="font-bold text-lg mb-4">Search Results</h3>
                            <div className='flex border items-center bg-gray-50 rounded-full mb-4'>
                                <input
                                    type="text"
                                    placeholder='Search Here . . .'
                                    className='rounded-full px-6 py-3 w-full bg-gray-50 outline-none tracking-wider'
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            {
                                filteredProducts.length ?
                                    (
                                        <div className="overflow-x-auto max-h-96">
                                            <table className="table w-full">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Category</th>
                                                        <th>Price</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="overflow-y-scroll max-h-80">
                                                    {filteredProducts.map((product) => (
                                                        <tr key={product._id}>
                                                            <td>{product.title}</td>
                                                            <td>{product.categories[0]?.name}</td>
                                                            <td>${product.price}</td>
                                                            <td className='flex justify-end'>
                                                                <button
                                                                    className="btn btn-sm btn-outline"
                                                                    onClick={() => handleAddToCart(product)}
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                    :
                                    <div className='font-bold tracking-widest text-red-700 text-lg'>No product found ! ! !</div>
                            }
                        </div>
                    </dialog>
                </>
            )}
        </div>
    );
};

export default Navbar;
