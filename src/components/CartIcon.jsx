import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const CartIcon = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={() => onClick((prev) => !prev)}>
      <RiShoppingCartLine size={25} color="black" />
    </div>
  );
};

export default CartIcon;
