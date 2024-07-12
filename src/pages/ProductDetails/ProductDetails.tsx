import p4 from '../../assets/images/product/plant-4.jpg'
import PrimaryButton from '../../components/button/primaryButton/PrimaryButton';

const ProductDetails = () => {
    return (
        <div>
            <div className="container mx-auto mt-20 mb-20">
                <div className="sm:px-12 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="border shadow-md w-4/5 mx-auto">
                        <img src={p4} alt="" />
                    </div>
                    <div className='px-10'>
                        <p className='text-4xl font-semibold mb-5'>
                            Alocasia Chantrieri
                        </p>
                        <p className='text-2xl font-semibold text-[#66a15b] mb-5'>
                            $200.00
                        </p>
                        <div className='flex gap-1 items-center mb-5'>
                            <p className='text-gray-500'>
                                Availability :
                            </p>
                            <p className='font-bold text-green-500 '>
                                In Stock
                            </p>
                        </div>
                        <p className='text-gray-400 tracking-wider mb-10'>
                            Imagine that human life cycles resembled those of the earliest plants. If you think about this analogy, you may begin to realize that many plants.
                        </p>
                        <div className='mb-8'>
                            <PrimaryButton title='ADD TO CART' />
                        </div>
                        <div className='flex gap-1 items-center mb-5'>
                            <p className='text-gray-500'>
                                Category :
                            </p>
                            <p className='font-bold text-[#66a15b] '>
                                Bonsai
                            </p>
                        </div>
                        <div className='flex gap-3 items-center mb-5'>
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
                        </div>
                    </div>
                </div>
                <div className='px-10 sm:px-12 2xl:px-32 mt-20'>
                    <p className='text-xl tracking-wider pb-2 border-b-2 border-[#66a15b] inline font-medium'>Description</p>
                    <p className='mt-7 text-gray-500 text-base tracking-wider font-normal leading-9'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque integer, quam dapibus per risus donec semper vulputate interdum, imperdiet mus rhoncus commodo ultricies class urna tincidunt. Imperdiet vitae lacus etiam metus ut nisl curae, conubia enim scelerisque quis facilisis torquent, ultricies orci faucibus dictumst mauris curabitur. Massa risus nec sociosqu fames montes accumsan iaculis justo turpis luctusThis generator uses a dictionary of Latin words to construct passages of Lorem Ipsum text that meet your desired length. The sentence and paragraph durations and punctuation dispersal are calculated using Gaussian distribution, based on statistical analysis of real world texts. This ensures that the generated Lorem Ipsum text is unique, free of repetition and also resembles readable text as much as possible.z
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;