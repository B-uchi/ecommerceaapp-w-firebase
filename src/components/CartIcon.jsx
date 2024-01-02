import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { connect } from "react-redux";


const CartIcon = ({ onClick, cartItemsCount }) => {
  return (
    <div className="cursor-pointer relative" onClick={() => onClick((prev) => !prev)}>
      <RiShoppingCartLine size={25} color="black" />
      {cartItemsCount >= 1 ? (
        <div className="absolute top-0 translate-x-[50%] translate-y-[-50%] right-0 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-white text-xs">
          {cartItemsCount}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItemsCount: state.cart.cartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
