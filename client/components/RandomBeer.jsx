import React from 'react'
import { getRandomBeer } from '../apiClient' 

class RandomBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: [],
            food_pairing: []
        }
    }

    componentDidMount() {
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
                    <p>Click this button to learn about a random beer!</p>
                    <button id="beerButton">Cheers</button>
                    <br></br>
                </div>
                <div>
                    <div className="row">
                        <div className="col-xl-2 col-sm-4">
                            <img 
                                id="chosenBeerImg"
                                width="120" 
                                src={this.state.beer.image_url === null 
                                    ? "defaultPlaceholder.png" 
                                    : this.state.beer.image_url}>
                            </img>
                        </div>
                        <div className="col-xl-10 col-sm-8">
                            <h2>{this.state.beer.name}</h2>
                            <dl>
                                <dt>Tagline:</dt>
                                <dd>{this.state.beer.tagline}</dd>
                                <dt>Description:</dt>
                                <dd>{this.state.beer.description}</dd>
                                <dt>ABV:</dt>
                                <dd>{this.state.beer.abv}</dd>
                                <dt>First brewed:</dt>
                                <dd>{this.state.beer.first_brewed}</dd>
                                <dt>Food pairing:</dt>
                                {this.state.food_pairing.map((foods, i) => (
                                    <dd id="food-text" key={i}>{foods}</dd>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default RandomBeer