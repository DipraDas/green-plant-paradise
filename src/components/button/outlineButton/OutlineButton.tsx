
type PrimaryButtonProps = {
    title: string;
};


const OutlineButton: React.FC<PrimaryButtonProps> = ({ title }) => {
    return (
        <div>
            <h1 className="cursor-pointer py-2 inline px-3 rounded-md text-sm tracking-widest text-black font-bold border border-[#66a15b] hover:bg-[#66a15b] hover:text-white duration-300">
                {title}
            </h1>
        </div>
    );
};

export default OutlineButton;
