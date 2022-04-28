import './Landing.css'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

const Landing = ({recipes}) => {
  
  return (
    <>
      <main>
        <h1>All Recipes</h1>
        {recipes.length ?
          <div id="recipe-card-container">
            {recipes.map((recipe, idx) =>
              <RecipeCard
                key={idx}
                recipe={recipe}
              />
            )}
          </div>
        :
          <></>
        }
      </main>
    </>
  )
}

export default Landing
