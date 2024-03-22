import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Headers.css';
import Page1 from '../pages/Page1';

const Header = () => {
    return (
        <Router>
            <header>
                <nav>
                    <ul className="header-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/page1">Page 1</Link>
                        </li>
                        <li>
                            <Link to="/page2">Page 2</Link>
                        </li>
                        <li>
                            <Link to="/page3">Page 3</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </Router>
    );
};

export default Header;