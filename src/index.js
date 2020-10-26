import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './routes/app'
import { GlobalStyles } from './global-styles'

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('app')
)

