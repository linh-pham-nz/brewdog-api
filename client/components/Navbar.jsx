import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <div className="d-flex logo">
                            <Link to="/">
                                <img 
                                    className="logo-image" 
                                    src="BrewDogLogo3.png">
                                </img>
                            </Link>
                        </div>
                        <br></br>
                        </div>
                    <div className="row">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Home</Link>
                            <Link className="nav-item nav-link" to="/filters">Filters</Link>
                            <Link className="nav-item nav-link" to="/beers">Beers</Link>
                            <Link className="nav-item nav-link" to="/random-beer">Random Beer</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar