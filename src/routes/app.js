import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Dashboard } from '../containers/dashboard'
import { ListTasks } from '../containers/list'


export const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/list' component={ListTasks} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
