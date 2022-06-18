import Item from '../data/item.json'
import Resep from '../data/resep.json'
import Pricelist from '../data/pricelist.json'

class Racikan {
  static displayCost(itemCost) {
    let cash = itemCost.cash
    let token = itemCost.token
    let gold = itemCost.gold

    let output = ['', '', '']
    if (itemCost.gacha) {
      if (!(cash || token || gold)) {
        return 'Obtainable through wishing well'
      } else {
        output.push("wishing well")
      }
    }
    if (cash > 0) {
      output[0] = 'Lp' + cash.toLocaleString('id')
    }
    if (token > 0) {
      output[1] = 'Sp' + token.toLocaleString('id')
    }
    if (gold > 0) {
      output[2] = gold.toLocaleString('id') + ' Gold'
    }
    return output.filter(Boolean).join(' + ')
  }

  static estimateCraftingCost(recipe1, recipe2, recipe3, recipe4) {
    function calculateCostEachRecipe(recipe1, recipe2, recipe3, recipe4) {
      return recipe1 + recipe2 + recipe3 + recipe4
    }

    function requireGacha(recipe1, recipe2, recipe3, recipe4) {
      return recipe1 || recipe2 || recipe3 || recipe4
    }

    return {
      fromRacikan: true,
      cash: calculateCostEachRecipe(
        recipe1.cost.cash || 0,
        recipe2.cost.cash || 0,
        recipe3.cost.cash || 0,
        recipe4.cost.cash || 0
      ),
      token: calculateCostEachRecipe(
        recipe1.cost.token || 0,
        recipe2.cost.token || 0,
        recipe3.cost.token || 0,
        recipe4.cost.token || 0
      ),
      gold: calculateCostEachRecipe(
        recipe1.cost.gold || 0,
        recipe2.cost.gold || 0,
        recipe3.cost.gold || 0,
        recipe4.cost.gold || 0
      ),
      gacha: requireGacha(
        recipe1.cost.gacha,
        recipe2.cost.gacha,
        recipe3.cost.gacha,
        recipe4.cost.gacha
      )
    }
  }

  static getItemPrice(item) {
    const matchedItemPrice = Pricelist.find((element) => element.path === item)
    if (!matchedItemPrice || !matchedItemPrice.cost || item.fromRacikan) {
      return Racikan.getCraftCost(item)
    } else {
      return matchedItemPrice.cost
    }
  }

  static getRecipeFromItem(itemToCraft) {
    const matchedRecipe = Resep.find((item) => item.result === itemToCraft)
    return Racikan.getRecipeInformation(matchedRecipe)
  }

  static getCraftCost(itemToCraft) {
    const recipeInfo = this.getRecipeFromItem(itemToCraft)
    return Racikan.estimateCraftingCost(
      recipeInfo.recipe1,
      recipeInfo.recipe2,
      recipeInfo.recipe3,
      recipeInfo.recipe4
    )
  }

  static getRecipeInformation(recipe) {
    const recipe1 = Item.find((item) => item.id === recipe.recipe1)
    recipe1.cost = Racikan.getItemPrice(recipe1.id)
    const recipe2 = Item.find((item) => item.id === recipe.recipe2)
    recipe2.cost = Racikan.getItemPrice(recipe2.id)
    const recipe3 = Item.find((item) => item.id === recipe.recipe3)
    recipe3.cost = Racikan.getItemPrice(recipe3.id)
    const recipe4 = Item.find((item) => item.id === recipe.recipe4)
    recipe4.cost = Racikan.getItemPrice(recipe4.id)
    const resultItemInfo = Item.find((item) => item.id === recipe.result)
    resultItemInfo.cost = Racikan.estimateCraftingCost(recipe1, recipe2, recipe3, recipe4)

    return {
      recipe1: recipe1,
      recipe2: recipe2,
      recipe3: recipe3,
      recipe4: recipe4,
      result: resultItemInfo
    }
  }

  static getAllRecipeInfos() {
    return Resep.map((recipe) => {
      return this.getRecipeInformation(recipe)
    })
  }

  static getRecipeCatalogues() {
    return require("../data/recipe-category.json")
  }
}

export default Racikan
