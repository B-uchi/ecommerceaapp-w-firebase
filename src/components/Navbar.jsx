import React from "react";
import NavTitle from "./NavTitle";
import MenuItem from "./MenuItem";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#010409] flex justify-center">
      <div className="container p-3 flex justify-between items-center">
        <NavTitle title={"Sub Urban"} />
        <div className="flex items-center gap-5">
          <div className="hidden md:flex gap-3 items-center">
            <MenuItem hasHover title={"Shop"} />
            <MenuItem hasHover title={"Sign In"} />
          </div>
          <MenuItem icon={<IoIosCart size={26} />} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
