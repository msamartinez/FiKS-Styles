import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../store/authSlice';
import CartReducer from "../store/cartSlice"
import menuReducer from "../store/menuslice"
import productReducer from "../store/productSlice"
import userReducer from "./userSlice"
const store = configureStore({
  reducer: { 
    auth: authReducer ,
    cart : CartReducer,
    menu: menuReducer,
    products:productReducer,
    users:userReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from './authSlice';
