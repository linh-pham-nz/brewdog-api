import React from 'react'

class RandomBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: [],
            food_pairing: []
        }
    }

    render() {
        return(
            <React.Fragment>
                <p>Click this button to learn about a random beer!</p>
                <button id="beerButton">Cheers</button>
            </React.Fragment>
        ) 
    }
}

export default RandomBeer