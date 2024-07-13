/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/features/cart/cartSlice';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../redux/hooks';

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
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

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = 40;
    const discount = 0;
    const totalAmount = subtotal + deliveryFee - discount;

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
                            <p className="tracking-wider font-medium">$ {subtotal}</p>
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
                        <div className="py-3 w-full text-center mt-6 mb-2 rounded-lg bg-[#66a15b] cursor-pointer" >
                            <p className="text-white tracking-wider">Proceed to Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
