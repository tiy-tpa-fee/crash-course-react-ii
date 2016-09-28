import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { AppView } from './components'

import './styles/screen.sass'

const render = (app) => {
  ReactDOM.render(
    <AppContainer>{app}</AppContainer>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('./components', () => {
    const NextApp = require('./components').AppView
    render(<NextApp />)
  })
}

render(<AppView />)
