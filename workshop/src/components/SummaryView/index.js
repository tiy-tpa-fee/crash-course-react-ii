import React from 'react'
import { observer } from 'mobx-react'
import { PanelView } from '..'
import style from './style.sass'

import game from '../../game.js'

@observer class SummaryView extends React.Component {

  render () {
    const units = Object.keys(game.army).filter(unit => game.army[unit] > 0)
    let list
    if (units.length > 0) {
      list = <ul>
        {units.map((unit, i) => {
          return <li key={i}>
            {game.info[unit].name}
            <span className={style.count}>
              &times;{game.army[unit]}
            </span>
          </li>
        })}
      </ul>
    } else {
      list = <p>No units chosen.</p>
    }
    return <PanelView title='Summary' className={style.summary}>
      {list}
    </PanelView>
  }
}

export default SummaryView
