import t1 from '../../../assets/images/product/t1.png';
import t2 from '../../../assets/images/product/t2.png';
import t3 from '../../../assets/images/product/t3.png';

import PrimaryButton from '../../../components/button/primaryButton/PrimaryButton';

const HeroSection = () => {
    return (
        <div className='container mx-auto'>
            <div className="px-32 mt-6 grid grid-cols-12 gap-6 h-[550px]">
                <div className=" bg-gray-100 col-span-8 px-14 flex justify-between items-center">
                    <div>
                        <h1 className='text-sm tracking-widest text-[#66a15b] font-bold mb-4'>SALE UPTO 40% OFF</h1>
                        <h1 className='text-4xl tracking-widest font-bold'>Plants For</h1>
                        <h1 className='text-4xl tracking-widest font-bold'>Your House</h1>
                        <div className='flex items-end mt-5 gap-1'>
                            <p className='text-gray-500 text-lg tracking-wide'>New Price:</p>
                            <p className='text-2xl font-semibold tracking-wider text-[#66a15b]'> $34.00</p>
                        </div>
                        <div className='mt-10'>
                            <PrimaryButton title='SHOP NOW' />
                        </div>
                    </div>
                    <div>
                        <img src={t1} alt="" />
                    </div>
                </div>
                <div className="col-span-4 flex flex-col gap-6">
                    <div className='bg-gray-100 h-full px-8 flex items-center relative' >
                        <div>
                            <p className='text-3xl tracking-wider font-bold -mt-3'>Hanging</p>
                            <p className='text-3xl tracking-wider font-bold'>Plants</p>
                            <p className='text-sm text-gray-500 tracking-wider my-2 w-3/5'>Hanging plants add a touch of natural beauty.</p>
                            <p className='text-xl font-semibold tracking-wider text-[#66a15b]'> $240.00</p>
                        </div>
                        <div className='absolute right-0'>
                            <img src={t2} alt="" />
                        </div>
                    </div>
                    <div className='bg-gray-100 h-full px-8 flex items-center' >
                        <div>
                            <p className='text-3xl tracking-wider font-bold -mt-3'>Grow</p>
                            <p className='text-3xl tracking-wider font-bold'>Orchids</p>
                            <p className='text-sm text-gray-500 tracking-wider my-2 w-4/5'>Growing orchids yields stunning, exotic blooms.</p>
                            <p className='text-xl font-semibold tracking-wider text-[#66a15b]'> $373.00</p>
                        </div>
                        <div className=''>
                            <img className='w-52' src={t3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;