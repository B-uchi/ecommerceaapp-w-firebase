import React, { useState } from "react";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hats from "./pages/hats/hats_page";
import Women from "./pages/women/women_page";
import Jacket from "./pages/jackets/jacket_page";
import Mens from "./pages/men/mens_page";
import Sneakers from "./pages/sneakers/sneakers_page";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <Router>
      <div className="bg-[#f1f1f1] h-[100vh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/hats" element={<Hats />} />
          <Route path="/shop/women" element={<Women />} />
          <Route path="/shop/men" element={<Mens />} />
          <Route path="/shop/sneakers" element={<Sneakers />} />
          <Route path="/shop/jackets" element={<Jacket />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
