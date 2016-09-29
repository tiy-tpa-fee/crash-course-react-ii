import { observable, computed } from 'mobx'
import unitData from './units.json'

class Game {
  static startingGold = 2400
  static startingSupply = 16

  @observable army = Object.keys(unitData).reduce((units, key) => {
    units[key] = 0
    return units
  }, {})

  get gold () {
    return Object.keys(this.army).reduce((gold, unit) => {
      return gold - (this.army[unit] * unitData[unit].cost)
    }, Game.startingGold)
  }

  @computed get supply () {
    // TODO: DO THIS BETTER
    const keys = Object.keys(this.army)
    let units = []
    for (var i = 0; i < keys.length; i++) {
      units.push(this.army[keys[i]])
    }
    const total = units.reduce((supply, count) => { return supply + count }, 0)
    return Game.startingSupply - total
  }

  @computed get info () {
    return unitData
  }

  addUnit (unit) {
    this.army[unit]++
  }

  removeUnit (unit) {
    this.army[unit]--
  }
}

const singleton = new Game()
export default singleton
