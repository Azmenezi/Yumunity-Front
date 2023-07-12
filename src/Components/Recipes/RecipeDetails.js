import React from "react";
import { getRecipeById } from "../../Api/recipes";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import arrowImg from "../../media/arrow.png";
const RecipeDetails = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const {
    data: recipe,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => getRecipeById(recipeId),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred: {error.message}</div>;
  }
  console.log(recipe);
  return (
    <div className="flex justify-center">
      <div className="mt-20 w-[80%] min-h-[900px]">
        <div className="">
          <img
            src={arrowImg}
            className="absolute m-3 w-12 bg-[#a3bb9891] rounded-full p-2 hover:scale-110 duration-200"
            onClick={() => navigate("/recipes")}
          />
          <img
            src={`http://localhost:8000/${recipe?.image}`}
            className="w-full h-[300px] overflow-hidden object-cover bg-white"
          />

          <div className=" w-full mt-6 flex flex-wrap">
            <div className="w-[20%] border border-[#A3BB98] border-4 border-dotted">
              <div className="w-full p-3">
                <div
                  key={recipe?._id}
                  className="font-bold w-full mb-3 text-xl"
                >
                  Categories
                </div>
                <div className="bg-[#FFD98F] w-full rounded p-2 min-h-[50px] max-h-[300px] overflow-scroll flex flex-wrap">
                  {recipe?.categories.map((cat) => (
                    <>
                      <div
                        key={cat._id}
                        className="bg-[#00000055] rounded m-1 p-1 flex justify-center items-center hover:scale-105 duration-100"
                      >
                        {cat.name}
                      </div>
                    </>
                  ))}
                </div>
              </div>

              <div className="w-full p-3">
                <div className="font-bold w-full mb-3 text-xl">Ingredients</div>
                <div className="bg-[#FFD98F] w-full rounded p-2 min-h-[50px] max-h-[300px] overflow-scroll flex flex-wrap">
                  {recipe?.ingredients.map((ing) => (
                    <>
                      <div
                        key={ing._id}
                        className="bg-[#00000055] rounded m-1 p-1 flex justify-center items-center hover:scale-105 duration-100"
                      >
                        {ing.name}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className=" w-[80%] p-4 ">
              <div className="text-xl p-4 bg-[#a3bb9891] rounded">
                {recipe?.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
