import * as React from 'react';
import { Link } from 'gatsby';
import * as navbarStyles from '../styles/modules/navbar.module.css';

export function Navbar() {
    return (
        <div class="header">
            <header>
                <nav className={navbarStyles}>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={navbarStyles}
                                activeClassName="active"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" activeClassName="active">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" activeClassName="active">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" activeClassName="active">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
