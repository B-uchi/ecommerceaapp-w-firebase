import React from "react";
import NavTitle from "./NavTitle";
import MenuItem from "./MenuItem";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

const Navbar = ({ currentUser }) => {
  return (
    <nav className="w-full sticky top-0 bg-[#010409] flex justify-center">
      <div className="container p-3 flex justify-between items-center">
        <Link to={"/"}>
          <NavTitle title={"Sub Urban"} />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex gap-3 items-center">
            <Link to={"/shop"}>
              <MenuItem hasHover title={"Shop"} />
            </Link>
            {currentUser ? (
              <MenuItem hasHover click={signOut} title={"Sign Out"} />
            ) : (
              <Link to={"/sign_in"}>
                <MenuItem hasHover title={"Sign In"} />
              </Link>
            )}
          </div>
          <MenuItem icon={<IoIosCart size={26} />} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
