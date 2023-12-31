import cartActionTypes from "./cart.types";

const INITIAL_CART_STATE = {
  cartItems: [],
  cartItemsCount: 0,
  totalCartAmount: 0,
};

const cartReducer = (state = INITIAL_CART_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      if (
        state.cartItems.find((item) => item.product.id === action.payload.id)
      ) {
        return {
          ...state,
          totalCartAmount: state.totalCartAmount + action.payload.price,
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          totalCartAmount: state.totalCartAmount + action.payload.price,
          cartItemsCount: state.cartItemsCount + 1,
          cartItems: [...state.cartItems, { product: action.payload, qty: 1 }],
        };
      }
    case cartActionTypes.INCREASE_ITEM_QTY:
      return {
        ...state,
        totalCartAmount: state.totalCartAmount + action.payload.product.price,
        cartItems: state.cartItems.map((item) =>
          item.product.id === action.payload.product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case cartActionTypes.DECREASE_ITEM_QTY:
      if (action.payload.qty === 1) {
        return {
          ...state,
          totalCartAmount: state.totalCartAmount - action.payload.product.price,
          cartItemsCount: state.cartItemsCount - 1,
          cartItems: state.cartItems.filter(
            (item) => item.product.id !== action.payload.product.id
          ),
        };
      } else {
        return {
          ...state,
          totalCartAmount: state.totalCartAmount - action.payload.product.price,
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.payload.product.id
              ? { ...item, qty: item.qty - 1 }
              : item
          ),
        };
      }
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        totalCartAmount:
          state.totalCartAmount -
          action.payload.product.price * action.payload.qty,
        cartItemsCount: state.cartItemsCount - 1,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== action.payload.product.id
        ),
      };

    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        cartItemsCount: 0,
        totalCartAmount: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
