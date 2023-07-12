import instance from ".";

const createCategory = async (category) => {
  console.log(category);
  const { data } = await instance.post("/categories", category);
  return data;
};

const getAllCategories = async () => {
  const { data } = await instance.get("/categories");
  return data;
};
const recipesByCategory = async (id) => {
  const { data } = await instance.get(`/categories/${id}`);
  return data;
};
export { createCategory, getAllCategories, recipesByCategory };
