import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto">
                <div className="px-32 py-5 flex justify-center gap-4 lg:gap-6 items-center ">
                    <Link to="/" className="text-xs font-semibold cursor-pointer text-gray-600 tracking-widest">HOME</Link>
                    <div className="w-[2px] h-ful bg-gray-300"></div>
                    <Link to="/shop" className="text-xs font-semibold cursor-pointer text-gray-600 tracking-widest">SHOP</Link>
                    <div className="w-[2px] h-ful bg-gray-300"></div>
                    <Link to="/category" className="text-xs font-semibold cursor-pointer text-gray-600 tracking-widest text-center">ADD CATEGORY</Link>
                    <div className="w-[2px] h-ful bg-gray-300"></div>
                    <Link to="/product" className="text-xs font-semibold cursor-pointer text-gray-600 tracking-widest text-center">ADD PRODUCT</Link>
                </div>
            </div>
        </div>
    );
};

export default BottomNavbar;