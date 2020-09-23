import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../home'
import Posts from '../Posts'

const App = () => (
  <div>
    <main>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts}/>
      <Redirect from="*" to="/"/>
      </Switch>
      
    </main>
  </div>
)

export default App
