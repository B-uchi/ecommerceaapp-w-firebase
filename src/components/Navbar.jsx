import React, { useState } from "react";
import NavTitle from "./NavTitle";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import { auth } from "../firebase/firebaseUtil";
import CartIcon from "./CartIcon";
import CartDropDown from "./CartDropDown";

const Navbar = ({ currentUser }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const closeDropdown = () => {
    setShowDropdown(false);
  };
  return (
    <nav className="w-full sticky top-0 z-10 bg-white flex justify-center">
      <div className="w-full border-black border-b-[1px] p-3 flex justify-between items-center relative">
        <Link to={"/"} onClick={closeDropdown}>
          <NavTitle title={"Sub Urban"} />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex gap-3 items-center">
            <Link to={"/shop"} onClick={closeDropdown}>
              <MenuItem hasHover title={"Shop"} />
            </Link>
            {currentUser ? (
              <MenuItem
                hasHover
                onClick={() => {
                  signOut(auth);
                  onClick = { closeDropdown };
                }}
                title={"Sign Out"}
              />
            ) : (
              <Link to={"/sign_in"} onClick={closeDropdown}>
                <MenuItem hasHover title={"Sign In"} />
              </Link>
            )}
          </div>
          <CartIcon onClick={setShowDropdown} />
        </div>
        {showDropdown ? <CartDropDown showDropdown={showDropdown} /> : null}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
