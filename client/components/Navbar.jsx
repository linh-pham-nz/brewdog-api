import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <h1><i className="fas fa-beer"></i>BREWDOG BEERS<i className="fas fa-beer"></i></h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/filters">Filters</Link></li>
                    <li><Link to="/beers">Beers</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar