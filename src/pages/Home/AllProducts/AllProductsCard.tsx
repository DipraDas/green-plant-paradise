import plant4 from '../../../assets/images/product/plant-4.jpg'; // Make sure to replace this with the actual path to the image
const AllProductsCard = () => {
    return (
        <div className='relative text-center border rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer'>
            <img className='w-80 rounded-t-lg' src={plant4} alt="Biotech Garden Jade Plant" />
            <div className='p-4 bg-gray-100 rounded-b-lg'>
                <p className='font-semibold mb-1'>Biotech Garden Jade Plant</p>
                <p className='font-semibold text-2xl'>$22.00</p>
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-50 rounded opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                <div className='text-black text-sm font-bold py-2 px-4 bg-white rounded-lg tracking-widest' >
                    VIEW DETAILS
                </div>
            </div>
        </div>
    );
};

export default AllProductsCard;



// <div>
// <OutlineButton title='SHOW DETAILS' />
// </div>