import React from 'react'
import { UnitListView, SummaryView, ResourcesView } from '..'
import style from './style.sass'

class AppView extends React.Component {

  static propTypes = {
    gold: React.PropTypes.number.isRequired,
    supply: React.PropTypes.number.isRequired,
    army: React.PropTypes.object.isRequired,
    addUnit: React.PropTypes.func.isRequired,
    removeUnit: React.PropTypes.func.isRequired
  }

  render () {
    return <div className={style.app}>
      <main>
        <UnitListView
          army={this.props.army}
          addUnit={this.props.addUnit}
          removeUnit={this.props.removeUnit}
        />
      </main>
      <aside>
        <ResourcesView
          army={this.props.army}
          gold={this.props.gold}
          supply={this.props.supply}
        />
        <SummaryView army={this.props.army} />
      </aside>
    </div>
  }
}

export default AppView
