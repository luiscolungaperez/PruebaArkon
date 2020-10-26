import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Landing } from '../containers/landing'
import { AddTasks } from '../containers/add'
import { EditTasks } from '../containers/edit'
import { DeleteTasks } from '../containers/delete'
import { ListTasks } from '../containers/list'


export const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/add' component={AddTasks} />
          <Route exact path='/edit' component={EditTasks} />
          <Route exact path='/delete' component={DeleteTasks} />
          <Route exact path='/list' component={ListTasks} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
