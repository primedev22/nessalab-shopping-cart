import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export const getCategories = () => dispatch => {
  axios.get('https://fakestoreapi.com/products/categories')
    .then(res => {
      dispatch(setCategories(res.data));
    })
    .catch(e => {
      dispatch(setCategories([]));
    })
};

export const selectCategories = state => state.category.categories;

export default categorySlice.reducer;
