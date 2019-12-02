import React from 'react'

class BeerSortForm extends React.Component {
    handleChange = (e) => {
        const value = e.target.value
        console.log(value)
        // this.setState({

        // })
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <label htmlFor="sortBeerOptions">Sort beers: </label>
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
                    <input type="submit" value="Cheers" />
            </form>
            </React.Fragment>
        )
    }
}

export default BeerSortForm