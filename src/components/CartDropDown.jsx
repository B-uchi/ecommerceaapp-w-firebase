import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import {
  decreaseItemQty,
  increaseItemQty,
  removeItem,
} from "../redux/cart/cart.actions";

const CartDropDown = ({
  cartItems,
  cartItemsCount,
  totalCartAmount,
  increaseItemQty,
  decreaseItemQty,
  removeItem,
}) => {
  return (
    <div className="flex justify-center items-center cart-dropdown z-50 h-[90vh] p-1 bg-[#d1d1d1] rounded-md">
      {cartItemsCount >= 1 ? (
        <div className="container h-full flex flex-col relative p-2">
          <div className="sticky top-0 flex flex-col">
            <h1 className="font-bold text-2xl ">Your Cart: </h1>
            <small className="">Items in cart: {cartItemsCount}</small>
          </div>
          <div className="overflow-y-scroll flex-grow">
            {cartItems.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                qty={item.qty}
                increaseItemQty={increaseItemQty}
                decreaseItemQty={decreaseItemQty}
                removeItem={removeItem}
              />
            ))}
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex justify-between w-full">
              <p className="font-bold"> Sub-total:</p>
              <p>${totalCartAmount}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-bold"> Discount:</p>
              <p>$0</p>
            </div>
            <div className="flex justify-between w-full">
              <button className="p-2 py-3 w-full font-bold text-white bg-[#1b1b1d] rounded-sm hover:bg-[#3b3b3f]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-2">Your cart is empty...</div>
      )}
    </div>
  );
};

const mapStateToProps = ({cart}) => {
  console.log('i am being called');
  return {
    cartItems: cart.cartItems,
    cartItemsCount: cart.cartItemsCount,
    totalCartAmount: cart.totalCartAmount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increaseItemQty: (item) => dispatch(increaseItemQty(item)),
  decreaseItemQty: (item) => dispatch(decreaseItemQty(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
