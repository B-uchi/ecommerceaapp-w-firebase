import cartActionTypes from "./cart.types";

const INITIAL_CART_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_CART_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;