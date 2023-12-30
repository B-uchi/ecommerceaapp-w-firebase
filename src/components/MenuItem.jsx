import React from "react";

const MenuItem = (props) => {
  const style = props.hasHover
    ? "text-black cursor-pointer hover:bg-black hover:text-white px-3 py-2 rounded-md"
    : "text-white cursor-pointer";
  return (
    <div
      className={style}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.title ? props.title : props.icon}
    </div>
  );
};

export default MenuItem;
