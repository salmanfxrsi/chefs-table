import PropTypes from "prop-types";
import RecipeQueue from "./RecipeQueue";

const RecipesQueue = ({ recipesQueue }) => {
  
  return (
    <div>
      <p className="text-center mt-8 mb-4 text-[#282828] font-semibold text-2xl">
        Want To Cook : {recipesQueue.length}
      </p>
      <hr className="mb-4" />

      <div className="overflow-x-auto mb-8 w-full">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          
          <tbody>
            {recipesQueue.map((recipe, index) => (
              <RecipeQueue
                key={index}
                recipe={recipe}
                index={index + 1}
              ></RecipeQueue>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

RecipesQueue.propTypes = {
  recipesQueue: PropTypes.array,
};

export default RecipesQueue;
