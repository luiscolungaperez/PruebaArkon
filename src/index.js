import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './routes/app'
import { GlobalStyles } from './global-styles'
import { store } from './redux/store'
import { Provider } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('app')
)

