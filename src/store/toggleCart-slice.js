import { createSlice } from '@reduxjs/toolkit';

const toggleCartSlice = createSlice({
    name: 'toggelCart',
    initialState: { isCartShown: false, notification: null },
    reducers: {
        toggleCart(state) {
            state.isCartShown = !state.isCartShown;
        },
        notificationHandler(state,action) {
            state.notification = action.payload;
        }
    }
})

export const toggleActions = toggleCartSlice.actions;

export default toggleCartSlice;