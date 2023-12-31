import React from "react";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => {
    console.log(cartItems)
  return (
    <div className="absolute cart-dropdown z-50 right-0 top-[110%] w-[90%] md:w-[40%] h-[100vh] p-3 bg-[#d6d6d6]">
      CartDropDown
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
