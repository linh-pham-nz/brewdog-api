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
              <div className="col-xl-2 col-sm-4" key={i}>
                <div className="card card-dimensions zoom mb-4 shadow">
                <Link to={`/beer/${beer.id}`}>
                  <img 
                    className="card-img-top card-img-top-dimensions"
                    src={beer.image_url}
                  ></img>
                </Link>
                <div className="card-body">
                  <p className="card-body-name">{beer.name}</p>
                  <p className="card-body-details">ABV: {beer.abv}</p>
                  <p className="card-body-details">First brewed: {beer.first_brewed}</p>
                </div>
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

{/* <ul>
{this.state.beers.map((beer, i) => (
  <li key={i}><Link to={`/beer/${beer.id}`}>{beer.name}</Link></li>
))}
</ul> */}

{/* <h1 className="component-heading">ADOPT A CAT</h1>
                <div className="row">
                    {this.state.cats.map((cat, i) => {
                        return (
                            <div className="col-xl-4 col-sm-6" key={i}>
                                <div className="card card-dimensions zoom mb-4 shadow">
                                    <Link to={`/Name/${cat.id}`}>
                                        <img 
                                            className="card-img-top card-img-top-dimensions" 
                                            src={`/images/cats/${cat.name}.jpg`}>
                                        </img>
                                    </Link>
                                    <div className="card-body">
                                        <p className="card-body-name">{cat.name}</p>
                                        <p className="card-body-details">{cat.breed}</p>
                                        <p className="card-body-details">{cat.age} years old</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> */}

