import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.homePage}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder={props.searchTitle} aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// setting objects for navigation
Navbar.prototype = {
    title: PropTypes.string,
    homePage: PropTypes.string,
    aboutText: PropTypes.string,
    searchTitle: PropTypes.string,
}

// kon si value use kare jub koi value share nahi kari hai to
Navbar.defaultProps = {
    title: 'Logo Here',
    homePage: 'HomePage',
    aboutText: 'About text Here',
    searchTitle: 'search text here'
}