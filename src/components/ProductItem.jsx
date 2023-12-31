import React from "react";
import { addTocart } from "../redux/cart/cart.actions";
import { connect } from "react-redux";

const ProductItem = (props) => {
  const { name, imageUrl, price } = props.product;
  return (
    <div className="mx-auto lg:justify-between flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[60%] ">
      <div className="product-item w-[100%] md:w-[40%] ">
        <img className="w-full" src={imageUrl} alt="product_img" />
      </div>
      <div className="w-[100%] md:w-[60%] border-b-[1px] border-solid border-black flex p-4 text-black justify-center product-content-container items-center">
        <div className="">
          <p className="flex flex-col p-2 font-bold items-start text-md md:text-xl">
            Name: {name} <span>Price: ${price}</span>
          </p>
          <div
            onClick={() => props.addTocart(props.product)}
            className="cursor-pointer hover:text-white p-3 rounded-md bg-[#f1f1f1] text-center font-bold hover:bg-black"
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTocart: (item) => dispatch(addTocart(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
