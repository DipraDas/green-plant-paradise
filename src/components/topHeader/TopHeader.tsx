const TopHeader = () => {
    return (
        <div className="bg-[#66a15b]">
            <div className="container mx-auto py-5">
                <div className="flex justify-between items-center px-32">
                    <p className="tracking-wide text-white text-sm">Welcome to our virtual store!</p>
                    <div className="flex gap-5">
                        <a href="#about" className="tracking-wide text-white text-sm">About Us</a>
                        <div className="w-[2px] h-ful bg-gray-300"></div>
                        <a href="#footer" className="tracking-wide text-white text-sm">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;