import instance from ".";

const createIngredient = async (category) => {
  console.log(category);
  const { data } = await instance.post("/ingredients", category);
  return data;
};

const getAllIngredients = async () => {
  const { data } = await instance.get("/ingredients");
  return data;
};

export { createIngredient, getAllIngredients };
