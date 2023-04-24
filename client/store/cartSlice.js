import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
  };

  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      setItems: (state, action) => {
        state.items = action.payload;
      },
  
      addToCart: (state, action) => {
        state.cart = [...state.cart, action.payload.item];
      },
  
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      },
  
      increaseCount: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.count++;
          }
          return item;
        });
      },
  
      decreaseCount: (state, action) => {
        const { id } = action.payload;
        const cartItem = state.cart.find((item) => item.id === id);

        if (cartItem.count === 1) {
            state.cart = state.cart.filter((item) => item.id !== id);
        } else {
            state.cart = state.cart.map((item) => {
                if (item.id === id) {
                    item.count--;
                }
                return item;
            });
        }
    },
  
      setIsCartOpen: (state) => {
        state.isCartOpen = !state.isCartOpen;
      },
    },
  });
  
  export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
  } = cartSlice.actions;
  
  export default cartSlice.reducer;