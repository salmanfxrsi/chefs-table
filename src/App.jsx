import "./App.css";
import Banner from "./components/Header/Banner";
import Navbar from "./components/Header/Navbar";
import OurRecipes from "./components/Main/OurRecipesSection/OurRecipes";
import Recipes from "./components/Main/OurRecipesSection/Recipes/Recipes";
import Sidebar from "./components/Main/OurRecipesSection/Sidebar/sidebar";

function App() {
  return (
    <>
      {/* Header */}
      <Navbar />
      <Banner />
      {/* Main */}
      <OurRecipes />
      <div className="grid grid-cols-3 w-11/12 md:container mx-auto mb-24">
        <Recipes />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
