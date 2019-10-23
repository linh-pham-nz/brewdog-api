import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import BeerList from './BeerList'

const App = () => {
  return (
    <Router>
      <Header />
      <BeerList />

      <Route component={BeerList} />
    </Router>
  )
}


export default App
