import instance from ".";

const createRecipe = async (recipe) => {
  const { data } = await instance.post("/recipes", { recipe });
  return data;
};

const getRecipies = async () => {
  const { data } = await instance.get("/recipes");
  console.log(data);
  return data;
};

export { createRecipe, getRecipies };
