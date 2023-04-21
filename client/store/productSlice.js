import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('fetchProducts', async() => {
    try {
        const { data } = await axios.get(`api/products`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

export const fetchSingleProduct = createAsyncThunk('singleProduct', async() => {
    try {
        const { data } = await axios.get(`api/products/${id}`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

export const productSlice = createSlice({
    name: 'products',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                return action.payload;
            })
    },
});

export const selectProducts = (state) => {
    return state.products;
};

export default productSlice.reducer;