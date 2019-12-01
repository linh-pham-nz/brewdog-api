import React from 'react'
import { Link } from 'react-router-dom'

import { getBeersById1to80, 
         getBeersById81to160, 
         getBeersById161to240,
         getBeersById241to320,
         getBeersById321to400 } from '../apiClient'

class BeerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        beers: []
    }
  }

  componentDidMount () {
    const allBeerInfo = []
    getBeersById321to400()
      .then(result => {
        const beerInfo321to400 = result.body
        allBeerInfo.push(...beerInfo321to400)
      })
    getBeersById241to320()
      .then(result => {
        const beerInfo241to320 = result.body
        allBeerInfo.push(...beerInfo241to320)
      })  
    getBeersById161to240()
      .then(result => {
        const beerInfo161to240 = result.body
        allBeerInfo.push(...beerInfo161to240)
      })
    getBeersById81to160()
      .then(result => {
        const beerInfo81to160 = result.body
        allBeerInfo.push(...beerInfo81to160)
      })
    getBeersById1to80()
      .then(result => {
        const beerInfo1to80 = result.body
        allBeerInfo.push(...beerInfo1to80)
        // allBeerInfo.sort((a, b) => (a.id > b.id) ? 1 : -1)
        allBeerInfo.sort((a, b) => (a.name > b.name) ? 1 : -1)
        console.log(allBeerInfo)
        this.setState({
          beers: allBeerInfo
        })
      })
    }

  render () {
    return (
      <React.Fragment>
        <div>
          <form>
            <select>
              <optgroup label="Alphabetical">
                <option selected>Alphabetical A-Z</option>
                <option>Alphabetical Z-A</option>
              </optgroup>
            </select>
          </form>
        </div>
        <div className="row">
          {this.state.beers.map((beer, i) => {
            return (
              <div className="col-xl-3 col-md-4 col-sm-6 d-flex" key={i}>
                <div className="card mb-4 flex-fill">
                  <Link to={`/beer/${beer.id}`} target="_blank">
                    <div className="card-body">
                      <p className="card-title">{beer.name}</p>
                      <p className="card-text"><strong>ABV: </strong>{beer.abv}%</p>
                      <p className="card-text"><strong>IBU: </strong>{beer.ibu}</p>
                      <p className="card-text"><strong>First brewed: </strong>{beer.first_brewed}</p>
                      <img
                        className="card-img-bottom"
                        src={beer.image_url === null 
                          ? "defaultPlaceholder.png" 
                          : beer.image_url}
                        alt={`image of ${beer.name}`}>                        
                      </img>
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
