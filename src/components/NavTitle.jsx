import React from "react";
import { TypeAnimation } from "react-type-animation";

const NavTitle = (props) => {
  return (
    <div>
      <div className="title text-3xl text-black">
        <TypeAnimation
          sequence={[props.title, 1000]}
          wrapper="div"
          speed={500}
          style={{ display: "inline-block" }}
          cursor={false}

        />
      </div>
    </div>
  );
};

export default NavTitle;
