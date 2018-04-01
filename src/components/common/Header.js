import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <IndexLink className="nav-link" to="/" activeclassNameName="active">Home</IndexLink>
                    <Link className="nav-link" to="about" activeclassNameName="active">About</Link>
                    <Link className="nav-link" to="manager" activeclassNameName="active">Bat-manager</Link>
                    <Link className="nav-link" to="contact" activeclassNameName="active">Contact</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Header;