import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex logo">
                        <Link to="/">
                            <img 
                                className="logo-image" 
                                src="BrewDogLogo.png">
                            </img>
                            <h1>BREWDOG BEERS</h1>
                        </Link>
                    </div>
                    <br></br>
                    <div className="navbar-nav row" id="nav-row">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/filters">Filters</Link>
                        <Link className="nav-item nav-link" to="/beers">Beers</Link>
                        <Link className="nav-item nav-link" to="/random-beer">Random Beer</Link>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar