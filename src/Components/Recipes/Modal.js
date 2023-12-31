import React, { useState } from "react";
import Input from "./Input";
import { createRecipe } from "../../Api/recipes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectIngredients from "../MultiSelect/MultiSelectIngredients";

const Modal = ({ show, setShowModal }) => {
  const [valuesString, setValuesString] = useState([]);
  const [valuesStringIng, setValuesStringIng] = useState([]);
  const [recipeInfo, setRecipeInfo] = useState({});
  const queryClient = useQueryClient();
  const { mutate: cRecipe } = useMutation({
    mutationFn: (recipeInfo) => createRecipe(recipeInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      setShowModal(false);
      console.log(recipeInfo);
    },
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setRecipeInfo({
        ...recipeInfo,
        categories: valuesString,
        ingredients: valuesStringIng,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setRecipeInfo({
        ...recipeInfo,
        categories: valuesString,
        ingredients: valuesStringIng,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    cRecipe(recipeInfo);
    setShowModal(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
      <div className="relative w-full max-w-md p-6 bg-white rounded-md">
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" onChange={handleChange} />
          <Input name="text" onChange={handleChange} />
          <div className="flex justify-start">
            <h1 className="">categories</h1>
            <MultiSelect
              valuesString={valuesString}
              setValuesString={setValuesString}
            />
          </div>
          <div className="flex justify-start">
            <h1 className="">ingredients</h1>
            <MultiSelectIngredients
              valuesString={valuesStringIng}
              setValuesString={setValuesStringIng}
            />
          </div>
          {/* <Input name="categories" onChange={handleChange} />
          <Input name="ingredients" onChange={handleChange} /> */}
          <Input name="image" type="file" onChange={handleChange} />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
