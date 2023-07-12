import React, { useState, useEffect, useContext } from "react";
import { getRecipeById, updateRecipe } from "../../Api/recipes";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import arrowImg from "../../media/arrow.png";
import UserContext from "../../context/UserContext";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectIngredients from "../MultiSelect/MultiSelectIngredients";
import { profile } from "../../Api/auth";
const RecipeDetails = () => {
  const navigate = useNavigate();
  const [valuesString, setValuesString] = useState([]);
  const [valuesStringIng, setValuesStringIng] = useState([]);
  const [recipeInfo, setRecipeInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const { recipeId } = useParams();
  const [query, setQuery] = useState("");
  const {
    data: recipe,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipeById(recipeId),
  });

  const [recipeName, setRecipeName] = useState("");

  useEffect(() => {
    setQuery("");
  }, [recipeId]);

  useEffect(() => {
    setRecipeInfo({
      ...recipeInfo,
      name: recipeName,
      text: recipe?.text,
      categories: valuesString,
      ingredients: valuesStringIng,
    });
  }, [valuesString, valuesStringIng]);

  useEffect(() => {
    if (showModal === false) {
      cRecipe(recipeInfo);
    }
  }, [recipeInfo]);

  const { mutate: cRecipe } = useMutation({
    mutationFn: (recipeInfo) => updateRecipe(recipeInfo, recipe?._id),
    onSuccess: () => {
      setShowModal(false);
    },
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setRecipeInfo({
        ...recipeInfo,
        name: recipeName,
        text: recipe?.text,
        categories: valuesString,
        ingredients: valuesStringIng,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setRecipeInfo({
        ...recipeInfo,
        name: recipeName,
        text: recipe?.text,
        categories: valuesString,
        ingredients: valuesStringIng,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    setRecipeInfo({
      ...recipeInfo,
      name: recipeName,
      text: recipe?.text,
      categories: valuesString,
      ingredients: valuesStringIng,
    });

    cRecipe(recipeInfo);
    setShowModal(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <>
        {showModal ? (
          <div className="flex justify-center">
            <div className="mt-20 w-[80%] min-h-[900px]">
              <div className="">
                <img
                  src={arrowImg}
                  className="absolute m-3 w-12 bg-[#a3bb9891] rounded-full p-2 hover:scale-110 duration-200 z-20"
                  onClick={() => navigate("/recipes")}
                />

                <input
                  type="text"
                  name="name"
                  placeholder={recipe?.name}
                  onChange={(e) => {
                    setRecipeName(e.target.value);
                    handleChange(e);
                  }}
                  className=" absolute bg-[#00000068] z-10 w-[80%] h-[300px] flex justify-center items-center centered-text text-5xl text-white font-bold"
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
                      <div className="bg-[#FFD98F] w-full rounded p-2 min-h-[50px]  flex flex-wrap">
                        <MultiSelect
                          valuesString={valuesString}
                          setValuesString={setValuesString}
                        />
                      </div>
                    </div>

                    <div className="w-full p-3">
                      <div className="font-bold w-full mb-3 text-xl">
                        Ingredients
                      </div>
                      <div className="bg-[#FFD98F] w-full rounded p-2 min-h-[50px]   flex flex-wrap">
                        <MultiSelectIngredients
                          valuesString={valuesStringIng}
                          setValuesString={setValuesStringIng}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" w-[80%] p-4 ">
                    <textarea
                      onChange={(e) => handleChange(e)}
                      name="text"
                      className="text-xl p-4 bg-[#a3bb9891] w-full rounded"
                    >
                      {recipe?.text}
                    </textarea>

                    <div className="flex justify-center items-center mt-5 gap-2">
                      <button
                        type="button"
                        onClick={(e) => handleSubmit(e)}
                        className="flex w-20 p-2 rounded-md border border-black bg-[#b7e6a191] hover:bg-[#819c7591] justify-center"
                      >
                        submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowModal(!showModal)}
                        className="flex w-20 p-2 rounded-md border border-black bg-[#f8c45c] hover:bg-[#b18329] justify-center"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="mt-20 w-[80%] min-h-[900px]">
              <div className="">
                <img
                  src={arrowImg}
                  className="absolute m-3 w-12 bg-[#a3bb9891] rounded-full p-2 hover:scale-110 duration-200 z-20"
                  onClick={() => navigate("/recipes")}
                />
                <div className=" absolute bg-[#00000068] z-10 w-[80%] h-[300px] flex justify-center items-center text-5xl text-white font-bold">
                  {recipe?.name}
                </div>
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
                      <div className="font-bold w-full mb-3 text-xl">
                        Ingredients
                      </div>
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
                    {profile()._id == recipe.author && (
                      <div className="flex justify-center items-center mt-5">
                        <button
                          type="button"
                          onClick={() => {
                            setShowModal(!showModal);
                            setRecipeName(recipe?.name);
                          }}
                          className="flex w-20 p-2 rounded-md border border-black bg-[#f8c45c] hover:bg-[#b18329] justify-center"
                        >
                          update recipe
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default RecipeDetails;
