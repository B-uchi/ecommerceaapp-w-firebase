import React from 'react'

const ProductItem = (props) => {
    const {id, name, imageUrl, price} = props.product
  return (
    <div className=' border-l-[1px] border-r-[1px] border-t-[1px] border-black'>
        <img className='w-[300px]' src={imageUrl} alt="product_img" />
        <div className="">
            <p className='flex p-2 font-bold justify-between'>{name} <span>${price}</span></p>
            <div className="flex mt-3 justify-center">
                <button className='bg-[#010409] w-full text-white p-2 px-3 '>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem