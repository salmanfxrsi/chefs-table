import PropTypes from "prop-types";
import RecipeQueue from "./RecipesQueue";

const Sidebar = ({ recipesQueue }) => {
    
    return (
        <div className="border border-[#28282833] border-opacity-20 rounded-2xl">
            <RecipeQueue recipesQueue={recipesQueue}></RecipeQueue>
        </div>
    );
};

Sidebar.propTypes = {
    recipesQueue: PropTypes.array
}

export default Sidebar;