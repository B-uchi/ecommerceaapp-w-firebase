import React from "react";
import { BiSolidCartAdd } from "react-icons/bi";

const ProductItem = (props) => {
  const { name, imageUrl, price } = props.product;
  return (
    <div className="mx-auto flex">
      <div className="relative border-[3px] border-black bg-white product-item">
        <img className="w-[300px] h-[390px]" src={imageUrl} alt="product_img" />
        <div className="bg-[rgba(0,0,0,0.7)] h-full w-full absolute top-0 flex justify-center items-center product-overlay">
          <div className="">
            <p className="flex flex-col p-2 text-white font-bold items-center text-xl">
              {name} <span>${price}</span>
            </p>
            <div className="cursor-pointer text-white hover:text-black p-3 rounded-full hover:bg-white">
              <BiSolidCartAdd size={40} className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
