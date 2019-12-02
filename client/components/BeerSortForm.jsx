import React from 'react'

const BeerSortForm = () => {
    return (
        <React.Fragment>
            <form>
                <label htmlFor="sortBeerOptions">Sort beers: </label>
                <select id="sortBeerOptions">
                    <option
                    value="AlphabeticalA-Z">
                        Alphabetical A-Z
                    </option>
                    <option
                    value="AlphabeticalZ-A">
                    Alphabetical Z-A
                    </option>
                    <option
                    value="AbvAscending">
                        ABV Ascending
                    </option>
                    <option
                    value="AbvAscending">
                        ABV Descending
                    </option>
                    <option
                    value="IbuAscending">
                        IBU Ascending
                    </option>
                    <option
                    value="IbuDescending">
                        IBU Descending
                    </option>
                    <option
                    value="brewedOldest">
                        Date First Brewed Oldest
                    </option>
                    <option
                    value="brewedLatest">
                        Date First Brewed Latest
                    </option>
                </select>
                <input type="submit" value="Cheers" />
          </form>
        </React.Fragment>
    )
}

export default BeerSortForm