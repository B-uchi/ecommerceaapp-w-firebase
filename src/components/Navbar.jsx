import React from "react";
import NavTitle from "./NavTitle";
import MenuItem from "./MenuItem";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import { auth } from "../firebase/firebaseUtil";

const Navbar = ({ currentUser }) => {
  return (
    <nav className="w-full sticky top-0 z-10 bg-white flex justify-center">
      <div className="container border-black border-b-[1px] p-3 flex justify-between items-center">
        <Link to={"/"}>
          <NavTitle title={"Sub Urban"} />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex gap-3 items-center">
            <Link to={"/shop"}>
              <MenuItem hasHover title={"Shop"} />
            </Link>
            {currentUser ? (
              <MenuItem hasHover onClick={()=>signOut(auth)} title={"Sign Out"} />
            ) : (
              <Link to={"/sign_in"}>
                <MenuItem hasHover title={"Sign In"} />
              </Link>
            )}
          </div>
          <MenuItem icon={<IoIosCart size={26} color="black"/>} />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
}); 

export default connect(mapStateToProps)(Navbar);
