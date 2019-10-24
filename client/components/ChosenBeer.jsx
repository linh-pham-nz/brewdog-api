import React from 'react'
import { getChosenBeer } from '../apiClient'

class ChosenBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: []
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params
        getChosenBeer(id)
            .then(result => {
                const dataObject = result.body[0]
                this.setState({
                    beer: dataObject
                })
            })
    }

    render() {
        console.log(this.state.beer)
        return (
            <React.Fragment>
                <h4>{this.state.beer.name}</h4>
                <p>Tagline: {this.state.beer.tagline}</p>
                <p>Description: {this.state.beer.description}</p>
                <p>ABV: {this.state.beer.abv}</p>
                <p>First brewed: {this.state.beer.first_brewed}</p>
                <p>Food pairing: {this.state.beer.food_pairing}</p>
                {/* <ul>
                    {this.state.beer.food_pairing.map(foods => (
                        <li key={foods}>{foods}</li>
                    ))}
                </ul> */}
                <img src={this.state.beer.image_url}></img>
                <p>ABV: {this.state.beer.abv}</p>
                <p>ABV: {this.state.beer.abv}</p>

            </React.Fragment>
        )
    }
}

export default ChosenBeer