/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/features/cart/cartSlice';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../redux/hooks';
import { useGetProductQuery } from '../../redux/features/product/productApi';
import { toast } from 'sonner';
import { createOrder } from '../../redux/features/order/orderApi';

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { data } = useGetProductQuery(undefined);

    const openModal = () => {
        const modal = document.getElementById('checkOutModal') as HTMLDialogElement;
        modal?.showModal();
    };

    const handleModalClose = () => {
        const modal = document.getElementById('checkOutModal') as HTMLDialogElement;
        modal?.close();
        reset();
    };

    const onSubmit = async (formData: any) => {
        const orderData = cartItems.map(item => ({
            productId: item.id,
            quantity: item.quantity
        }));

        // Combine formData with orderData
        const combinedData = {
            ...formData,
            orderData: orderData
        };

        const x = await createOrder(combinedData).unwrap();
        console.log('XX>>', x);

        // // Check if ordered quantity is available in stock
        // const stockCheckResults = orderData.map(orderItem => {
        //     const product = data?.data?.find((product: any) => product._id === orderItem.productId);
        //     console.log('product', product);
        //     if (product) {
        //         return {
        //             productId: orderItem.productId,
        //             isAvailable: product.quantity >= orderItem.quantity
        //         };
        //     }
        //     return {
        //         productId: orderItem.productId,
        //         isAvailable: false
        //     };
        // });

        // const isOrderValid = stockCheckResults.every(result => result.isAvailable);

        // if (isOrderValid) {
        //     console.log("Ordered:", combinedData);
        // } else {
        //     handleModalClose();
        //     toast.warning('Stock not available for some products');
        // }
    };

    const handleRemoveFromCart = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const renderRows = () => {
        return cartItems.map((item, index) => (
            <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td className="flex justify-end gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="red"
                        className="size-6 cursor-pointer"
                        onClick={() => handleRemoveFromCart(item.id)}
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </td>
            </tr>
        ));
    };

    // Calculate total amount, subtotal, and delivery fee
    const deliveryFee = 40; // Assuming a fixed delivery fee
    const productPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const subtotal = productPrice + deliveryFee;
    const discount = 0; // Assuming no discount for now
    const totalAmount = subtotal - discount;

    return (
        <div>
            <div className='px-20'>
                <p className='text-4xl tracking-widest my-12'>Cart </p>
                <div className="grid grid-cols-12 items-start gap-8">
                    <div className="col-span-12 lg:col-span-8 border lg:mb-20 rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra min-w-full">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th className="flex justify-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderRows()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 border mb-20 rounded-lg px-6 py-5">
                        <div className="flex justify-between items-center mb-3">
                            <p className="tracking-wider text-sm text-gray-600">Product Price</p>
                            <p className="tracking-wider font-medium">$ {productPrice}</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <p className="tracking-wider text-sm text-gray-600">Delivery Fee</p>
                            <p className="tracking-wider  font-medium">$ {deliveryFee}</p>
                        </div>
                        <div className="w-full h-[1px] bg-gray-300 mb-3"></div>
                        <div className="flex justify-between items-center mb-3">
                            <p className="tracking-wider text-sm text-gray-600">Sub Total</p>
                            <p className="tracking-wider  font-medium">$ {subtotal}</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <p className="tracking-wider text-sm text-gray-600">Discount</p>
                            <p className="tracking-wider  font-medium">$ {discount}</p>
                        </div>
                        <div className="w-full h-[1px] bg-gray-300 mb-3"></div>
                        <div className="flex justify-between items-center mb-3">
                            <p className="tracking-wider text-lg text-gray-600">Total Amount</p>
                            <p className="tracking-wider text-xl font-bold">$ {totalAmount}</p>
                        </div>
                        <div onClick={openModal} className="py-3 w-full text-center mt-6 mb-2 rounded-lg bg-[#66a15b] cursor-pointer" >
                            <p className="text-white tracking-wider">Proceed to Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="checkOutModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleModalClose}>✕</button>
                    </form>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register('name', { required: 'Name is required' })}
                                className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: { value: /^[0-9]+$/, message: 'Phone number must be only digits' }
                                })}
                                className={`input input-bordered ${errors.phone ? 'input-error' : ''}`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{String(errors.phone.message)}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email address' }
                                })}
                                className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                {...register('address', { required: 'Address is required' })}
                                className={`input input-bordered ${errors.address ? 'input-error' : ''}`}
                            />
                            {errors.address && <p className="text-red-500 text-sm">{String(errors.address.message)}</p>}
                        </div>

                        <div className="modal-action">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn" onClick={handleModalClose}>Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;
