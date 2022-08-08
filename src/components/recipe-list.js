import * as React from 'react';
import * as BaseRecipe from '../components/base-recipe-component'
import Racikan from '../scripts/racikan'

class RecipeList extends React.Component {
  emptyRecipeList = (
    <div className='cute-title crafting__empty'>
      <h2>Tidak ada resep sayang {':('}</h2>
    </div>
  )

  renderRecipeCard(recipe) {
    return (
      <BaseRecipe.RecipeCard
        key={recipe.result.id}
        recipe1={recipe.recipe1}
        recipe2={recipe.recipe2}
        recipe3={recipe.recipe3}
        recipe4={recipe.recipe4}
        result={recipe.result}
        since={recipe.sinces}
      />
    )
  }

  renderAllRecipes(recipes) {
    return (
      <div id='racikan'>
        {recipes.map((recipe) => {
          return this.renderRecipeCard(recipe)
        })}
      </div>
    )
  }

  render() {
    const recipes = Racikan.getAllRecipeInfos()
    if (!recipes) {
      return this.emptyRecipeList
    }
    return this.renderAllRecipes(recipes)
  }
}
export default RecipeList;