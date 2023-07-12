import React from "react";
import { useNavigate } from "react-router";
const CategoryItem = ({ category, image }) => {
  const navigate = useNavigate();
  return (
    <li
      key={category.id}
      className="py-2"
      onClick={() => navigate(`/categories/${category?._id}`)}
    >
      <div className="relative bg-no-repeat bg-center bg-cover h-[500px] w-[200px] xl:w-[500px] hover:scale-105 transition-transform duration-300 rounded-lg">
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-bold">
          <span>{category.name}</span>
        </div>
        <img
          src={image}
          alt={category.name}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </li>
  );
};

export default CategoryItem;
