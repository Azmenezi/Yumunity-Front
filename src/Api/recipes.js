import instance from ".";

const createRecipe = async (recipeInfo) => {
  console.log(recipeInfo);
  const formData = new FormData();
  for (const key in recipeInfo) {
    if (Array.isArray(recipeInfo[key])) {
      recipeInfo[key].forEach((recipe) => {
        formData.append(key, recipe);
      });
    } else {
      formData.append(key, recipeInfo[key]);
    }
  }
  const { data } = await instance.post("/recipes", formData);
  console.log(formData);
  return data;
};

const updateRecipe = async (recipeInfo, id) => {
  // console.log(id);
  // console.log(recipeInfo);
  // const formData = new FormData();
  // for (const key in recipeInfo) {
  //   if (Array.isArray(recipeInfo[key])) {
  //     recipeInfo[key].forEach((recipe) => {
  //       formData.append(key, recipe);
  //     });
  //   } else {
  //     formData.append(key, recipeInfo[key]);
  //   }
  // }
  // console.log("data",formData);
  console.log(recipeInfo);
  const { data } = await instance.put(`/recipes/${id}`, recipeInfo);

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

export { createRecipe, getRecipies, getRecipeById, updateRecipe };
