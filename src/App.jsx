import { useState } from "react";
import "./App.css";
import Banner from "./components/Header/Banner";
import Navbar from "./components/Header/Navbar";
import OurRecipes from "./components/Main/OurRecipesSection/OurRecipes";
import Recipes from "./components/Main/OurRecipesSection/Recipes/Recipes";
import Sidebar from "./components/Main/OurRecipesSection/Sidebar/sidebar";

function App() { 
  const [recipesQueue,setRecipesQueue] = useState([]);
  
  const handleWantToCook = (recipe) => {
    const isExist = recipesQueue.find(
      checked => checked.recipe_id === recipe.recipe_id
    );

    if(!isExist){
      setRecipesQueue([...recipesQueue,recipe]);
    }
    else{
      alert("Already Added In Queue!")
    }
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Our Recipes Section */}
      <OurRecipes />
      {/* Recipes Container */}
      <section className="flex flex-col-reverse lg:grid grid-cols-3 gap-6 w-11/12 md:container mx-auto mb-24">
        <Recipes handleWantToCook={handleWantToCook} />
      {/* Sidebar */}
        <Sidebar recipesQueue={ recipesQueue } />
      </section>
    </>
  );
}

export default App;
