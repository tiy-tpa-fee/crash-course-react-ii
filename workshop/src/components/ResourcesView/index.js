import React from 'react'
import style from './style.sass'
import unitData from '../../units.json'
import { PanelView } from '..'

class ResourcesView extends React.Component {

  static propTypes = {
    army: React.PropTypes.object.isRequired,
    gold: React.PropTypes.number.isRequired,
    supply: React.PropTypes.number.isRequired
  }

  get gold () {
    return Object.keys(this.props.army).reduce((gold, unit) => {
      return gold - (this.props.army[unit] * unitData[unit].cost)
    }, this.props.gold)
  }

  get supply () {
    const total = Object.values(this.props.army).reduce((supply, count) => { return supply + count }, 0)
    return this.props.supply - total
  }

  render () {
    return <PanelView title='Resources' className={style.resources}>
      <ul>
        <li className={style.gold}>{this.gold}</li>
        <li className={style.resources}>{this.supply}</li>
      </ul>
    </PanelView>
  }
}

export default ResourcesView
