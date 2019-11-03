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
        <div className="row">
          {this.state.beers.map((beer, i) => {
            return (
              <div className="col-xl-3 col-sm-3 d-flex" key={i}>
                <div className="card mb-4 flex-fill">
                  <Link to={`/beer/${beer.id}`}>
                    <div className="card-body">
                      <p className="card-title">{beer.name}</p>
                      <p className="card-text">ABV: {beer.abv}%</p>
                      <p className="card-text">First brewed: {beer.first_brewed}</p>
                    <img 
                      className="card-img-bottom"
                      src={beer.image_url}
                    ></img>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default BeerList


