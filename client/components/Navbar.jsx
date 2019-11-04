import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="d-flex">
                    <Link to="/"><h1><i className="fas fa-beer"></i>BREWDOG BEERS<i className="fas fa-beer"></i></h1></Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/filters">Filters</Link>
                    <Link className="nav-item nav-link" to="/beers">Beers</Link>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar