import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
        borderRadius: '15px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};

Modal.setAppElement('#root');

const EditProductModal = ({ modalIsOpen, closeModal, initialData }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: initialData
    });
    // Reset form values when initialData changes
    useEffect(() => {
        const dataWithDefaults = {
            ...initialData,
            featuredProduct: initialData?.featured || false
        };
        reset(dataWithDefaults);
    }, [initialData, reset]);

    console.log(initialData);
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{ ...customStyles }}
            contentLabel="Edit Product Modal"
        >
            <div className='flex justify-between items-center mb-4 px-4'>
                <h2 className='text-2xl tracking-wider'>EDIT PRODUCT</h2>
                <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="size-7 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='px-4'>
                {/* Form fields for editing a product */}
                <div className='grid grid-cols-12 gap-10'>
                    <div className='col-span-5 border flex justify-center items-center'>
                        <img
                            src={initialData?.image}
                        />
                    </div>
                    <div className='col-span-7'>
                        <div className='flex flex-col'>
                            <label className='mb-2 tracking-wider'>Title</label>
                            <input
                                type="text"
                                placeholder="Enter Title Here"
                                className="input input-bordered w-full tracking-wider"
                                {...register("title", { required: "Title is required" })}
                            />
                            {errors.title && <p className="text-red-500">{String(errors.title.message)}</p>}
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label className='mb-2 tracking-wider'>Description</label>
                            <input
                                type="text"
                                placeholder="Enter Description here"
                                className="input input-bordered w-full tracking-wider"
                                {...register("description", { required: "Description is required" })}
                            />
                            {errors.description && <p className="text-red-500">{String(errors.description.message)}</p>}
                        </div>
                        <div className='grid grid-cols-2 mt-5 gap-5'>
                            <div className='flex flex-col'>
                                <label className='mb-2 tracking-wider'>Category</label>
                                <select
                                    className="select select-bordered w-full max-w-xs"
                                    {...register("category", { required: "Category is required" })}
                                >
                                    <option value="" disabled>Select a category</option>
                                    <option value="Han Solo">Han Solo</option>
                                    <option value="Greedo">Greedo</option>
                                </select>
                                {errors.category && <p className="text-red-500">{String(errors.category.message)}</p>}
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2 tracking-wider'>Price</label>
                                <input
                                    type="number"
                                    placeholder="Enter Price here"
                                    className="input input-bordered w-full tracking-wider"
                                    {...register("price", { required: "Price is required", min: { value: 0, message: "Price cannot be negative" } })}
                                />
                                {errors.price && <p className="text-red-500">{String(errors.price.message)}</p>}
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2 tracking-wider'>Stock</label>
                                <input
                                    type="number"
                                    placeholder="Enter Stock here"
                                    className="input input-bordered w-full tracking-wider"
                                    {...register("quantity", { required: "Stock is required", min: { value: 0, message: "Stock cannot be negative" } })}
                                />
                                {errors.quantity && <p className="text-red-500">{String(errors.quantity.message)}</p>}
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2 tracking-wider'>Rating</label>
                                <input
                                    type="number"
                                    placeholder="Enter Rating here"
                                    className="input input-bordered w-full tracking-wider"
                                    {...register("rating", { required: "Rating is required", min: { value: 0, message: "Rating cannot be negative" }, max: { value: 5, message: "Rating cannot be more then 5" } })}
                                />
                                {errors.rating && <p className="text-red-500">{String(errors.rating.message)}</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-8 mt-4 items-center'>
                    <div className='flex flex-col col-span-8'>
                        <label className='mb-2 tracking-wider'>Change Image</label>
                        <input type="file" className="file-input file-input-bordered w-full" />
                    </div>
                    <div className='col-span-4'>
                        <div className="cursor-pointer mt-9 flex items-center gap-3">
                            <input type="checkbox" className="checkbox" {...register('featuredProduct')} />
                            <p className="text">Featured Product</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='mb-2 tracking-wider'>Brief Description</label>
                    <textarea
                        placeholder="Enter Brief Description"
                        className="input input-bordered w-full tracking-wider"
                        style={{ minHeight: '100px', paddingTop: 5 }}
                        {...register("briefDescription", { required: "Brief Description is required" })}
                    />
                    {errors.briefDescription && <p className="text-red-500">{String(errors.briefDescription.message)}</p>}
                </div>
                <button
                    className='bg-[#66a15b] rounded-xl py-3 px-10 text-white mt-8 mb-5'
                    type="submit">
                    EDIT PRODUCT
                </button>
            </form>
        </Modal>
    );
};

export default EditProductModal;