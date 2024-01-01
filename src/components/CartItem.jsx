import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const CartItem = ({
  item,
  qty,
  increaseItemQty,
  decreaseItemQty,
  removeItem,
}) => {
  const product = item.product;
  return (
    <div className="flex justify-between items-center p-2 px-0 pr-2 border-b-[1px] border-solid border-black text-sm ">
      <div className="md:flex flex-auto">
        <div className="flex gap-2">
          <img className="w-16 h-16" src={product.imageUrl} alt="" />
          <div className="flex flex-col my-auto">
            <p className="font-bold">{product.name}</p>
            <p className="font-bold">${product.price}</p>
            <div className="flex gap-1 w-[140px] items-center">
              <button
                onClick={() => decreaseItemQty(item)}
                className="font-bold bg-[#1b1b1d] w-[20px] text-white rounded-full px-1 flex justify-center"
              >
                -
              </button>
              <p className="font-bold">Qty: {qty}</p>
              <button
                onClick={() => increaseItemQty(item)}
                className="font-bold bg-[#1b1b1d] w-[20px] text-white rounded-full px-1 flex justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="self-center font-bold mx-auto">
          Total: ${qty * product.price}
        </div>
      </div>
      <div className="flex flex-col">
        <button onClick={() => removeItem(item)}>
          <IoCloseCircleOutline color="red" size={30} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
