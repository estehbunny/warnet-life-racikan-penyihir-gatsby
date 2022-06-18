import * as React from 'react';
import * as BaseRecipe from '../components/base-recipe-component'
import Racikan from '../scripts/racikan'

class CategorizedRecipeList extends React.Component {
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
      />
    )
  }

  renderRecipePack(category) {
    return (
      <div key={category.category}>
        <BaseRecipe.RecipeCategory category={category.category}/>
        {category.recipes.map((recipe) => {
          let recipeInfo = Racikan.getRecipeFromItem(recipe)
          return this.renderRecipeCard(recipeInfo)
        })}
      </div>
    )
  }

  renderCataloguedRecipes(catalogue) {
    return (
      <div id='racikan'>
        {catalogue.map((category) => {
          return this.renderRecipePack(category)
        })}
      </div>
    )
  }

  render() {
    const catalogue = Racikan.getRecipeCatalogues()
    if (!catalogue) {
      return this.emptyRecipeList
    }
    return this.renderCataloguedRecipes(catalogue)
  }
}

export default CategorizedRecipeList;