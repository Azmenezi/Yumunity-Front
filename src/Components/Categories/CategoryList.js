import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllCategories } from "../../Api/categories";
import CategoryItem from "../Categories/CategoryItem";

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
          {categories?.map((category) => (
            <CategoryItem category={category} key={category._id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
