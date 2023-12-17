import React from "react";
import Hats from "../hats/hats_page";
import Jacket from "../jackets/jacket_page";
import Sneakers from "../sneakers/sneakers_page";
import Women from "../women/women_page";
import Mens from "../men/mens_page";

const Shop = () => {
  return (
    <section>
      <Hats />
      <Jacket />
      <Sneakers />
      <Women />
      <Mens />
    </section>
  );
};

export default Shop;
