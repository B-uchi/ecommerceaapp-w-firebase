import React, { useEffect, useState } from "react";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hats from "./pages/hats/hats_page";
import Women from "./pages/women/women_page";
import Jacket from "./pages/jackets/jacket_page";
import Mens from "./pages/men/mens_page";
import Sneakers from "./pages/sneakers/sneakers_page";
import Shop from "./pages/shop/shop";
import Sign_in from "./pages/sign_in/sign_in";
import { auth } from "./firebase/firebaseUtil";
import AnimatedCursor from "react-animated-cursor";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'rgb(152, 64, 127)'
          }}
          outerStyle={{
            border: '3px solid rgb(152, 64, 127)'
          }}
        />
        <div className="bg-white">
          <Navbar currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop/hats" element={<Hats />} />
            <Route path="/shop/women" element={<Women />} />
            <Route path="/shop/men" element={<Mens />} />
            <Route path="/shop/sneakers" element={<Sneakers />} />
            <Route path="/shop/jackets" element={<Jacket />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/sign_in"
              element={<Sign_in currentUser={this.state.currentUser} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
