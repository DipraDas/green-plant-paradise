const TopHeader = () => {
    return (
        <div className="bg-[#66a15b]">
            <div className="lg:container mx-auto py-5">
                <div className="flex flex-col md:flex-row justify-between items-center px-10 lg:px-32">
                    <p className="tracking-wide text-white text-sm mb-4 md:mb-0">Welcome to our virtual store!</p>
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