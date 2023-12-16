import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  const { title, imageUrl, id, linkUrl } = props.data;
  return (
    <div
      key={id}
      className="h-[350px] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center category-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Link to={linkUrl}>
        <p className="p-3 label cursor-pointer bg-[rgba(255,255,255,0.7)] rounded-sm flex flex-col justify-center items-center">
          {title.toUpperCase()}{" "}
          <span className="underline text-sm">Shop now</span>
        </p>
      </Link>
    </div>
  );
};

export default Category;
