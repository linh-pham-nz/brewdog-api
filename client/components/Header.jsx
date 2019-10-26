import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <React.Fragment>
            <h1>BREWDOG BEER LIST</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/filters">Filters</Link></li>
            </ul>
        </React.Fragment>
    )
}

export default Header