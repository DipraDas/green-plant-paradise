import { useParams } from 'react-router-dom';
import PrimaryButton from '../../components/button/primaryButton/PrimaryButton';
import { useGetSingleProductQuery } from '../../redux/features/product/productApi';
import { useEffect } from 'react';

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id)

    const { data } = useGetSingleProductQuery(id);
    const productData = data?.data;

    console.log(productData);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="container mx-auto mt-20 mb-20">
                <div className="sm:px-12 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="border shadow-md  mx-auto w-[500px] h-[500px] flex justify-center items-center">
                        <img className='w-[450px]' src={productData?.image} alt="" />
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
                                        <p className='font-bold text-green-500 '>
                                            In Stock
                                        </p>
                                    )
                                    :
                                    (
                                        <p className='font-bold text-red-500 '>
                                            Not In Stock
                                        </p>
                                    )
                            }

                        </div>
                        <p className='text-gray-400 tracking-wider mb-10'>
                            {productData?.description}
                        </p>
                        <div className='mb-8'>
                            <PrimaryButton title='ADD TO CART' />
                        </div>
                        <div className='flex gap-1 items-center mb-2'>
                            <p className='text-gray-500'>
                                Category :
                            </p>
                            <p className='font-bold text-[#66a15b] '>
                                {productData?.categories[0]?.name}
                            </p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <p className='text-gray-500'>
                                In Stock :
                            </p>
                            <p className='font-bold text-[#66a15b] '>
                                {productData?.quantity}
                            </p>
                        </div>
                        {/* <div className='flex gap-3 items-center mb-5'>
                            <p className='text-gray-500 min-w-10'>
                                Tags :
                            </p>
                            <div className='flex gap-2'>
                                <p className='font-bold text-gray-600 bg-green-100 px-3 py-[2px] rounded-md'>
                                    Plant
                                </p>
                                <p className='font-bold text-gray-600 bg-green-100 px-3 py-[2px] rounded-md'>
                                    Green
                                </p>
                                <p className='font-bold text-gray-600 bg-green-100 px-3 py-[2px] rounded-md'>
                                    House Decor
                                </p>
                                <p className='font-bold text-gray-600 bg-green-100 px-3 py-[2px] rounded-md'>
                                    Premium
                                </p>
                            </div>
                        </div> */}
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