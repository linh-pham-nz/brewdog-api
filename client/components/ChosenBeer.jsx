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
        console.log(this.state.beer)
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-xl-2 col-sm-4">
                        <img 
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
            </React.Fragment>
        )
    }
}


export default ChosenBeer


