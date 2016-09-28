import React from 'react'
import update from 'react-addons-update'
import { AppView } from '..'
import unitData from '../../units.json'

class App extends React.Component {

  constructor () {
    super()
    this.startingGold = 2400
    this.startingSupply = 16
    this.state = {
      gold: this.startingGold,
      supply: this.startingSupply,
      army: Object.keys(unitData).reduce((units, key) => {
        units[key] = 0
        return units
      }, {})
    }
  }

  addUnit = (unit) => {
    const newCount = this.state.army[unit] + 1
    this.setState(update(this.state,
      {
        army: {
          [unit]: { $set: newCount }
        }
      }
    ))
  }

  removeUnit = (unit) => {
    const newCount = this.state.army[unit] - 1
    this.setState(update(this.state,
      { army: { [unit]: { $set: newCount } } }
    ))
  }

  render () {
    return <AppView
      {...this.state}
      addUnit={this.addUnit}
      removeUnit={this.removeUnit}
    />
  }
}

export default App
