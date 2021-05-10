import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
  },
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export const addToCart = (product) => (dispatch, getState) => {
  const items = JSON.parse(JSON.stringify(getState().cart.items));
  if (items[product.id] === undefined) {
    items[product.id] = { ...product, amount: 1 };
  } else {
    items[product.id].amount += 1;
  }
  dispatch(setCart(items));
};

export const selectCart = state => state.cart.items;

export default cartSlice.reducer;
