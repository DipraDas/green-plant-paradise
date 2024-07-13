import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: string;
    title: string;
    category: string;
    price: number;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{
            id: string,
            title: string,
            category: string,
            price: number
        }>) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push(
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        category: action.payload.category,
                        price: action.payload.price,
                        quantity: 1,
                    });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const productIdToRemove = action.payload;
            const existingItemIndex = state.cart.findIndex(item => item.id === productIdToRemove);
            if (existingItemIndex !== -1) {
                if (state.cart[existingItemIndex].quantity === 1) {
                    state.cart.splice(existingItemIndex, 1);
                } else {
                    state.cart[existingItemIndex].quantity -= 1;
                }
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;