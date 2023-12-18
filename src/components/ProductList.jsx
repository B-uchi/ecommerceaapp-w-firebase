import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
  return (
    <div className='flex flex-col product-list p-3 gap-5 items-center'>
        {products.map((product)=>
            <ProductItem key={product.id} product={product}/>
        )}
    </div>
  )
}

export default ProductList