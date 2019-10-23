import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import BeerList from './BeerList'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Header} />
      <Route exact path='/' component={BeerList} />

    </Router>
  )
}


export default App
