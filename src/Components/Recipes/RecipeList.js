import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRecipies } from "../../Api/recipes";
import Modal from "./Modal";

const RecipeList = ({ recipes }) => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const { data: recipes, isLoading } = useQuery({
  //   queryKey: ["recipes"],
  //   queryFn: () => getRecipies(),
  // });

  // if (isLoading) {
  //   return <h1>Loading ...</h1>;
  // }

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
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
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className=" ml-5 w-full h-8 p-4 rounded-md border border-black bg-green-400 hover:bg-green-600"
          >
            Add recipe
          </button>
        </div>
        <ul className="flex flex-wrap justify-center gap-10">
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="py-2">
              <div className="flex flex-col items-center border border-gray-300 bg-white rounded-lg h-[500px] w-[200px] xl:w-[500px] p-4 hover:scale-105 transition-transform duration-300">
                <div className="h-64 w-full mb-4">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">{recipe.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default RecipeList;
