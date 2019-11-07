import React from 'react'
import { Link } from 'react-router-dom'

import { getBeersById1to80, getBeersById81to160, getBeersById161to240 } from '../apiClient'

class BeerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        beers: []
    }
  }

  componentDidMount () {
    const allBeerInfo = []
    getBeersById1to80()
      .then(result => {
        const beerInfo1to80 = result.body
        for (let i = 0; i < beerInfo1to80.length; i++) {
          allBeerInfo.push(beerInfo1to80[i])
        }
      })
    getBeersById81to160()
      .then(result => {
        const beerInfo81to160 = result.body
          for (let i = 0; i < beerInfo81to160.length; i++) {
            allBeerInfo.push(beerInfo81to160[i]);
          }
      })
    getBeersById161to240()
      .then(result => {
        const beerInfo161to240 = result.body
        for (let i = 0; i < beerInfo161to240.length; i++) {
          allBeerInfo.push(beerInfo161to240[i])
        }
        console.log(allBeerInfo)
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
              <div className="col-xl-3 col-md-4 col-sm-6 d-flex" key={i}>
                <div className="card mb-4 flex-fill">
                  <Link to={`/beer/${beer.id}`}>
                    <div className="card-body">
                      <p className="card-title">{beer.name}</p>
                      <p className="card-text"><strong>ABV: </strong>{beer.abv}%</p>
                      <p className="card-text"><strong>First brewed: </strong>{beer.first_brewed}</p>
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

