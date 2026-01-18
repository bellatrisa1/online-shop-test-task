export const selectProducts = (state) => state.app.products;
export const selectCart = (state) => state.app.cart;
export const selectUser = (state) => state.app.user;
export const selectLoading = (state) => state.app.loading;
export const selectError = (state) => state.app.error;
export { selectCartCount, selectTotalPrice } from "./store";
