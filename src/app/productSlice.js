import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const getProducts = (sort = 'asc', category = null) => dispatch => {
  let url = 'https://fakestoreapi.com/products';
  if (category) {
    url += `/category/${category}`;
  }
  url += `?sort=${sort}`;
  axios.get(url)
    .then(res => {
      dispatch(setProducts(res.data));
    })
    .catch(e => {
      dispatch(setProducts([]));
    })
};

export const selectProducts = state => state.product.products;

export default productSlice.reducer;
