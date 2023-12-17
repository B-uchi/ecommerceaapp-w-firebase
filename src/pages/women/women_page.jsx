import React from "react";
import PageHeader from "../../components/PageHeader";
import ProductList from "../../components/ProductList";
import SHOP_DATA from "../shop/shop_data";

const Women = () => {
  const filtered_data = SHOP_DATA.filter(
    (category) => category.title.toLowerCase() == "womens"
  );
  return (
    <div>
      <PageHeader title={"women"} />
      <ProductList products={filtered_data[0].items} />
    </div>
  );
};

export default Women;
