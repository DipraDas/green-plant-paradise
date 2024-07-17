import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../redux/features/product/productApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'sonner';

interface Category {
    name: string;
}

interface Product {
    _id: string;
    image: string;
    title: string;
    price: number;
    featured: boolean;
    rating: number;
    categories: Category[];
    quantity: number;
    description: string;
    briefDescription: string;
}

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const { data } = useGetSingleProductQuery(id);
    const productData = data?.data;

    console.log(productData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddToCart = (product: Product) => {
        fetch(`http://localhost:5000/api/v1/product/${product._id}`)
            .then(res => res.json())
            .then(data => {
                console.log('>>----', data.data);
                if (data.data.quantity >= 1) {
                    const cartItem = {
                        id: product._id,
                        title: product.title,
                        price: product.price,
                        category: product.categories[0].name
                    };
                    dispatch(addToCart(cartItem));
                    toast.success('Product added to cart');
                } else {
                    toast.warning('Product is not available at this moment');
                }
            });
    };

    return (
        <div>
            <div className="container mx-auto mt-20 mb-20">
                <div className="sm:px-12 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="border shadow-md mx-auto w-[500px] h-[500px] flex justify-center items-center">
                        <img className='w-[450px]' src={productData?.image} alt={productData?.title} />
                    </div>
                    <div className='px-10'>
                        <p className='text-4xl font-semibold mb-5'>
                            {productData?.title}
                        </p>
                        <p className='text-2xl font-semibold text-[#66a15b] mb-5'>
                            $ {productData?.price}
                        </p>
                        <div className='flex gap-1 items-center mb-5'>
                            <p className='text-gray-500'>
                                Availability :
                            </p>
                            {
                                productData?.quantity > 0 ?
                                    (
                                        <p className='font-bold text-green-500'>
                                            In Stock
                                        </p>
                                    )
                                    :
                                    (
                                        <p className='font-bold text-red-500'>
                                            Not In Stock
                                        </p>
                                    )
                            }
                        </div>
                        <p className='text-gray-400 tracking-wider mb-10'>
                            {productData?.description}
                        </p>
                        <div className='mb-8' onClick={() => handleAddToCart(productData as Product)}>
                            <div className='py-3 px-5 bg-[#66a15b] inline text-white rounded-md tracking-wider cursor-pointer'>
                                ADD TO CART
                            </div>
                        </div>
                        <div className='flex gap-1 items-center mb-2'>
                            <p className='text-gray-500'>
                                Category :
                            </p>
                            <p className='font-bold text-[#66a15b]'>
                                {productData?.categories[0]?.name}
                            </p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <p className='text-gray-500'>
                                In Stock :
                            </p>
                            <p className='font-bold text-[#66a15b]'>
                                {productData?.quantity}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='px-10 sm:px-12 2xl:px-32 mt-20'>
                    <p className='text-xl tracking-wider pb-2 border-b-2 border-[#66a15b] inline font-medium'>Description</p>
                    <p className='mt-7 text-gray-500 text-base tracking-wider font-normal leading-9 text-justify'>
                        {productData?.briefDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;