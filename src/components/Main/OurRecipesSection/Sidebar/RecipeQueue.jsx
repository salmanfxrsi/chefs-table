import PropTypes from "prop-types";

const RecipeQueue = ({ recipe }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = recipe;

  return (
    <div>
      <tr className="bg-base-200 flex justify-between">
        <th>{recipe_id}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    </div>
  );
};

RecipeQueue.propTypes = {
  recipe: PropTypes.array,
};

export default RecipeQueue;
