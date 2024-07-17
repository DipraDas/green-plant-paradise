import { useNavigate } from 'react-router-dom';
import OutlineButton from '../../../components/button/outlineButton/OutlineButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/features/cart/cartSlice';
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

interface TCartItem {
    id: string;
    title: string;
    price: number;
    category: string; // Changed from Category to string
}

interface FeaturedProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: FeaturedProductCardProps) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        <div
            onClick={() => navigate(`/productDetails/${product._id}`)}
            className='text-center pb-8 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer'
        >
            <img className='w-80 mx-auto h-72' src={product.image} alt="" />
            <p className='font-semibold mb-1'>{product.title}</p>
            <p className='font-semibold text-xl mb-1'>$ {product.price}</p>
            <div className='mb-4'>
                {renderStars(product.rating, '#66a15b')}
            </div>
            <div onClick={(e) => {
                e.stopPropagation();
                handleAddToCart()
            }}>
                <OutlineButton title='ADD TO CART' />
            </div>
        </div>
    );
};

export default ProductCard;
