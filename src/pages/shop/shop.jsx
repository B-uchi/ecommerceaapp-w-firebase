import React from "react";
import Hats from "../hats/hats_page";
import Jacket from "../jackets/jacket_page";
import Sneakers from "../sneakers/sneakers_page";
import Women from "../women/women_page";
import Mens from "../men/mens_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Shop = () => {
  return (
    <section>
      <Routes>
        <Route path="/hats" element={<Hats />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/jackets" element={<Jacket />} />
      </Routes>
      <Hats />
      <Jacket />
      <Sneakers />
      <Women />
      <Mens />
    </section>
  );
};

export default Shop;
