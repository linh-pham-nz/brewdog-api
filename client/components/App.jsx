import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import BeerList from './BeerList'
import ChosenBeer from './ChosenBeer'
import Filters from './Filters'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={BeerList} />
        <Route path='/filters' component={Filters} />
        <Route exact path='/beer/:id' component={ChosenBeer} />
      </div>

    </Router>
  )
}


export default App
