import React from 'react'
import { Link } from 'react-router-dom'

import { getAllBeers } from '../apiClient'

// getAllBeers()

class BeerList extends React.Component {
  state = {
    beerName: '',
    beerId: ''
  }

  componentDidMount () {
    getAllBeers()
      .then(result => {
        const allBeerInfo = result.body
        const beersIdAndName = []
        for (let i = 0; i < allBeerInfo.length; i++) {
          beersIdAndName.push({id: allBeerInfo[i].id, name: allBeerInfo[i].name})
        }
        console.log(beersIdAndName)
        // console.log(beersIdAndName['name'])
        this.setState({
          beerName: beersIdAndName.name,
          beerId: beersIdAndName.id
        })
        // console.log(this.state.beerName)
      })
  }

  render () {
    // let beerName = this.state.beerName
    // beerName.sort()
    // console.log(this.state.beerName)
    return (
      <React.Fragment>
        {/* <ul>
          {this.state.beerName.map((beer, i) => (
            <li key={i}><Link>{beer}</Link></li>
          ))}
        </ul> */}
      </React.Fragment>
    )
  }
}

export default BeerList

// allBeerInfo[i].id