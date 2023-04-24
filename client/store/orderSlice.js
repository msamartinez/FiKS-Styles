import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk('products/getAll', async() => {
    try {
        const { data } = await axios.get(`api/order`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

const initialState = {
    allOrders: [],
  };

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.allOrders= action.payload;
            })
            
    },
});


