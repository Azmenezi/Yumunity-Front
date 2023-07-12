import React from "react";
import { useNavigate } from "react-router";

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div
      className="col-md-6 col-lg-4 mb-5"
      onClick={() => navigate(`/recipes/${recipe?._id}`)}
    >
      <ul className="flex flex-wrap justify-center gap-10">
        <li key={recipe.id} className="py-2">
          <div className="relative border border-gray-300 bg-white rounded-lg h-[500px] w-[200px] xl:w-[500px] p-4 hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0">
              <img
                src={`http://localhost:8000/${recipe.image}`}
                alt={recipe.name}
                className="h-full w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-bold">
                <span>{recipe.name}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecipeItem;
