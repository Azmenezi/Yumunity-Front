import React from "react";

const RecipeItem = ({ recipe }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <Link to={`/recipe-details/${recipe.slug}`}>
        <div className="mx-auto">
          <div className="d-flex align-items-center justify-content-center h-100 w-100">
            <div className="text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={recipe.image} alt="Recipe" /> 
        </div>
      </Link>
    </div>
  );
};

export default RecipeItem;
