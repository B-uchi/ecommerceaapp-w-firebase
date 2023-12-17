import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 product-list p-3 gap-4 items-center'>
        {products.map((product)=>
            <ProductItem key={product.id} product={product}/>
        )}
    </div>
  )
}

export default ProductList