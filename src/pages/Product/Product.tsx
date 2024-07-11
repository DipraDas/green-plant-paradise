import { useState } from 'react';
import Modal from 'react-modal';
import './Product.css';
import { useForm } from "react-hook-form"

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
        backgroundColor: 'rgba(0, 0, 0, 0.75)' // Dark background
    }
};

Modal.setAppElement('#root');

const Product = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    let subtitle;

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="">
            <div className='container mx-auto py-12'>
                <div className='px-20'>
                    <div className='flex justify-between items-center mb-10'>
                        <p className='text-4xl tracking-widest'>All Products</p>
                        <div
                            className='px-5 py-3 bg-[#66a15b] rounded-lg cursor-pointer'
                            onClick={openModal}
                        >
                            <p className='text-white tracking-wider'>Add Product</p>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Category</th>
                                    <th className='flex justify-end'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>My tree plant</td>
                                    <td>Dolar ipsum dolar ipsum folar ipsum Dolar ipsum dolar ipsum folar ipsum </td>
                                    <td>300</td>
                                    <td className='flex items-center gap-2'>
                                        <div className='w-[10px] h-[10px] rounded-full bg-green-400'>
                                        </div>
                                        <p>20</p>
                                    </td>
                                    <td>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>My tree plant</td>
                                    <td>Dolar ipsum dolar ipsum folar ipsum Dolar ipsum dolar ipsum folar ipsum </td>
                                    <td>300</td>
                                    <td className='flex items-center gap-2'>
                                        <div className='w-[10px] h-[10px] rounded-full bg-green-400'>
                                        </div>
                                        <p>20</p>
                                    </td>
                                    <td>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>My tree plant</td>
                                    <td>Dolar ipsum dolar ipsum folar ipsum Dolar ipsum dolar ipsum folar ipsum </td>
                                    <td>300</td>
                                    <td className='flex items-center gap-2'>
                                        <div className='w-[10px] h-[10px] rounded-full bg-green-400'>
                                        </div>
                                        <p>20</p>
                                    </td>
                                    <td>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>My tree plant</td>
                                    <td>Dolar ipsum dolar ipsum folar ipsum Dolar ipsum dolar ipsum folar ipsum </td>
                                    <td>300</td>
                                    <td className='flex items-center gap-2'>
                                        <div className='w-[10px] h-[10px] rounded-full bg-green-400'>
                                        </div>
                                        <p>20</p>
                                    </td>
                                    <td>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>My tree plant</td>
                                    <td>Dolar ipsum dolar ipsum folar ipsum Dolar ipsum dolar ipsum folar ipsum </td>
                                    <td>300</td>
                                    <td className='flex items-center gap-2'>
                                        <div className='w-[10px] h-[10px] rounded-full bg-green-400'>
                                        </div>
                                        <p>20</p>
                                    </td>
                                    <td>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Add Product Modal"
            >
                <div className='flex justify-between items-center mb-4 px-4'>
                    <h2
                        className='text-2xl tracking-wider'
                        ref={(_subtitle) => (subtitle = _subtitle)}>
                        ADD PRODUCT
                    </h2>
                    <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-7 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <form onSubmit={onSubmit} className='px-4'>
                    <div className='grid grid-cols-2 gap-8'>
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
                        <div className='flex flex-col'>
                            <label className='mb-2 tracking-wider'>Description</label>
                            <input
                                type="text"
                                placeholder="Enter Description here"
                                className="input input-bordered w-full tracking-wider"
                                {...register("description", { required: "Description is required" })}
                            />
                            {errors.title && <p className="text-red-500">{String(errors.title.message)}</p>}
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='mb-2 tracking-wider'>Description</label>
                        <textarea
                            placeholder="Enter Brief Description"
                            className="input input-bordered w-full tracking-wider"
                            style={{ minHeight: '100px', paddingTop: 5 }}
                            {...register("briefDescription", { required: "Brief Description is required" })}
                        />
                        {errors.briefDescription && <p className="text-red-500">{String(errors.briefDescription.message)}</p>}
                    </div>
                    <div className='grid grid-cols-3 gap-8 mt-4'>
                        <div className='flex flex-col'>
                            <label className='mb-2 tracking-wider'>Category</label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                {...register("category", { required: "Category is required" })}
                            >
                                <option value="" disabled selected>Select a category</option>
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
                                {...register("stock", { required: "Stock is required", min: { value: 0, message: "Stock cannot be negative" } })}
                            />
                            {errors.stock && <p className="text-red-500">{String(errors.stock.message)}</p>}
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-8 mt-4 items-center'>
                        <div className='flex flex-col col-span-8'>
                            <label className='mb-2 tracking-wider'>Product Image</label>
                            <input type="file" className="file-input file-input-bordered w-full" />
                        </div>
                        <div className='col-span-4'>
                            <div className="cursor-pointer mt-9 flex items-center gap-3">
                                <input type="checkbox" className="checkbox" {...register('featuredProduct')} />
                                <p className="text">Featured Product</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className='bg-[#66a15b] rounded-xl py-3 px-10 text-white mt-8 mb-5'
                        type="submit">
                        ADD PRODUCT
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default Product;
