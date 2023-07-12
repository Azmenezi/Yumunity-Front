import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./Api/auth";
import Navbar from "./Components/Navbar/Navbar";
import Recipes from "./Pages/Recipes";
import Categories from "./Pages/Categories";
import Ingredients from "./Pages/Ingredients";
import RecipeDetails from "./Components/Recipes/RecipeDetails";
import RecipesForCategory from "./Components/Recipes/RecipesForCategory";
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/:categoryId"
            element={<RecipesForCategory />}
          />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
