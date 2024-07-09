const BottomNavbar = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto">
                <div className="px-32 py-5 flex justify-center gap-6">
                    <p className="text-xs font-semibold cursor-pointer text-gray-600 tracking-widest">HOME</p>
                    <div className="w-[2px] h-ful bg-gray-300"></div>
                    <p className="text-xs font-semibold cursor-pointer text-gray-600 tracking-widest">SHOP</p>
                    <div className="w-[2px] h-ful bg-gray-300"></div>
                    <p className="text-xs font-semibold cursor-pointer text-gray-600 tracking-widest">ADD CATEGORY</p>
                    <div className="w-[2px] h-ful bg-gray-300"></div>
                    <p className="text-xs font-semibold cursor-pointer text-gray-600 tracking-widest">ADD PRODUCT</p>
                </div>
            </div>
        </div>
    );
};

export default BottomNavbar;