import { computed, observable } from 'mobx'
import unitData from './units.json'

class Game {
  static startingGold = 2400
  static startingResouces = 16

  @observable army = Object.keys(unitData).reduce((units, key) => {
    units[key] = 0
    return units
  }, {})

  @computed get gold () {
    return Object.keys(this.army).reduce((gold, unit) => {
      return gold - (this.army[unit] * unitData[unit].cost)
    }, Game.startingGold)
  }

  @computed get supply () {
    const total = Object.values(this.army).reduce((supply, count) => { return supply + count }, 0)
    return Game.startingResouces - total
  }

  get info () {
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
