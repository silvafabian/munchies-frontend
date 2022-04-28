import { Link } from "react-router-dom";
import "./RecipeCard.css"

const RecipeCard = ({recipe}) => {
  console.log(recipe)
  const rec = recipe.recipe

  return ( 
    <Link
      to={`/${recipe.id}`}
      className="recipe-card-container"
      state={recipe}
      style={{textDecoration: 'none'}}
    >
      <div
        id="recipe-card"
        style={{
          backgroundImage: `url(${rec.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <h2 id="recipe-card-title">{rec.label}</h2>
        <div id="recipe-card-details">
          <p id="recipe-category">{rec.cuisineType}</p>
          {/* <p id="recipe-main-ingredient">{recipe.mainIngredient}</p> */}
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;