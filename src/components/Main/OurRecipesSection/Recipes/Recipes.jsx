import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="col-span-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe_id} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
    handleWantToCook: PropTypes.func
}

export default Recipes;
