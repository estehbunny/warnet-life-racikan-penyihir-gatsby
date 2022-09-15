import * as React from 'react'
import Helper from '../scripts/helper'
import Racikan from '../scripts/racikan'

class RecipeCategory extends React.Component {
  render() {
    return <h2 className='cute-title'>{this.props.category}</h2>
  }
}

class ItemCard extends React.Component {
  getItemInfo(item) {
    let itemInfo = `${Helper.capitalize(Helper.oneLinize(item.description))}`
    if (item.cost) {
      itemInfo += ` - (${Racikan.displayCost(item.cost)})`
    }
    return itemInfo
  }

  render() {
    const itemCategory = this.props.item.category
    return (
      <td className={`craft center ${itemCategory || ''}`}>
        <img
          src={`./item/${this.props.item.path}.png`}
          alt={this.props.item.description}
          title={this.getItemInfo(this.props.item)}
        />
      </td>
    )
  }
}

class RecipeCard extends React.Component {
  generateCraftingRecipeCombinations() {
    const recipe1Description = this.props.recipe1.description
    const recipe2Description = this.props.recipe2.description
    const recipe3Description = this.props.recipe3.description
    const recipe4Description = this.props.recipe4.description
    return `${recipe1Description} + ${recipe2Description} + ${recipe3Description} + ${recipe4Description}`
  }

  render() {
    let recipeCombinations = this.generateCraftingRecipeCombinations()
    let description = this.props.result.description
    let doNotCapitalize = description.startsWith('@') ? 'crafting__result--lower' : ''
    return (
      <table>
        <tbody>
          <tr className='crafting__top-row'>
            <ItemCard item={this.props.recipe1} />
            <ItemCard item={this.props.recipe2} />
            <ItemCard item={this.props.recipe3} />
            <ItemCard item={this.props.recipe4} />
            <td className='crafting__process center'>
              <div>{`>>`}</div>
              <div className='crafting__since'>v{this.props.since}</div>
            </td>
            <ItemCard item={this.props.result} />
          </tr>
          <tr className='crafting__bottom-row'>
            <td className='crafting__recipe center' colSpan='4'>
              {recipeCombinations}
            </td>
            <td className='crafting__arrow center'>→</td>
            <td className={`crafting__result center ${doNotCapitalize}`}>
              {description}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export {RecipeCategory, RecipeCard, ItemCard}
