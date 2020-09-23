import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../home'
import Posts from '../Posts'
import Header from '../../components/Header'

const App = () => (
  <div>
    <Header/>
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
