import * as React from 'react'
import Helper from '../scripts/helper'
import Racikan from '../scripts/racikan'

class RecipeCategory extends React.Component {
  constructor(props) {
    super(props)
    this.category = props.category
  }

  render() {
    return <h2 className='cute-title'>{this.category}</h2>
  }
}

class ItemCard extends React.Component {
  constructor(props) {
    super(props)
    this.item = props.item
  }

  getItemInfo(item) {
    let itemInfo = `${Helper.capitalize(Helper.oneLinize(item.description))}`
    if (item.cost) {
      itemInfo += ` - (${Racikan.displayCost(item.cost)})`
    }
    return itemInfo
  }

  render() {
    const itemCategory = this.item.category
    return (
      <td className={`craft center ${itemCategory || ''}`}>
        <img
          src={`./item/${this.item.path}.png`}
          alt={this.item.description}
          title={this.getItemInfo(this.item)}
        />
      </td>
    )
  }
}

class RecipeCard extends React.Component {
  constructor(props) {
    super(props)
    this.recipe1 = props.recipe1
    this.recipe2 = props.recipe2
    this.recipe3 = props.recipe3
    this.recipe4 = props.recipe4
    this.result = props.result
  }

  generateCraftingRecipeCombinations() {
    return `${this.recipe1.description} + ${this.recipe2.description} + ${this.recipe3.description} + ${this.recipe4.description}`
  }

  render() {
    let recipeCombinations = this.generateCraftingRecipeCombinations()
    return (
      <table>
        <tbody>
          <tr className='crafting__top-row'>
            <ItemCard item={this.recipe1} />
            <ItemCard item={this.recipe2} />
            <ItemCard item={this.recipe3} />
            <ItemCard item={this.recipe4} />
            <td className='crafting__process center'>{`>>`}</td>
            <ItemCard item={this.result} />
          </tr>
          <tr className='crafting__bottom-row'>
            <td className='crafting__recipe center' colSpan='4'>
              {recipeCombinations}
            </td>
            <td className='crafting__arrow center'>→</td>
            <td className='crafting__result center'>
              {this.result.description}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export {RecipeCategory, RecipeCard, ItemCard}
