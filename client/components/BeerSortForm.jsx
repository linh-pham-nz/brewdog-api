import React from 'react'
// import { beers } from './BeerList'

class BeerSortForm extends React.Component {
    state = {
        value: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.value)
        // console.log(this.props.beers)
    }
    
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <form id="sortBeerForm" onSubmit={this.handleSubmit}>
                    <label id="sortBeerLabel" htmlFor="sortBeerOptions">Sort beers: </label>
                    <select id="sortBeerOptions" onChange={this.handleChange}>
                        <option value="alphabeticalA-Z">Alphabetical A-Z</option>
                        <option value="alphabeticalZ-A">Alphabetical Z-A</option>
                        <option value="abvAscending">ABV Ascending</option>
                        <option value="abvAscending">ABV Descending</option>
                        <option value="ibuAscending">IBU Ascending</option>
                        <option value="ibuDescending">IBU Descending</option>
                        <option value="brewedOldest">Date First Brewed Oldest</option>
                        <option value="brewedLatest">Date First Brewed Latest</option>
                    </select>
                    <input type="submit" value="Go!" />
                </form>
            </React.Fragment>
        )
    }
}

export default BeerSortForm