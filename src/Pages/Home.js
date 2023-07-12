import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRecipies } from "../Api/recipes";
import RecipeItem from "../Components/Recipes/RecipeItem";

const Home = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  const { data: recipes, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipies(),
  });

  const getRandomRecipes = (recipes, count) => {
    const shuffled = recipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  if (isLoading) {
    return <h1 className="flex justify-center items-center">Loading ...</h1>;
  }

  if (!isLoading && recipes && featuredRecipes.length === 0) {
    const randomRecipes = getRandomRecipes(recipes, 3);
    setFeaturedRecipes(randomRecipes);
  }

  return (
    <>
      <div className="relative mt-2 bg-home-image bg-no-repeat bg-center bg-cover h-[40vh] items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <span className="absolute inset-0 flex items-center justify-center text-7xl text-white font-bold">
          Yumunity
        </span>
      </div>
      <div className="">
        <div className="flex flex-col mx-10 h-full">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl my-5 text-[#A3BB98]">Featured recipes</h1>
          </div>
          <div className=" flex justify-center mx-10">
            <div className="mx-5 w-[80%]">
              <div className="flex flex-row gap-[2%] m-5 h-[40vh] justify-center">
                {featuredRecipes.map((recipe) => (
                  <RecipeItem recipe={recipe} key={recipe.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
