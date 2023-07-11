import React from "react";

const RecipeItem = ({ recipe }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <ul className="flex flex-wrap justify-center gap-10">
        <li key={recipe.id} className="py-2">
          <div className="flex flex-col items-center border border-gray-300 bg-white rounded-lg h-[500px] w-[200px] xl:w-[500px] p-4 hover:scale-105 transition-transform duration-300">
            <div className="h-64 w-full mb-4">
              <img
                src={`http://localhost:8000/${recipe.image}`}
                alt={recipe.name}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">{recipe.name}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecipeItem;
