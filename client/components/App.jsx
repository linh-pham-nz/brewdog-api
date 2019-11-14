import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
import BeerList from './BeerList'
import ChosenBeer from './ChosenBeer'
import Filters from './Filters'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Navbar} />
        <Route exact path='/beers' component={BeerList} />
        <Route path='/filters' component={Filters} />
        <Route exact path='/beer/:id' component={ChosenBeer} />
        <h1>Welcome to the BrewDog Beers page!</h1>
        <p>Click on the links above to find out more about individual beers.</p>
      </div>

    </Router>
  )
}


export default App
