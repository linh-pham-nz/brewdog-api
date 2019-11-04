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
      </div>

    </Router>
  )
}


export default App
