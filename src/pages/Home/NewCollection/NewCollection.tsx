import plant1 from '../../../assets/images/product/plant-1.jpg';
import PrimaryButton from '../../../components/button/primaryButton/PrimaryButton';

const NewCollection = () => {
    return (
        <div className="container mx-auto mt-20 mb-20">
            <div className="px-32 grid grid-cols-12 justify-between items-center gap-12">
                <div className='col-span-6'>
                    <img src={plant1} alt="" />
                </div>
                <div className='col-span-6'>
                    <p className='text-xl font-semibold text-gray-500 mb-3 tracking-wider'>
                        New Collection 2024
                    </p>
                    <p className='text-3xl font-semibold text-black mb-8 tracking-widest'>
                        House Shape Plant
                    </p>
                    <p className='text-base font-normal text-gray-700 mb-5 tracking-wider'>
                        The growth of a plant involves several stages. Fast, a plot of land is selected. The land is next dug well with the help of the spade. The soil is ground into dust and manure both biological and the chemical is added to the soil. Then seeds are collected from the market and sown on the bed.
                    </p>
                    <div className='h-16 w-[1px] bg-gray-400 ms-14'>
                    </div>
                    <div className='mt-10'>
                        <PrimaryButton title='SHOP NOW' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;