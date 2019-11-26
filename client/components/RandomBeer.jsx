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
        console.log(this.state.beer)
        return(
            <React.Fragment>
                <p>Click this button to learn about a random beer!</p>
                <button id="beerButton">Cheers</button>
            </React.Fragment>
        ) 
    }
}

export default RandomBeer