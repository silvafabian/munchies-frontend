import { Link } from "react-router-dom";
import "./RecipeCard.css"

const RecipeCard = ({recipe}) => {


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
          backgroundImage: `url(${recipe.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <h2 id="recipe-card-title">{recipe.name}</h2>
        <div id="recipe-card-details">
          <p id="recipe-category">{recipe.category}</p>
          <p id="recipe-main-ingredient">{recipe.mainIngredient}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;