import React from 'react'
import style from './style.sass'

class UnitView extends React.Component {

  static propTypes = {
    unit: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string.isRequired,
    cost: React.PropTypes.number.isRequired,
    attack: React.PropTypes.number.isRequired,
    health: React.PropTypes.number.isRequired,
    army: React.PropTypes.object.isRequired,
    addUnit: React.PropTypes.func.isRequired,
    removeUnit: React.PropTypes.func.isRequired
  }

  handleIncrement = () => {
    this.props.addUnit(this.props.unit)
  }

  handleDecrement = () => {
    this.props.removeUnit(this.props.unit)
  }

  render () {
    return <tr className={style.unit}>
      <td className={style.info}>
        <h4>{this.props.name}</h4>
        <p>{this.props.summary}</p>
        <dl>
          <dt>Cost</dt>
          <dd className={style.cost}>{this.props.cost}</dd>
          <dt>Attack</dt>
          <dd className={style.attack}>{this.props.attack}</dd>
          <dt>Health</dt>
          <dd className={style.health}>{this.props.health}</dd>
        </dl>
      </td>
      <td className={style.count}>
        &times;{this.props.army[this.props.unit]}
      </td>
      <td className={style.add}>
        <button onClick={this.handleIncrement}>+</button>
      </td>
      <td className={style.remove}>
        <button onClick={this.handleDecrement}>-</button>
      </td>
    </tr>
  }
}

export default UnitView
