import React from "react";
import SHOP_DATA from "../shop/shop_data";
import PageHeader from "../../components/PageHeader";
import ProductList from "../../components/ProductList";

const Jacket = () => {
  const filtered_data = SHOP_DATA.filter(
    (category) => category.title.toLowerCase() == "jackets"
  );
  return (
    <div>
      <PageHeader title={"Jackets"} />
      <ProductList products={filtered_data[0].items} />
    </div>
  );
};

export default Jacket;
