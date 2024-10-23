import PropTypes from "prop-types";

const RecipeQueue = ({ recipe,index }) => {
  const { recipe_name, preparing_time, calories } = recipe;

  return (
      <tr className="bg-base-200">
        <th>{index}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <button className="bg-[#0BE58A] py-2 px-4 rounded-[50px] text-[#150B2B] font-medium">Preparing</button>
      </tr>
  );
};

RecipeQueue.propTypes = {
  recipe: PropTypes.array,
  index: PropTypes.number
};

export default RecipeQueue;
