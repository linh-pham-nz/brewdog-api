import React from 'react'

import { getAllBeers } from '../apiClient'

class App extends React.Component {
  state = {
    beers: []
  }

  componentDidMount () {
    getAllBeers()
      .then(result => {
        const allBeerInfo = result.body
        const beerNames = []
        for (let i = 0; i < allBeerInfo.length; i++) {
          beerNames.push(allBeerInfo[i].name)
        }
        this.setState({
          beers: beerNames
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>BREWDOG BEER LIST</h1>
        <ul>
          {this.state.beers.map(beer => (
            <li key={beer}>{beer}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
