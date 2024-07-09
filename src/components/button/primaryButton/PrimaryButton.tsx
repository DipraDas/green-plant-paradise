import React from 'react';

type PrimaryButtonProps = {
    title: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title }) => {
    return (
        <div>
            <h1 className="py-3 bg-[#66a15b] inline px-4 text-sm tracking-widest text-white font-bold">
                {title}
            </h1>
        </div>
    );
};

export default PrimaryButton;
