import React from "react";
import RecipeList from "../Components/Recipes/RecipeList";

const RecipesPage = () => {
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
