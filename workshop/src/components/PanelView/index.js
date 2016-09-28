import React from 'react'
import cx from 'classnames'
import style from './style.sass'

class PanelView extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    children: React.PropTypes.element
  }

  render () {
    return <div className={cx(style.panel, this.props.className)}>
      <h3>{this.props.title}</h3>
      <div className={style.content} children={this.props.children} />
    </div>
  }
}

export default PanelView
