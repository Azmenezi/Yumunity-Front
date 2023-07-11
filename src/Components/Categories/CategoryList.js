import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllCategories } from "../../Api/categories";
import CategoryItem from "../Categories/CategoryItem";

const CategoryList = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  return (
    <div>
      {categories?.map((category, index) => (
        <div key={category._id}>
          <CategoryItem category={category} key={index} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
