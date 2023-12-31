import { cartActionTypes } from "./cart.types";

export const addTocart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
