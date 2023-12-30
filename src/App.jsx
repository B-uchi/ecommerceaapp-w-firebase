import React from "react";
import Homepage from "./pages/homepage/homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { setCurrentUser } from "./redux/reducers/userReducer/user.actions";
import { connect } from "react-redux";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
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
          innerScale={3}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "rgb(152, 64, 127)",
          }}
          outerStyle={{
            border: "3px solid rgb(152, 64, 127)",
          }}
        />
        <div className="bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop/hats" element={<Hats />} />
            <Route path="/shop/women" element={<Women />} />
            <Route path="/shop/men" element={<Mens />} />
            <Route path="/shop/sneakers" element={<Sneakers />} />
            <Route path="/shop/jackets" element={<Jacket />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              exact
              path="/sign_in"
              element={
                this.props.currentUser ? (
                  <Navigate to={"/"} replace={true} />
                ) : (
                  <Sign_in />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
