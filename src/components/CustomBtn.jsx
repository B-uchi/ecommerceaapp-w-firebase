import React from "react";

const CustomBtn = (props) => {
  const styles = `bg-black p-3 px-4 rounded-lg text-${props.textColor}`;
  return (
    <div>
      <button onClick={()=>props.onClick()} className={styles}>{props.value}</button>
    </div>
  );
};

export default CustomBtn;
