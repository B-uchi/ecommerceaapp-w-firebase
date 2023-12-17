import React, { useState } from "react";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/women",
    },
    {
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/men",
    },
  ]);
  const topLine = categories.filter(
    (category) => category.id === 1 || category.id === 2 || category.id === 3
  );
  const secondLine = categories.filter(
    (category) => category.id === 4 || category.id === 5
  );

  return (
    <div className="flex flex-col w-[95%] mx-auto parent-div gap-3 mt-3">
      <div className=" flex flex-col lg:flex-row gap-3">
        {topLine.map((category) => (
          <Category data={category} key={category.id}/>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        {secondLine.map((category) => (
          <Category data={category} key={category.id}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
