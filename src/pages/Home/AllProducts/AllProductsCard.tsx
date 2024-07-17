import { useNavigate } from "react-router-dom";

interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    rating: number
}
interface FeaturedProductCardProps {
    product: Product;
}

const AllProductsCard = ({ product }: FeaturedProductCardProps) => {

    const navigate = useNavigate();

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
    return (
        <div className='relative text-center border rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer'>
            <img className='w-80 h-[300px] rounded-t-lg' src={product.image} alt="Biotech Garden Jade Plant" />
            <div className='p-4 bg-gray-100 rounded-b-lg'>
                <p className='font-semibold mb-1'>{product.title}</p>
                <p className='font-semibold text-2xl'>$ {product.price}</p>
                <div>
                    {renderStars(product.rating, '#66a15b')}
                </div>
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-50 rounded opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                <div
                    onClick={() => navigate(`./productDetails/${product._id}`)}
                    className='text-black text-sm font-bold py-2 px-4 bg-white rounded-lg tracking-widest'
                >
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