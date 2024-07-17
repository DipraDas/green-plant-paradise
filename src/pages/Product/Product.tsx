import { useState } from 'react';
import Modal from 'react-modal';
import './Product.css';
import AddProductModal from './AddProductModal';
import { useGetProductQuery } from '../../redux/features/product/productApi';
import EditProductModal from './EditProductModal';

Modal.setAppElement('#root');

const Product = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editProductData, setEditProductData] = useState(null);

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

    return (
        <div className="">
            <div className='container mx-auto py-12'>
                <div className='px-20'>
                    <div className='flex justify-between items-center mb-10'>
                        <p className='text-4xl tracking-widest'>All Products</p>
                        <div
                            className='px-5 py-3 bg-[#66a15b] rounded-lg cursor-pointer'
                            onClick={openAddModal}
                        >
                            <p className='text-white tracking-wider'>Add Product</p>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        {
                            productData.length ?
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
                                        {
                                            productData.map((product, index) => (
                                                <tr key={product._id}>
                                                    <th>{index + 1}</th>
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
                                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
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