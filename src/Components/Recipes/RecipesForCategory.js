import React, { useState, useEffect } from "react";
import RecipeItem from "./RecipeItem";
import { useQuery } from "@tanstack/react-query";
import { recipesByCategory } from "../../Api/categories";
import { useNavigate, useParams } from "react-router";

const RecipesForCategory = () => {
  const { categoryId } = useParams();
  const [query, setQuery] = useState("");
  const { data: recipes, isLoading } = useQuery({
    queryKey: ["recipesByCategory", categoryId],
    queryFn: () => recipesByCategory(categoryId),
  });
  useEffect(() => {
    setQuery("");
  }, [categoryId]);
  if (isLoading) {
    return <h1 className="flex justify-center items-center">Loading ...</h1>;
  }

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const filteredRecipes = recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />);

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
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {filteredRecipes}
      </div>
    </>
  );
};

export default RecipesForCategory;
