import React from 'react'

const Welcome = () => {
    return(
        <React.Fragment>
            <h1>Welcome to the BrewDog Beers page!</h1>
            <p>Click on the links above to find out more about individual beers.</p>
            <p>Click this button to learn about a random beer!</p>
            <button id="beerButton">Cheers</button>
        </React.Fragment>
    ) 
}

export default Welcome