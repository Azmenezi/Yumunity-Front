import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../Api/categories";
import CategoryItem from "../Categories/CategoryItem";
import beef from "../../media/categories/beef.jpg";
import vegetables from "../../media/categories/vegetables.jpg";
import dairy from "../../media/categories/dairy.jpg";
import poultry from "../../media/categories/poultry.jpg";
import fruits from "../../media/categories/fruits.jpg";

const images = [beef, fruits, vegetables, dairy, poultry];

const CategoryList = () => {
  const [query, setQuery] = useState("");
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const filteredCategories = categories?.filter((category) =>
    category.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Search recipes"
            value={query}
            onChange={handleSearch}
            className="p-2 mb-12 border border-gray-300 rounded-md"
          />
        </div>
        <ul className="flex flex-wrap justify-center gap-10">
          {filteredCategories?.map((category, index) => (
            <CategoryItem
              category={category}
              image={images[index % images.length]}
              key={category._id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
