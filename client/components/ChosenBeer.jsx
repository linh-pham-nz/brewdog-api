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
                console.log(data, data[id])
                this.setState({
                    beer: data
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>CHOSEN BEER</h1>
                <h4>{this.state.beer.name}</h4>
            </React.Fragment>
        )
    }
}

export default ChosenBeer