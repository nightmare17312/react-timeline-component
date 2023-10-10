import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle={
        color: 'white'
    };

    return (
        <nav>
            <h3>Timeline POC</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>vertical</li>
                </Link>
                <Link style={navStyle} to="/chrono-vertical">
                    <li>chrono-vertical</li>
                </Link>
                <Link style={navStyle} to="/chrono-horizontal">
                    <li>chrono-horizontal</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;