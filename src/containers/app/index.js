import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../home'
import Posts from '../Posts'
import Header from '../../components/Header'
import PostDetails from '../PostDetails'

const App = () => (
  <div>
    <Header/>
    <main>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts/:id" component={PostDetails}/>
      <Route exact path="/posts" component={Posts}/>
      <Redirect from="*" to="/"/>
      </Switch>
      
    </main>
  </div>
)

export default App
