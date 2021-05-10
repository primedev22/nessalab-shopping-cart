import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
    cart: cartSlice,
  },
});
