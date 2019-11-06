import React from 'react'
import { Link } from 'react-router-dom'

// import * from '../../server/public/BrewDogLogo.png'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex logo">
                        <Link to="/"><img className="logo-image" src="BrewDogLogo.png"></img><h1>BREWDOG BEERS</h1></Link>
                    </div>
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/filters">Filters</Link>
                        <Link className="nav-item nav-link" to="/beers">Beers</Link>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar