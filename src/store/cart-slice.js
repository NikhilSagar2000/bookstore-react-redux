import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        addToCart(state, action) { 
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
            else {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1
                });
            }
        },
        removeFromCart(state, action) {
            const removedItemId = action.payload;
            const existingItem = state.items.find(item => item.id === removedItemId);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== removedItemId);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        setInitialState(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        }
    }

})
export const cartActions = cartSlice.actions;

export default cartSlice;