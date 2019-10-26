import React from 'react'
import { Link } from 'react-router-dom'

import { getAllBeers } from '../apiClient'

class BeerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        beers: []
    }
  }

  componentDidMount () {
    getAllBeers()
      .then(result => {
        const allBeerInfo = result.body
        allBeerInfo.sort((a, b) => (a.name > b.name) ? 1 : -1)
        this.setState({
          beers: allBeerInfo
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <ul>
          {this.state.beers.map((beer, i) => (
            <li key={i}><Link to={`/${beer.id}`}>{beer.name}</Link></li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default BeerList

