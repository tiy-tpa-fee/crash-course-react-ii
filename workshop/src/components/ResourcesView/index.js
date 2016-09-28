import React from 'react'
import { observer } from 'mobx-react'
import { PanelView } from '..'
import game from '../../game'
import style from './style.sass'

@observer class ResourcesView extends React.Component {

  render () {
    return <PanelView title='Resources' className={style.resources}>
      <ul>
        <li className={style.gold}>{game.gold}</li>
        <li className={style.resources}>{game.supply}</li>
      </ul>
    </PanelView>
  }
}

export default ResourcesView
