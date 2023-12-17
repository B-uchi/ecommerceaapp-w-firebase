import React from 'react'
import SHOP_DATA from '../shop/shop_data';
import PageHeader from '../../components/PageHeader';
import ProductList from '../../components/ProductList';

const Mens = () => {
  const filtered_data = SHOP_DATA.filter(
    (category) => category.title.toLowerCase() == "mens"
  );
  return (
    <div>
      <PageHeader title={"men"} />
      <ProductList products={filtered_data[0].items} />
    </div>
  );
}

export default Mens