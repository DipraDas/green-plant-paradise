import { useState } from 'react';
import Modal from 'react-modal';
import './Product.css';
import AddProductModal from './AddProductModal';
import { useDeleteProductMutation, useGetProductQuery } from '../../redux/features/product/productApi';
import EditProductModal from './EditProductModal';
import Swal from 'sweetalert2';

Modal.setAppElement('#root');

const Product = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editProductData, setEditProductData] = useState(null);
    const [deleteProduct] = useDeleteProductMutation();

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };

    const openEditModal = (product) => {
        setEditProductData(product);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => setIsEditModalOpen(false);

    const { data } = useGetProductQuery(undefined);

    let productData = [];
    if (data && data.success) {
        productData = data.data;
    }

    const handleDetetingProduct = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                await deleteProduct(id).unwrap();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted.",
                    icon: "success"
                });
            } catch (err) {
                Swal.fire({
                    title: "Error!",
                    text: "There was an error deleting the product.",
                    icon: "error"
                });
            }
        }
    };

    return (
        <div className="">
            <div className='lg:container mx-2 lg:mx-auto py-12'>
                <div className='lg:px-20'>
                    <div className='flex justify-between items-center md:items-center mb-10 gap-4'>
                        <p className='text-2xl lg:text-4xl tracking-widest px-4 md:px-0'>All Products</p>
                        <div
                            className='px-3 lg:px-5 py-1 lg:py-3 bg-[#66a15b] rounded-lg cursor-pointer'
                            onClick={openAddModal}
                        >
                            <p className='text-white text-center tracking-wider text-sm lg:text-base'>Add Product</p>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        {
                            productData.length ?
                                <table className="table table-zebra">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th></th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Stock</th>
                                            <th>Category</th>
                                            <th className='flex justify-end'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productData.map((product, index) => (
                                                <tr key={product._id}>
                                                    <th>{index + 1}</th>
                                                    <th><img className='w-32 border' src={product.image} alt="" /></th>
                                                    <td>{product.title}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.categories[0].name}</td>
                                                    <td className='flex justify-end gap-2'>
                                                        <button
                                                            className="btn btn-xs bg-violet-400 text-white tracking-wider"
                                                            onClick={() => openEditModal(product)}
                                                        >
                                                            EDIT
                                                        </button>
                                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider" onClick={() => handleDetetingProduct(product._id)}>DELETE</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table> :
                                <div>
                                    No product found
                                </div>
                        }
                    </div>
                </div>
            </div>
            <AddProductModal
                modalIsOpen={isAddModalOpen}
                closeModal={closeAddModal}
            />
            <EditProductModal
                modalIsOpen={isEditModalOpen}
                closeModal={closeEditModal}
                initialData={editProductData}
            />
        </div>
    );
};

export default Product;