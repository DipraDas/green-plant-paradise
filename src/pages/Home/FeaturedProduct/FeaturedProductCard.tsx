import { useNavigate } from 'react-router-dom';
import OutlineButton from '../../../components/button/outlineButton/OutlineButton';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { toast } from 'sonner';
import { useGetSingleProductQuery } from '../../../redux/features/product/productApi';

interface Category {
    name: string;
}

interface Product {
    _id: string,
    image: string;
    title: string;
    price: number;
    featured: boolean;
    rating: number;
    categories: Category[];
}

interface FeaturedProductCardProps {
    product: Product;
}

const FeaturedProductCard = ({ product }: FeaturedProductCardProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();



    const renderStars = (rating: number, color: string) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} style={{ color }}>&#9733;</span>);
            } else {
                stars.push(<span key={i} style={{ color }}>&#9734;</span>);
            }
        }
        return stars;
    };

    const handleAddToCart = () => {
        const productId = product._id;
        const cartItem = {
            id: productId,
            title: product.title,
            price: product.price,
            category: product.categories[0].name
        };
        // const { data } = useGetSingleProductQuery(productId);
        // console.log('>>', data) 
        dispatch(addToCart(cartItem));
        toast.success('Product added to cart')
    };

    return (
        <div
            onClick={() => navigate(`./productDetails/${product._id}`)}
            className='text-center pb-8 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-110'
        >
            <img className='w-80 mx-auto h-56' src={product.image} alt="" />
            <p className='font-semibold mb-1'>{product.title}</p>
            <p className='font-semibold text-xl mb-1'>$ {product.price}</p>
            <div className='mb-4'>
                {renderStars(product.rating, '#66a15b')}
            </div>
            <div onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
            }}>
                <OutlineButton title='ADD TO CART' />
            </div>
        </div>

    );
};

export default FeaturedProductCard;