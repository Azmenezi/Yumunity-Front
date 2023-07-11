import React, { useState } from "react";
import RecipeItem from "./RecipeItem";
import { useQuery } from "@tanstack/react-query";
import { getRecipies } from "../../Api/recipes";
import Modal from "./Modal";

const RecipeList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { data: recipes, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipies(),
  });

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
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="flex items-center ml-5 w-full h-8 p-5 rounded-md border border-black bg-green-400 hover:bg-green-600"
          >
            Add recipe
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">{filteredRecipes}</div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default RecipeList;
