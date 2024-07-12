import plant4 from '../../../assets/images/product/plant-4.jpg';
import OutlineButton from '../../../components/button/outlineButton/OutlineButton';

const FeaturedProductCard = () => {
    return (
        <div className='text-center'>
            <img className='w-80 mx-auto' src={plant4} alt="" />
            <p className='font-semibold mb-1'>Biotech Garden Jade Plant</p>
            <p className='font-semibold text-xl mb-4' >$22.00</p>
            <div>
                <OutlineButton title='ADD TO CART' />
            </div>
        </div>
    );
};

export default FeaturedProductCard;