import PropTypes from "prop-types";
import RecipeQueue from "./RecipeQueue";

const RecipesQueue = ({ recipesQueue }) => {
  return (
    <div>
      <p className="text-center mt-8 mb-4 text-[#282828] font-semibold text-2xl">Want To Cook : {recipesQueue.length}</p>
      <div className="overflow-x-auto mb-8">
        <table className="table">
          <thead>
            <tr className="flex justify-between">
              <th></th>
              <th className="pl-14">Name</th>
              <th className="pl-[120px]">Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
          {recipesQueue.map( (recipe,index) => <RecipeQueue key={index} recipe={recipe}></RecipeQueue>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

RecipesQueue.propTypes = {
  recipesQueue: PropTypes.array
}

export default RecipesQueue;
