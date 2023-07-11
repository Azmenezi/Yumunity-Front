import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <li key={category.id} className="py-2">
      <div className="flex flex-col items-center border border-gray-300 bg-white rounded-lg h-[500px] w-[200px] xl:w-[500px] p-4 hover:scale-105 transition-transform duration-300">
        <div className="h-64 w-full mb-4">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="text-center">{category.name}</div>
      </div>
    </li>
  );
};

export default CategoryItem;
