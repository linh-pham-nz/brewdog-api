import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import BeerList from './BeerList'
import ChosenBeer from './ChosenBeer'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Header} />
      <Route exact path='/' component={BeerList} />
      <Route path='/:name/:id' component={ChosenBeer} />

    </Router>
  )
}


export default App
