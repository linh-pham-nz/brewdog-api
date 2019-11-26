import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
import BeerList from './BeerList'
import ChosenBeer from './ChosenBeer'
import Filters from './Filters'
import Welcome from './Welcome'
import RandomBeer from './RandomBeer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Welcome} />
        <Route path='/beers' component={BeerList} />
        <Route path='/filters' component={Filters} />
        <Route exact path='/beer/:id' component={ChosenBeer} />
        <Route path='/random-beer' component={RandomBeer} />
      </div>
    </Router>
  )
}

export default App
