import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { decreaseItemQty, increaseItemQty, removeItem } from "../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, cartItemsCount, totalCartAmount, increaseItemQty, decreaseItemQty, removeItem}) => {
  return (
    <div className="absolute flex justify-center items-center cart-dropdown z-50 right-0 top-[110%] w-[90%] md:w-[40%] h-[90vh] p-1 bg-[#d6d6d6]">
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

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  cartItemsCount: state.cart.cartItemsCount,
  totalCartAmount: state.cart.totalCartAmount,
});

const mapDispatchToProps = (dispatch)=>({
    increaseItemQty: (item) => dispatch(increaseItemQty(item)),
    decreaseItemQty: (item) => dispatch(decreaseItemQty(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
