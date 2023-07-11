import instance from ".";

const createRecipe = async (recipeInfo) => {
  console.log(recipeInfo);
  const formData = new FormData();
  for (const key in recipeInfo) formData.append(key, recipeInfo[key]);
  const { data } = await instance.post("/recipes", formData);
  return data;
};

const getRecipies = async () => {
  const { data } = await instance.get("/recipes");
  return data;
};

const getRecipeById = async (id) => {
  const { data } = await instance.get(`/recipes/${id}`);
  return data;
};

export { createRecipe, getRecipies, getRecipeById };
