import React from 'react';

type PrimaryButtonProps = {
    title: string;
    navigate: (navigateTo: string) => void;
    navigateTo: string
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, navigate, navigateTo }) => {
    return (
        <div>
            <h1 onClick={() => navigate(navigateTo)} className="py-3 bg-[#66a15b] inline px-4 text-sm tracking-widest text-white font-bold cursor-pointer">
                {title}
            </h1>
        </div>
    );
};

export default PrimaryButton;
