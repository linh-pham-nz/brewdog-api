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
                const data = result.body
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
                <h1>CHOSEN BEER</h1>
                <h4>This beer is: {this.state.beer.name}</h4>
            </React.Fragment>
        )
    }
}

export default ChosenBeer