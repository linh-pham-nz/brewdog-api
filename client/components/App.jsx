import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import BeerList from './BeerList'
import ChosenBeer from './ChosenBeer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={BeerList} />
        <Route path='/:id/:name' component={ChosenBeer} />
      </div>

    </Router>
  )
}


export default App
