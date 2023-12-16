import React from "react";

const Category = (props) => {
  const { title, imageUrl, id, linkUrl } = props.data;
  return (
    <div
      key={id}
      className="h-[350px] w-full child-div bg-no-repeat bg-cover bg-center flex justify-center items-center category-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <p className="p-3 cursor-pointer bg-[rgba(255,255,255,0.7)] rounded-sm flex flex-col justify-center items-center" >{title.toUpperCase()} <span className="underline text-sm">Shop now</span></p>
    </div>
  );
};

export default Category;
 