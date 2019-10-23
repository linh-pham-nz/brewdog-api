import React from 'react'
import { Link } from 'react-router-dom'

import { getAllBeers } from '../apiClient'

class BeerList extends React.Component {
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
      <React.Fragment>
        <ul>
          {this.state.beers.map(beer => (
            <li key={beer}><Link>{beer}</Link></li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default BeerList
