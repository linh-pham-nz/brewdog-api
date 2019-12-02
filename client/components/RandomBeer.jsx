import React from 'react'
import { getRandomBeer } from '../apiClient' 

class RandomBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: [],
            food_pairing: []
        }
        this.newRandomBeer = this.newRandomBeer.bind(this)
    }

    componentDidMount() {
        this.newRandomBeer()
    }
    
    newRandomBeer() {
        getRandomBeer()
            .then(result => {
                let randomBeer = result.body[0]
                this.setState({
                    beer: randomBeer,
                    food_pairing: randomBeer.food_pairing
                })
            })     
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <div className="sticky" id="randomBeerSection">
                        <button 
                            onClick={this.newRandomBeer} 
                            id="randomBeerButton">
                            Click for another random beer
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-xl-2 col-sm-4">
                            <img 
                                id="chosenBeerImg"
                                width="120" 
                                src={this.state.beer.image_url === null 
                                    ? "defaultPlaceholder.png" 
                                    : this.state.beer.image_url}
                                alt={`image of ${this.state.beer.name}`}>
                            </img>
                        </div>
                        <div className="col-xl-10 col-sm-8">
                            <h2>{this.state.beer.name}</h2>
                            <div className="row">
                                <div className="col-xl-6 col-sm-12">
                                    <dl>
                                        <dt>Tagline</dt>
                                        <dd>{this.state.beer.tagline}</dd>
                                        <dt>Description</dt>
                                        <dd>{this.state.beer.description}</dd>
                                        <dt>First brewed</dt>
                                        <dd>{this.state.beer.first_brewed}</dd>
                                    </dl>
                                </div>
                                <div className="col-xl-6 col-sm-12">
                                    <dl>
                                        <dt>ABV</dt>
                                        <dd>{this.state.beer.abv}%</dd>
                                        <dt>IBU</dt>
                                        <dd>{this.state.beer.ibu}</dd>
                                        <dt>Food pairing</dt>
                                        {this.state.food_pairing.map((foods, i) => (
                                            <dd id="food-text" key={i}>- {foods}</dd>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default RandomBeer