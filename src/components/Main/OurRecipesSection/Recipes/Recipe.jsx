import PropTypes from "prop-types";

const Recipe = ({ recipe,handleWantToCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    calories,
    preparing_time,
  } = recipe;

  return (
    <div className="p-6 border border-[#28282833] border-opacity-20 rounded-2xl">
      {/* Recipes Information Section */}
      <img
        className="w-full rounded-2xl h-[200px] mb-6"
        src={recipe_image}
        alt=""
      />
      <p className="font-semibold text-xl text-[#282828] mb-4">{recipe_name}</p>
      <p className="text-base text-[#878787] mb-4 font-fira-sens">
        {short_description}
      </p>
      <hr />
      {/* Indigents Section */}
      <p className="mt-6 text-[#282828] text-lg font-medium">
        Indigents: {ingredients.length}
      </p>
      <ul className="font-fira-sens text-lg text-[#878787] my-4 ml-6 space-y-1.5">
        {ingredients.map((indigent, index) => (
          <li className="list-disc" key={index}>{indigent}</li>
        ))}
      </ul>
      <hr />
      {/* Timing And Calories Section */}
      <div className="flex items-center gap-5 mt-6">
        <div className="flex items-center gap-2">
          <i className="fa-regular fa-clock"></i>
          <p>{preparing_time} minutes</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-fire"></i>
          <p>{calories} calories</p>
        </div>
      </div>
      {/* Want To COok Button */}
      <button onClick={()=>handleWantToCook(recipe)} className="py-3 px-6 bg-[#0BE58A] rounded-[50px] text-[#150B2B] font-medium text-lg mt-6 hover:bg-gray-400 duration-500">
        Want To Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleWantToCook: PropTypes.func
};

export default Recipe;
