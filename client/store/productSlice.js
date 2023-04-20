import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/getAll', async() => {
    try {
        const { data } = await axios.get(`api/products`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

export const fetchSingleProduct = createAsyncThunk('products/getSingleProduct', async() => {
    try {
        const { data } = await axios.get(`api/products/${id}`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});


const initialState = {
    allProducts: [],
    singleProduct: {},
    status: 'idle',
  error: null,
  };


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.allProducts= action.payload;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
               state.singleProduct=action.payload;
            })
    },
});



export default productSlice.reducer;