import cartActionTypes from "./cart.types";

export const addTocart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});

export const decreaseItemQty = (item) => ({
  type: cartActionTypes.DECREASE_ITEM_QTY,
  payload: item,
});

export const increaseItemQty = (item) => ({
  type: cartActionTypes.INCREASE_ITEM_QTY,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});