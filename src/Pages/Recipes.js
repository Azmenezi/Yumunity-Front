import React from "react";
import RecipeList from "../Components/Recipes/RecipeList";
import spaghetti from "../media/spaghetti.jpg";
import masala from "../media/masala.jpg";
import salad from "../media/salad.jpg";

const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: [
      "400g spaghetti",
      "500g ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "400g canned crushed tomatoes",
      "2 tablespoons tomato paste",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "Grated Parmesan cheese for serving",
    ],
    cuisine: "Italian",
    image: spaghetti,
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    ingredients: [
      "500g boneless chicken, cut into pieces",
      "1 cup plain yogurt",
      "2 tablespoons lemon juice",
      "2 teaspoons ground cumin",
      "2 teaspoons ground coriander",
      "1 teaspoon ground turmeric",
      "1 teaspoon chili powder",
      "1 teaspoon garam masala",
      "Salt to taste",
      "1 tablespoon vegetable oil",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 can (400g) diced tomatoes",
      "1 cup heavy cream",
      "Fresh cilantro for garnish",
    ],
    cuisine: "Indian",
    image: masala,
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, minced",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    cuisine: "American",
    image: salad,
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, minced",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    cuisine: "American",
    image: salad,
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, minced",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    cuisine: "American",
    image: salad,
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, minced",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    cuisine: "American",
    image: salad,
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, minced",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    cuisine: "American",
    image: salad,
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, minced",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    cuisine: "American",
    image: salad,
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, minced",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    cuisine: "American",
    image: salad,
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup croutons",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, minced",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    cuisine: "American",
    image: salad,
  },
];

const RecipesPage = () => {
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
