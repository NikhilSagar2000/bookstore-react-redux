import { configureStore } from '@reduxjs/toolkit';
import toggleCartSlice from './toggleCart-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: { toggleCart: toggleCartSlice.reducer, cart: cartSlice.reducer }
})

export default store;

