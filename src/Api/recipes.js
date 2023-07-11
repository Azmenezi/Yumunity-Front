import instance from ".";

const createRecipe = async () => {
  const { data } = await instance.post("/recipes");
  return data;
};

const getRecipies = async () => {
  const { data } = await instance.get("/recipes");
  return data;
};

export { createRecipe, getRecipies };
