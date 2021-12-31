import * as React from 'react';
import { Link } from 'gatsby';
import { header } from '../styles/modules/header.module.css';

export function Navbar() {
  return (
    <div class="header">
      <header className={header}>
        <nav>
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" activeClassName="active">
                News
              </Link>
            </li>
            <li>
              <Link to="/hellu" activeClassName="active">
                Works
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
