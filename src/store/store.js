import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  user: null,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectCartCount = (state) =>
  state.app.cart.reduce((total, item) => total + item.quantity, 0);

export const selectTotalPrice = (state) =>
  state.app.cart.reduce((total, item) => total + item.price * item.quantity, 0);

export const {
  setProducts,
  addToCart,
  removeFromCart,
  updateQuantity,
  setUser,
  setLoading,
  setError,
  clearCart,
} = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
