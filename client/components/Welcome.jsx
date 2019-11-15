import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return(
        <React.Fragment>
            <h1>Welcome to the BrewDog Beers page!</h1>
            <p>Click on the links above to find out more about individual beers.</p>
            <p>Click this button to learn about a random beer!</p>
            <Link to="/random-beer"><button id="beerButton">Cheers</button></Link>
        </React.Fragment>
    ) 
}

export default Welcome