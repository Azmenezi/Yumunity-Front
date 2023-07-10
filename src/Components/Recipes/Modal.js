import React, { useState } from "react";
import Input from "./Input";
import { createRecipe } from "../../Api/recipes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Modal = ({ show, setShowModal }) => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const queryClient = useQueryClient();
  const { mutate: cRecipe } = useMutation({
    mutationFn: () => createRecipe(recipeInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      setShowModal(false);
    },
  });
  const handleChange = (e) => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    cRecipe();
    setShowModal(false);
  };

  if (!show) return "";
  return (
    <div
      className="inset-0 fixed  flex justify-center items-center flex-col z-20 overflow-hidden 
  "
    >
      <div className="bg-black absolute z-0 opacity-70 inset-0 "></div>
      <div className="relative z-10 flex flex-col gap-3 border-[3px] border-black rounded-md w-[95%] md:w-[40%] h-[300px] md:h-[30%] bg-white pt-[50px]">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col gap-[10px]"
        >
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="right-0 top-2 absolute w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-red-400"
          >
            X
          </button>
          <Input name="name" onChange={handleChange} />
          <Input name="categories" onChange={handleChange} />
          <Input name="image" onChange={handleChange} />
          <Input name="ingredients" onChange={handleChange} />

          <button
            type="submit"
            className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400  "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
