import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <nav className="navbar">
            <div className="container">
                
                <ul className="nav-links">
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Abouts">About</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default MainNavigation;
