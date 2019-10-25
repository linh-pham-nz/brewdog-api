import React from 'react'
import { getChosenBeer } from '../apiClient'

class ChosenBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: [],
            food_pairing: []
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params
        getChosenBeer(id)
            .then(result => {
                const dataObject = result.body[0]
                this.setState({
                    beer: dataObject,
                    food_pairing: dataObject.food_pairing
                })
            })
    }

    render() {
        console.log(this.state.food_pairing)
        return (
            <React.Fragment>
                <h4>{this.state.beer.name}</h4>
                <div className="row">
                    <div className="col-xl-6 col-sm-6">
                        <p>Tagline: {this.state.beer.tagline}</p>
                        <p>Description: {this.state.beer.description}</p>
                        <p>ABV: {this.state.beer.abv}</p>
                        <p>First brewed: {this.state.beer.first_brewed}</p>
                        <p>Food pairing: </p>
                        <ul>
                            {this.state.food_pairing.map((foods, i) => (
                                <li key={i}>{foods}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                        <img src={this.state.beer.image_url}></img>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default ChosenBeer
