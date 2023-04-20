import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../store/authSlice';
import CartReducer from "../store/cartSlice"
const store = configureStore({
  reducer: { 
    auth: authReducer ,
    cart : CartReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from './authSlice';
