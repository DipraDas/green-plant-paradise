import Modal from 'react-modal';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useGetCategoryQuery } from '../../redux/features/category/categoryApi';
import { useCreateProductMutation } from '../../redux/features/product/productApi';
import { toast } from 'sonner';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
        borderRadius: '15px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};

Modal.setAppElement('#root');

// Define the type for the props
interface AddProductModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ modalIsOpen, closeModal }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [createProduct] = useCreateProductMutation();
    const imageHostKey = import.meta.env.VITE_imgbb_key;
    const { data } = useGetCategoryQuery(undefined);

    let categoryData = []
    if (data && data.success) {
        categoryData = data.data
    }

    const handleAddProduct: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Inserting product');
        try {
            const image = data.image[0];
            const formData = new FormData();
            formData.append("image", image);
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

            const imgResponse = await fetch(url, {
                method: "POST",
                body: formData,
            });
            const imgData = await imgResponse.json();

            if (imgData.success) {
                const price = parseInt(data.price)
                const productData = {
                    title: data.title,
                    image: imgData.data.url,
                    price,
                    description: data.description,
                    briefDescription: data.briefDescription,
                    quantity: parseInt(data.quantity),
                    rating: parseInt(data.rating),
                    categories: [data.category], // Assuming data.categories is an array of category IDs
                    featured: data.featuredProduct
                };

                if (productData.categories.length === 0) {
                    toast.error("Product must have at least one category.", { id: toastId, duration: 2000 })
                }
                const res = await createProduct(productData).unwrap();
                console.log(res)
                reset()
                toast.success("Inserted Successfully", { id: toastId, duration: 2000 });
                closeModal();
            } else {
                // throw new Error("Image upload failed.");
                toast.error("Image upload failed.", { id: toastId, duration: 2000 })
            }
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error("Something went wrong. Please try again letter!", { id: toastId, duration: 2000 })

        }
    };


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add Product Modal"
        >
            <div className='flex justify-between items-center mb-4 px-4'>
                <h2 className='text-2xl tracking-wider'>ADD PRODUCT</h2>
                <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="size-7 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <form onSubmit={handleSubmit(handleAddProduct)} className='px-4'>
                {/* Form fields for adding a product */}
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
                        {errors.description && <p className="text-red-500">{String(errors.description.message)}</p>}
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
                <div className='grid grid-cols-4 gap-8 mt-4'>
                    <div className='flex flex-col'>
                        <label className='mb-2 tracking-wider'>Category</label>
                        <select
                            className="select select-bordered w-full max-w-xs"
                            {...register("category", { required: "Category is required" })}
                        >
                            <option value="" disabled selected>Select a category</option>
                            {
                                categoryData.length &&
                                categoryData.map(category => (
                                    <option value={`${category._id}`}>{category.name}</option>
                                ))
                            }
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
                <div className='grid grid-cols-12 gap-8 mt-4 items-center'>
                    <div className='flex flex-col col-span-8'>
                        <label className='mb-2 tracking-wider'>Product Image</label>
                        <input type="file" className="file-input file-input-bordered w-full"
                            {...register("image", { required: "Product image is required" })}
                        />
                        {errors.image && <p className="text-red-500">{String(errors.image.message)}</p>}
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
        </Modal >
    );
};

export default AddProductModal;